import { ChartColumn, Folder, ListChecks } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const TASKS_DONE = 18;
const TASKS_TOTAL = 25;
const progressPercent = Math.round((TASKS_DONE / TASKS_TOTAL) * 100);

const priorityBars = ['w-full', 'w-5/6', 'w-2/3'];
const chartBars = [35, 55, 45, 70, 60, 85, 65];
const highlightedBar = 5;

type FeatureCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
	className?: string;
	iconClassName?: string;
	children?: ReactNode;
};

function FeatureCard({
	icon: Icon,
	title,
	description,
	className,
	iconClassName,
	children,
}: FeatureCardProps) {
	return (
		<article className={cn('flex min-h-97.5 flex-col rounded-[34px] p-8', className)}>
			<span
				className={cn(
					'grid size-11 place-items-center rounded-[14px] bg-card text-card-foreground',
					iconClassName,
				)}
			>
				<Icon className="size-5" />
			</span>
			<h3 className="mt-16 font-heading text-2xl font-bold tracking-tight">{title}</h3>
			<p className="mt-2.5 text-sm leading-6 opacity-70">{description}</p>
			<div aria-hidden="true" className="mt-auto pt-6">
				{children}
			</div>
		</article>
	);
}

export function FeaturesSection() {
	return (
		<section id="fonctionnalites" className="scroll-mt-14 bg-card px-8 py-24 dark:bg-background">
			<div className="mx-auto max-w-2xl text-center">
				<span className="inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-secondary-foreground">
					Tout au même endroit
				</span>
				<h2 className="mt-4 font-heading text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl">
					Une productivité qui respire enfin.
				</h2>
				<p className="mt-3 text-sm text-muted-foreground">
					Les bons outils doivent alléger votre esprit, pas ajouter de la complexité.
				</p>
			</div>

			<div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
				<FeatureCard
					icon={ListChecks}
					title="Vos priorités, très claires."
					description="Visualisez ce qui compte maintenant et avancez sans vous disperser."
					className="bg-brand text-brand-foreground"
				>
					<div className="grid gap-2">
						{priorityBars.map((width) => (
							<div key={width} className={cn('h-9 rounded-[10px] bg-brand-foreground/10', width)} />
						))}
					</div>
				</FeatureCard>

				<FeatureCard
					icon={Folder}
					title="Chaque projet reste vivant."
					description="Suivez les progrès, les échéances et votre équipe dans un même espace."
					className="bg-deep text-deep-foreground"
					iconClassName="bg-deep-foreground/15 text-deep-foreground"
				>
					<div className="rounded-[17px] bg-deep-foreground/10 p-5">
						<p className="font-heading text-3xl font-bold">{progressPercent}%</p>
						<div className="my-3 h-1.5 overflow-hidden rounded-full bg-deep-foreground/15">
							<div
								className="h-full rounded-full bg-brand"
								style={{ width: `${progressPercent}%` }}
							/>
						</div>
						<p className="text-xs opacity-60">
							{TASKS_DONE} tâches sur {TASKS_TOTAL}
						</p>
					</div>
				</FeatureCard>

				<FeatureCard
					icon={ChartColumn}
					title="Progressez à votre rythme."
					description="Comprenez vos habitudes grâce à des statistiques simples et utiles."
					className="bg-background dark:bg-secondary"
				>
					<div className="flex h-32 items-end gap-2">
						{chartBars.map((height, index) => (
							<div
								key={index}
								className={cn(
									'flex-1 rounded-t-[7px] rounded-b-sm',
									index === highlightedBar ? 'bg-primary' : 'bg-primary/15',
								)}
								style={{ height: `${height}%` }}
							/>
						))}
					</div>
				</FeatureCard>
			</div>
		</section>
	);
}