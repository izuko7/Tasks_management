import type { Task } from '@/features/tasks/types';

const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

export function computeTaskStats(tasks: Task[], now: Date = new Date()) {
	const total = tasks.length;
	const done = tasks.filter((task) => task.status === 'done').length;
	const inProgress = tasks.filter((task) => task.status === 'in_progress').length;
	const todo = tasks.filter((task) => task.status === 'todo').length;
	const overdue = tasks.filter(
		(task) => task.status !== 'done' && task.dueDate !== null && new Date(task.dueDate) < now,
	).length;
	const createdThisWeek = tasks.filter(
		(task) => new Date(task.createdAt).getTime() >= now.getTime() - WEEK_IN_MS,
	).length;
	const percent = total === 0 ? 0 : Math.round((done / total) * 100);

	return { total, done, inProgress, todo, overdue, createdThisWeek, percent };
}

export type TaskStats = ReturnType<typeof computeTaskStats>;