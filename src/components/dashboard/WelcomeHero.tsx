import { Check, Clock } from 'lucide-react';
import { ProgressRing } from '@/components/ProgressRing';
import type { TaskStats } from '@/features/tasks/stats';
import { authClient } from '@/lib/auth-client';
import { firstName, formatLongDate, plural } from '@/lib/format';

export function WelcomeHero({ stats }: { stats: TaskStats }) {
	const { data: session } = authClient.useSession();
	const name = firstName(session?.user.name ?? '');

	const message =
		stats.total === 0
			? 'Aucune tâche pour le moment. Créez la première pour démarrer votre journée.'
			: `${stats.done} ${plural(stats.done, 'tâche terminée', 'tâches terminées')} sur ${stats.total}. Gardez le rythme, l’essentiel est déjà en mouvement.`;

	return (
		<section className="relative grid overflow-hidden rounded-[34px] bg-deep text-deep-foreground md:grid-cols-[1.1fr_0.9fr]">
			<div className="z-10 flex flex-col items-start gap-5 p-8 md:p-12">
				<span className="rounded-full bg-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-foreground">
					{formatLongDate(new Date())}
				</span>
				<h2 className="font-heading text-4xl font-medium leading-[1.08] tracking-tighter sm:text-5xl">
					Bonjour {name},
					<br />
					faisons avancer
					<br />
					<span className="text-brand">vos idées.</span>
				</h2>
				<p className="max-w-md text-sm leading-7 text-deep-foreground/70">{message}</p>
			</div>

			<div className="relative grid min-h-80 place-items-center p-8">
				<div
					aria-hidden="true"
					className="absolute size-96 rounded-full border border-brand/15"
				/>
				<div
					aria-hidden="true"
					className="absolute size-72 rounded-full border border-brand/15"
				/>

				<div
					className="absolute right-4 top-8 z-10 flex rotate-[4deg] items-center gap-2 rounded-xl bg-deep-foreground px-3 py-2 text-[10px] font-bold text-deep shadow-lg"
					aria-hidden="true"
				>
					<Check className="size-3.5" />
					{stats.done} {plural(stats.done, 'tâche terminée', 'tâches terminées')}
				</div>
				<div
					className="absolute bottom-8 left-4 z-10 flex -rotate-3 items-center gap-2 rounded-xl bg-deep-foreground px-3 py-2 text-[10px] font-bold text-deep shadow-lg"
					aria-hidden="true"
				>
					<Clock className="size-3.5" />
					{stats.inProgress} en cours
				</div>

				<ProgressRing
					percent={stats.percent}
					className="size-52 sm:size-60"
				>
					<div role="img" aria-label={`${stats.percent}% des tâches terminées`} className="grid justify-items-center gap-1">
						<span className="text-[11px] text-deep-foreground/60">Progression</span>
						<span className="font-heading text-5xl font-extrabold leading-none tracking-tighter">
							{stats.percent}
							<small className="text-xl text-brand">%</small>
						</span>
						<span className="mt-1 rounded-full bg-brand/20 px-2.5 py-1 text-[9px] font-extrabold text-brand">
							{stats.total} {plural(stats.total, 'tâche', 'tâches')} au total
						</span>
					</div>
				</ProgressRing>
			</div>
		</section>
	);
}