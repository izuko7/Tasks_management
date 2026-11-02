import { useState } from "react";
import { Link, useNavigate } from 'react-router';
import {zodResolver} from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginSchema, type LoginValues } from "@/features/auth/schema";
import {useForm} from 'react-hook-form';
import { authClient } from "@/lib/auth-client";
import { authErrorMessage } from "@/features/auth/auth-errors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export function LoginPage() {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register, 
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginValues>({resolver: zodResolver(LoginSchema)});

    const onSubmit = async (values : LoginValues) => {
        setServerError(null);
        const { error } = await authClient.signIn.email(values);
        if(error) {
            setServerError(authErrorMessage(error));
            return;
        }
        navigate('/', {replace : true});
    };

    return(
        <main className="flex justify-center px-4 py-16">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="mt-2 font-heading text-2xl font-medium leading-none tracking-tighter sm:text-3xl">Connectez-vous.</CardTitle>
                    <CardDescription>Retrouvez vos projets et reprenez là où vous vous êtes arrêté.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    aria-invalid={!!errors.email}
                                    {...register('email')}
                                />
                            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                aria-invalid={!!errors.password}
                                {...register('password')}
                            />
                            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                        </div>
                        {serverError && (
                            <p className="text-sm text-destructive" role="alert">
                                {serverError}
                            </p>
                        )}

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Connexion...' : 'Se connecter'}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                       Pas encore de compte ?{' '}
                       <Link to="/register" className="font-semibold text-foreground underline underline-offset-4">
                            Créer un compte
                       </Link>
                    </p>
                </CardContent>
            </Card>
        </main>
    )
}