import { CalendarDays, Check, Folder, LayoutGrid, ListChecks } from 'lucide-react';
import { APP_NAME } from '@/lib/config';

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.68;

const navIcons = [LayoutGrid, ListChecks, Folder, CalendarDays];

const stats = [
	{ label: 'Tâches', value: '08' },
	{ label: 'Terminés', value: '05' },
	{ label: 'En cours', value: '03' },
];

type Priority = 'Haute' | 'Moyenne';

const priorityClass: Record<Priority, string> = {
	Haute: 'bg-destructive/15 text-destructive',
	Moyenne: 'bg-brand text-brand-foreground',
};

const tasks: { title: string; project: string; priority: Priority; done: boolean }[] = [
	{ title: 'Finaliser la stratégie', project: 'Refonte produit', priority: 'Haute', done: true },
	{ title: 'Préparer le brief créatif', project: 'Campagne Q2', priority: 'Moyenne', done: false },
];

export function AppPreview() {
	return (
		<div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
			<div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-50 dark:opacity-15" />

			<div className="absolute right-2 top-6 z-10 flex rotate-[4deg] items-center gap-2 rounded-xl bg-card px-3.5 py-2.5 text-[10px] font-bold text-card-foreground shadow-lg">
				<Check className="size-3.5" />
				5 tâches terminées
			</div>

			<div className="relative grid rotate-[1.5deg] grid-cols-[56px_1fr] overflow-hidden rounded-[30px] border-[7px] border-card bg-background shadow-2xl">
				<div className="flex flex-col items-center gap-3 bg-deep py-5 text-deep-foreground/60">
					<span className="mb-2 grid size-8 place-items-center rounded-[10px_10px_10px_3px] bg-brand font-heading text-lg font-extrabold text-brand-foreground">
						{APP_NAME.charAt(0).toLowerCase()}
					</span>
					{navIcons.map((Icon, index) => (
						<span
							key={index}
							className={`grid size-9 place-items-center rounded-[10px] ${
								index === 0 ? 'bg-brand text-brand-foreground' : ''
							}`}
						>
							<Icon className="size-4" />
						</span>
					))}
				</div>

				<div className="space-y-3 p-5 sm:p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-[10px] text-muted-foreground">Bonjour Claude,</p>
							<p className="font-heading text-lg font-bold">Votre journée</p>
						</div>
						<span className="grid size-8 place-items-center rounded-full border-2 border-card bg-secondary text-[10px] font-extrabold text-secondary-foreground">
							ML
						</span>
					</div>

					<div className="flex items-center justify-between gap-4 rounded-[21px] bg-deep p-5 text-deep-foreground">
						<div className="flex flex-col items-start gap-2">
							<p className="text-[8px] uppercase tracking-[0.13em] text-deep-foreground/60">
								Objectif du jour
							</p>
							<p className="max-w-44 font-heading text-xl font-bold leading-tight">
								Faites avancer ce qui compte.
							</p>
							<span className="rounded-full bg-brand px-2.5 py-1 text-[9px] font-extrabold text-brand-foreground">
								{Math.round(PROGRESS * 100)}% accompli
							</span>
						</div>
						<div className="relative grid size-20 shrink-0 place-items-center">
							<svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90">
								<circle
									cx="40"
									cy="40"
									r={RADIUS}
									fill="none"
									strokeWidth="7"
									className="stroke-deep-foreground/15"
								/>
								<circle
									cx="40"
									cy="40"
									r={RADIUS}
									fill="none"
									strokeWidth="7"
									strokeLinecap="round"
									strokeDasharray={`${CIRCUMFERENCE * PROGRESS} ${CIRCUMFERENCE}`}
									className="stroke-brand"
								/>
							</svg>
							<span className="relative font-heading text-base font-bold">
								{Math.round(PROGRESS * 100)}%
							</span>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-2">
						{stats.map((stat) => (
							<div key={stat.label} className="rounded-[13px] bg-card p-3">
								<p className="text-[8px] text-muted-foreground">{stat.label}</p>
								<p className="font-heading text-lg font-bold">{stat.value}</p>
							</div>
						))}
					</div>

					<div>
						{tasks.map((task) => (
							<div
								key={task.title}
								className="grid grid-cols-[22px_1fr_auto] items-center gap-3 border-t border-border py-2.5"
							>
								<span
									className={`grid size-5 place-items-center rounded-md border-[1.5px] ${
										task.done
											? 'border-primary bg-primary text-primary-foreground'
											: 'border-muted-foreground/40'
									}`}
								>
									{task.done && <Check className="size-3" />}
								</span>
								<div>
									<p className="text-xs font-bold">{task.title}</p>
									<p className="text-[9px] text-muted-foreground">{task.project}</p>
								</div>
								<span
									className={`rounded-full px-2.5 py-1 text-[9px] font-extrabold ${priorityClass[task.priority]}`}
								>
									{task.priority}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}