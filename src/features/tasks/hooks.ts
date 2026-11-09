import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '@/features/tasks/api';
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