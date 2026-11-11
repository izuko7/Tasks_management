import { StatCards } from '@/components/dashboard/StatCards';
import { WelcomeHero } from '@/components/dashboard/WelcomeHero';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { computeTaskStats } from '@/features/tasks/stats';
import { useTasks } from '@/features/tasks/hooks';
import { apiErrorMessage } from '@/lib/api-errors';
import { PriorityTasks } from '@/components/dashboard/PriorityTasks';

export function DashboardPage() {
	const tasks = useTasks();

	if (tasks.isPending) {
		return (
			<div className="grid place-items-center py-24">
				<Spinner className="size-8 text-primary" aria-label="Chargement du tableau de bord" />
			</div>
		);
	}

	if (tasks.isError) {
		return (
			<div role="alert" className="space-y-3 py-12">
				<p className="text-sm text-destructive">{apiErrorMessage(tasks.error)}</p>
				<Button variant="outline" onClick={() => tasks.refetch()}>
					Réessayer
				</Button>
			</div>
		);
	}

	const stats = computeTaskStats(tasks.data);

	return (
		<div className="space-y-6">
			<WelcomeHero stats={stats} />
			<StatCards stats={stats} />
			<PriorityTasks tasks={tasks.data}/>
		</div>
	);
}