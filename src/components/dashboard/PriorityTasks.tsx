import { Clock } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { priorityClass, priorityLabel, statusClass, statusLabel } from '@/features/tasks/labels';
import { useUpdateTask } from '@/features/tasks/hooks';
import { selectPriorityTasks } from '@/features/tasks/select';
import type { Task } from '@/features/tasks/types';
import { apiErrorMessage } from '@/lib/api-errors';
import { formatDueDate } from '@/lib/format';
import { cn } from '@/lib/utils';

export function PriorityTasks({ tasks }: { tasks: Task[] }) {
	const updateTask = useUpdateTask();
	const items = selectPriorityTasks(tasks);
	const now = new Date();

	const toggle = (task: Task) => {
		updateTask.mutate({
			id: task.id,
			input: { status: task.status === 'done' ? 'todo' : 'done' },
		});
	};

	return (
		<section className="rounded-[26px] border border-border bg-card p-6">
			<p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
				À faire en premier
			</p>
			<h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight">
				Tâches prioritaires
			</h2>

			{updateTask.isError && (
				<p role="alert" className="mt-3 text-sm text-destructive">
					{apiErrorMessage(updateTask.error)}
				</p>
			)}

			{items.length === 0 ? (
				<p className="mt-6 text-sm text-muted-foreground">Aucune tâche pour le moment.</p>
			) : (
				<ul className="mt-5">
					{items.map((task) => {
						const done = task.status === 'done';
						const overdue = !done && task.dueDate !== null && new Date(task.dueDate) < now;
						const saving = updateTask.isPending && updateTask.variables?.id === task.id;

						return (
							<li
								key={task.id}
								className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border py-4"
							>
								<Checkbox
									checked={done}
									disabled={saving}
									onCheckedChange={() => toggle(task)}
									aria-label={`Marquer « ${task.title} » comme ${done ? 'à faire' : 'terminée'}`}
								/>
								<div className="min-w-40 flex-1">
									<p
										className={cn(
											'text-sm font-semibold',
											done && 'text-muted-foreground line-through',
										)}
									>
										{task.title}
									</p>
									{task.project && (
										<p className="text-xs text-muted-foreground">{task.project.name}</p>
									)}
								</div>
								<span
									className={cn(
										'rounded-full px-3 py-1 text-[10px] font-extrabold',
										priorityClass[task.priority],
									)}
								>
									{priorityLabel[task.priority]}
								</span>
								{task.dueDate && (
									<span
										className={cn(
											'flex items-center gap-1.5 text-xs',
											overdue ? 'font-semibold text-destructive' : 'text-muted-foreground',
										)}
									>
										<Clock className="size-3.5" />
										{formatDueDate(task.dueDate)}
									</span>
								)}
								<span
									className={cn(
										'rounded-full px-3 py-1 text-[10px] font-extrabold',
										statusClass[task.status],
									)}
								>
									{statusLabel[task.status]}
								</span>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}