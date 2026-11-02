import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { APP_NAME } from '@/lib/config';
import { AppPreview } from './AppPreview';

export function HeroSection() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
			<div className="flex flex-col items-start gap-6">
				<span className="rounded-full bg-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-foreground">
					Votre journée, en mieux
				</span>

				<h1 className="max-w-xl font-heading text-5xl font-medium leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl">
					Moins de bruit. Plus de choses{' '}
					<em className="not-italic underline decoration-brand decoration-[0.14em] underline-offset-[0.08em]">
						accomplies.
					</em>
				</h1>

				<p className="max-w-lg text-base leading-7 text-muted-foreground">
					{APP_NAME} réunit vos tâches, projets et priorités dans un espace calme, clair et pensé
					pour vous faire avancer.
				</p>

				<div className="flex flex-col gap-3 sm:flex-row">
					<Button asChild size="lg">
						<Link to="/register">
							<ArrowRight />
							Créer mon espace
						</Link>
					</Button>
					<Button asChild size="lg" variant="outline">
						<Link to="/login">J'ai déjà un compte</Link>
					</Button>
				</div>
			</div>
            <AppPreview/>
		</section>
	);
}