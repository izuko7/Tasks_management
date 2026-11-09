import { ArrowLeft, ChartColumn, Check } from 'lucide-react';
import { Link, Outlet } from 'react-router';
import { Logo } from '@/components/Logo';

export function AuthLayout() {
	return (
		<div className="grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]">
			<aside className="relative hidden flex-col overflow-hidden bg-deep p-10 text-deep-foreground lg:flex">
				<Link to="/" className="relative z-10 w-fit">
					<Logo />
				</Link>

				<div aria-hidden="true">
					<div className="absolute -right-64 top-16 size-137.5 rounded-full border border-brand/15" />
					<div className="absolute -right-32 top-44 size-80 rounded-full border border-brand/15" />
					<div className="absolute right-9 top-1/4 flex rotate-[4deg] items-center gap-2 rounded-xl bg-deep-foreground px-3.5 py-2.5 text-[10px] font-bold text-deep shadow-lg">
						<Check className="size-3.5" />
						Objectif du jour atteint
					</div>
					<div className="absolute right-20 top-[42%] flex -rotate-3 items-center gap-2 rounded-xl bg-deep-foreground px-3.5 py-2.5 text-[10px] font-bold text-deep shadow-lg">
						<ChartColumn className="size-3.5" />
						+24% de productivité
					</div>
				</div>

				<figure className="relative z-10 mt-auto max-w-lg">
					<span className="inline-block rounded-full bg-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-foreground">
						Pensé pour avancer
					</span>
					<blockquote className="mt-5 font-heading text-4xl font-medium leading-[1.12] tracking-tighter xl:text-5xl">
						“La clarté transforme les journées chargées en progrès visibles.”
					</blockquote>
					<figcaption className="mt-7 flex items-center gap-3">
						<span className="grid size-10 place-items-center rounded-full bg-deep-foreground text-xs font-extrabold text-deep">
							ML
						</span>
						<span className="grid">
							<span className="text-xs font-bold">Marie Laurent</span>
							<span className="text-[10px] text-deep-foreground/60">Product designer chez June</span>
						</span>
					</figcaption>
				</figure>
			</aside>

			<main className="relative flex items-center justify-center bg-card px-6 py-24 dark:bg-background sm:px-12">
				<Link to="/" className="absolute left-6 top-8 lg:hidden">
					<Logo />
				</Link>
				<Link
					to="/"
					className="absolute right-8 top-8 flex items-center gap-2 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
				>
					<ArrowLeft className="size-4" />
					Retour à l’accueil
				</Link>
				<Outlet />
			</main>
		</div>
	);
}