import { Navigate, Outlet, useLocation } from 'react-router';
import { LoadingScreen } from '@/components/LoadingScreen';
import { redirectTarget } from '@/features/auth/redirect';
import { authClient } from '@/lib/auth-client';

export function GuestOnly() {
	const { data: session, isPending } = authClient.useSession();
	const location = useLocation();

	if (isPending) return <LoadingScreen />;
	if (session) return <Navigate to={redirectTarget(location.state)} replace />;
	return <Outlet />;
}