export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskStatus = 'todo' | 'in_progress' | 'done';

export type Task = {
	id: string;
	title: string;
	description: string | null;
	status: TaskStatus;
	priority: Priority;
	dueDate: string | null;
	createdAt: string;
	updatedAt: string;
	projectId: string | null;
	userId: string;
	project: { id: string; name: string } | null;
};

export type UpdateTaskInput = {
	title?: string;
	description?: string;
	status?: TaskStatus;
	priority?: Priority;
	dueDate?: string | null;
	projectId?: string | null;
};