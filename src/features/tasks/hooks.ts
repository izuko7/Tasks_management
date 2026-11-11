import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, updateTask } from '@/features/tasks/api';
import type { Task, UpdateTaskInput } from '@/features/tasks/types';
import { authClient } from '@/lib/auth-client';

export function useTasks() {
	const { data: session } = authClient.useSession();
	const userId = session?.user.id;

	return useQuery({
		queryKey: ['tasks', userId],
		queryFn: fetchTasks,
		enabled: Boolean(userId),
	});
}

export function useUpdateTask() {
	const queryClient = useQueryClient();
	const { data: session } = authClient.useSession();
	const userId = session?.user.id;
	const tasksKey = ['tasks', userId] as const;

	return useMutation({
		mutationFn: ({ id, input }: { id: string; input: UpdateTaskInput }) => updateTask(id, input),

		// Avant l'envoi : on met le cache à jour tout de suite (mise à jour optimiste)
		onMutate: async ({ id, input }) => {
			await queryClient.cancelQueries({ queryKey: tasksKey });
			const previous = queryClient.getQueryData<Task[]>(tasksKey);
			queryClient.setQueryData<Task[]>(tasksKey, (old) =>
				old?.map((task) => (task.id === id ? { ...task, ...input } : task)),
			);
			return { previous };
		},

		// En cas d'échec : on remet l'ancien état
		onError: (_error, _variables, context) => {
			if (context?.previous) {
				queryClient.setQueryData(tasksKey, context.previous);
			}
		},

		// Dans tous les cas : on recharge les vraies données du serveur
		onSettled: () => {
			void queryClient.invalidateQueries({ queryKey: tasksKey });
			void queryClient.invalidateQueries({ queryKey: ['projects', userId] });
		},
	});
}