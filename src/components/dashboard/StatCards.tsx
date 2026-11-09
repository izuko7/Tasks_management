import { Check, Clock, Flag, ListChecks } from 'lucide-react';
import type { TaskStats } from '@/features/tasks/stats';

export function StatCards({ stats }: { stats: TaskStats }) {
	const cards = [
		{
			icon: ListChecks,
			label: 'Total des tâches',
			value: stats.total,
			note: `+${stats.createdThisWeek} cette semaine`,
			iconClass: 'bg-brand text-brand-foreground',
		},
		{
			icon: Check,
			label: 'Terminées',
			value: stats.done,
			note: `${stats.percent}% du total`,
			iconClass: 'bg-secondary text-secondary-foreground',
		},
		{
			icon: Clock,
			label: 'En cours',
			value: stats.inProgress,
			note: `${stats.todo} à faire`,
			iconClass: 'bg-deep text-deep-foreground',
		},
		{
			icon: Flag,
			label: 'En retard',
			value: stats.overdue,
			note: stats.overdue > 0 ? 'À traiter en priorité' : 'Rien en retard',
			iconClass: 'bg-destructive/15 text-destructive',
		},
	];

	return (
		<section aria-label="Compteurs" className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
			{cards.map((card) => (
				<div
					key={card.label}
					className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
				>
					<span
						className={`grid size-11 shrink-0 place-items-center rounded-[14px] ${card.iconClass}`}
					>
						<card.icon className="size-5" />
					</span>
					<div className="min-w-0">
						<p className="truncate text-[11px] text-muted-foreground">{card.label}</p>
						<p className="font-heading text-2xl font-extrabold leading-tight tracking-tight">
							{String(card.value).padStart(2, '0')}
						</p>
						<p className="truncate text-[10px] text-muted-foreground">{card.note}</p>
					</div>
				</div>
			))}
		</section>
	);
}