import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useProjects } from '@/features/projects/hooks';
import { useTasks } from '@/features/tasks/hooks';
import { apiErrorMessage } from '@/lib/api-errors';
import { authClient } from '@/lib/auth-client';

export function DashboardPage() {
	const { data: session } = authClient.useSession();
	const tasks = useTasks();
	const projects = useProjects();

	return (
		<section className="mx-auto max-w-6xl space-y-6 px-8 py-16">
			<h1 className="font-heading text-4xl font-bold">Bonjour {session?.user.name}</h1>

			{tasks.isPending && <Spinner className="size-6" aria-label="Chargement des tâches" />}

			{tasks.isError && (
				<div role="alert" className="space-y-3">
					<p className="text-sm text-destructive">{apiErrorMessage(tasks.error)}</p>
					<Button variant="outline" onClick={() => tasks.refetch()}>
						Réessayer
					</Button>
				</div>
			)}

			{tasks.data && (
				<ul className="space-y-1 text-sm">
					{tasks.data.map((task) => (
						<li key={task.id}>
							{task.title} · {task.status} · {task.priority}
							{task.project ? ` · ${task.project.name}` : ''}
						</li>
					))}
				</ul>
			)}

			{projects.data && (
				<p className="text-sm text-muted-foreground">{projects.data.length} projet(s)</p>
			)}
		</section>
	);
}