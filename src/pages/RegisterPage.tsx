import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authErrorMessage } from '@/features/auth/auth-errors';
import { RegisterSchema, type RegisterValues } from '@/features/auth/schema';
import { authClient } from '@/lib/auth-client';
import { APP_NAME } from '@/lib/config';

type FieldProps = ComponentProps<typeof Input> & {
	id: string;
	label: string;
	error?: string;
};

function Field({ id, label, error, ...inputProps }: FieldProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id}>{label}</Label>
			<Input
				id={id}
				aria-invalid={!!error}
				className="h-12 bg-background dark:bg-card"
				{...inputProps}
			/>
			{error && <p className="text-sm text-destructive">{error}</p>}
		</div>
	);
}

export function RegisterPage() {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterValues>({ resolver: zodResolver(RegisterSchema) });

	const onSubmit = async (values: RegisterValues) => {
		setServerError(null);
		const { error } = await authClient.signUp.email({
			name: values.name,
			email: values.email,
			password: values.password,
		});
		if (error) {
			setServerError(authErrorMessage(error));
			return;
		}
		navigate('/', { replace: true });
	};

	return (
		<div className="w-full max-w-md">
			<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
				Bienvenue chez {APP_NAME}
			</p>
			<h1 className="mt-2 font-heading text-4xl font-medium leading-none tracking-tighter sm:text-5xl">
				Créez votre espace.
			</h1>
			<p className="mt-3 text-sm text-muted-foreground">
				Quelques secondes suffisent pour commencer à organiser vos idées.
			</p>

			<form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-4">
				<Field
					id="name"
					label="Nom complet"
					placeholder="Marie Laurent"
					autoComplete="name"
					error={errors.name?.message}
					{...register('name')}
				/>
				<Field
					id="email"
					label="Adresse e-mail"
					type="email"
					placeholder="vous@exemple.fr"
					autoComplete="email"
					error={errors.email?.message}
					{...register('email')}
				/>
				<Field
					id="password"
					label="Mot de passe"
					type="password"
					placeholder="8 caractères minimum"
					autoComplete="new-password"
					error={errors.password?.message}
					{...register('password')}
				/>
				<Field
					id="confirmPassword"
					label="Confirmer le mot de passe"
					type="password"
					autoComplete="new-password"
					error={errors.confirmPassword?.message}
					{...register('confirmPassword')}
				/>

				{serverError && (
					<p className="text-sm text-destructive" role="alert">
						{serverError}
					</p>
				)}

				<Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? (
						'Création…'
					) : (
						<>
							Créer mon compte
							<ArrowRight />
						</>
					)}
				</Button>
			</form>

			<p className="mt-6 text-center text-xs text-muted-foreground">
				Vous avez déjà un compte ?{' '}
				<Link to="/login" className="font-bold text-foreground underline underline-offset-4">
					Se connecter
				</Link>
			</p>
		</div>
	);
}