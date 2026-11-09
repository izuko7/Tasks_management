import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/components/AppLayout';
import { GuestOnly } from '@/components/GuestOnly';
import { RequireAuth } from '@/components/RequireAuth';
import { SiteLayout } from '@/components/SiteLayout';
import { queryClient } from '@/lib/query-client';
import {ComingSoonPage} from './pages/ComingSoonPage';
import { AuthLayout } from './components/AuthLayout';
import { DashboardPage } from '@/pages/DashboardPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<SiteLayout />}>
						<Route path="/" element={<HomePage />} />
					</Route>

					<Route element={<GuestOnly />}>
						<Route element={<AuthLayout />}>
							<Route path="/login" element={<LoginPage />} />
							<Route path="/register" element={<RegisterPage />} />
						</Route>
					</Route>

					<Route element={<RequireAuth />}>
						<Route element={<AppLayout />}>
							<Route path="/dashboard" element={<DashboardPage />} />
							<Route path="/tasks" element={<ComingSoonPage title="Mes tâches" />} />
							<Route path="/projects" element={<ComingSoonPage title="Projets" />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}