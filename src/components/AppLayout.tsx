import { LogOut, Moon, Sun } from 'lucide-react';
import { Outlet, useLocation } from 'react-router';
import { AppSidebar } from '@/components/app/AppSidebar';
import { MobileNav } from '@/components/app/MobileNav';
import { navItems } from '@/components/app/nav-items';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { authClient } from '@/lib/auth-client';

export function AppLayout() {
	const { pathname } = useLocation();
	const { theme, toggleTheme } = useTheme();
	const title = navItems.find((item) => item.to === pathname)?.title ?? '';

	return (
		<div className="min-h-screen">
			<AppSidebar />

			<div className="lg:pl-64">
				<header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur lg:px-10">
					<div>
						<p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
							Votre espace
						</p>
						<h1 className="font-heading text-xl font-semibold tracking-tight">{title}</h1>
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							onClick={toggleTheme}
							aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
						>
							{theme === 'dark' ? <Sun /> : <Moon />}
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="lg:hidden"
							aria-label="Se déconnecter"
							onClick={() => authClient.signOut()}
						>
							<LogOut />
						</Button>
					</div>
				</header>

				<main className="px-6 py-8 pb-28 lg:px-10 lg:pb-12">
					<Outlet />
				</main>
			</div>

			<MobileNav />
		</div>
	);
}