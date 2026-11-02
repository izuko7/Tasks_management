export function redirectTarget(state: unknown): string {
	const from = (state as { from?: unknown } | null)?.from;
	const isInternalPath =
		typeof from === 'string' && from.startsWith('/') && !from.startsWith('//');
	return isInternalPath ? from : '/dashboard';
}