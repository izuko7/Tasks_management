export type Project = {
	id: string;
	name: string;
	description: string | null;
	dueDate: string | null;
	createdAt: string;
	updatedAt: string;
	userId: string;
	tasksTotal: number;
	tasksDone: number;
	progress: number;
};