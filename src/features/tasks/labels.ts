import type { Priority, TaskStatus } from '@/features/tasks/types';

export const priorityLabel: Record<Priority, string> = {
	urgent: 'Urgente',
	high: 'Haute',
	medium: 'Moyenne',
	low: 'Faible',
};

export const priorityClass: Record<Priority, string> = {
	urgent: 'bg-destructive text-background',
	high: 'bg-destructive/15 text-destructive',
	medium: 'bg-brand text-brand-foreground',
	low: 'bg-secondary text-secondary-foreground',
};

export const statusLabel: Record<TaskStatus, string> = {
	todo: 'À faire',
	in_progress: 'En cours',
	done: 'Terminé',
};

export const statusClass: Record<TaskStatus, string> = {
	todo: 'bg-muted text-muted-foreground',
	in_progress: 'bg-primary text-primary-foreground',
	done: 'bg-secondary text-secondary-foreground',
};