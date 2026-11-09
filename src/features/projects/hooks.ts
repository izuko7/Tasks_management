import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '@/features/projects/api';
import { authClient } from '@/lib/auth-client';

export function useProjects() {
	const { data: session } = authClient.useSession();
	const userId = session?.user.id;

	return useQuery({
		queryKey: ['projects', userId],
		queryFn: fetchProjects,
		enabled: Boolean(userId),
	});
}