import type { Priority, Task } from '@/features/tasks/types';

const priorityRank: Record<Priority, number> = { urgent: 0, high: 1, medium: 2, low: 3 };

function dueTime(task: Task): number {
	return task.dueDate ? new Date(task.dueDate).getTime() : Number.POSITIVE_INFINITY;
}

export function selectPriorityTasks(tasks: Task[], limit = 5): Task[] {
	return [...tasks]
		.sort((a, b) => {
			const doneDiff = Number(a.status === 'done') - Number(b.status === 'done');
			if (doneDiff !== 0) return doneDiff;

			const priorityDiff = priorityRank[a.priority] - priorityRank[b.priority];
			if (priorityDiff !== 0) return priorityDiff;

			if (dueTime(a) !== dueTime(b)) return dueTime(a) - dueTime(b);

			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		})
		.slice(0, limit);
}