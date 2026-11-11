import type { Task, UpdateTaskInput } from '@/features/tasks/types';
import { api } from '@/lib/api';

export async function fetchTasks(): Promise<Task[]> {
	const { data } = await api.get<Task[]>('/tasks');
	return data;
}

export async function updateTask(id: string, input: UpdateTaskInput): Promise<Task> {
	const { data } = await api.patch<Task>(`/tasks/${id}`, input);
	return data;
}