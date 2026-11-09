import { LogOut, Sun } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { navItems } from '@/components/app/nav-items';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useTasks } from '@/features/tasks/hooks';
import { authClient } from '@/lib/auth-client';
import { initials } from '@/lib/initials';
import { cn } from '@/lib/utils';

function ProgressCard() {
	const { data: tasks } = useTasks();
	const total = tasks?.length ?? 0;
	const done = tasks?.filter((task) => task.status === 'done').length ?? 0;
	const percent = total === 0 ? 0 : Math.round((done / total) * 100);

	return (
		<div className="rounded-2xl border border-deep-foreground/10 bg-deep-foreground/10 p-4">
			<span className="mb-3 grid size-9 place-items-center rounded-full bg-brand text-brand-foreground">
				<Sun className="size-4" />
			</span>
			<p className="text-sm font-bold">Votre progression</p>
			<p className="mt-1.5 text-xs leading-5 text-deep-foreground/70">
				{done}/{total} tâches terminées
			</p>
			<div className="mt-3 h-1.5 overflow-hidden rounded-full bg-deep-foreground/15">
				<div className="h-full rounded-full bg-brand" style={{ width: `${percent}%` }} />
			</div>
			<p className="mt-2 text-[10px] text-deep-foreground/60">{percent}% accompli</p>
		</div>
	);
}

function UserCard() {
	const { data: session } = authClient.useSession();
	const name = session?.user.name ?? '';

	return (
		<div className="flex items-center gap-3">
			<span className="grid size-9 shrink-0 place-items-center rounded-full bg-deep-foreground text-xs font-extrabold text-deep">
				{initials(name)}
			</span>
			<span className="grid min-w-0 flex-1">
				<span className="truncate text-xs font-bold">{name}</span>
				<span className="truncate text-[10px] text-deep-foreground/60">{session?.user.email}</span>
			</span>
			<Button
				variant="ghost"
				size="icon"
				aria-label="Se déconnecter"
				onClick={() => authClient.signOut()}
				className="text-deep-foreground/70 hover:bg-deep-foreground/10 hover:text-deep-foreground"
			>
				<LogOut />
			</Button>
		</div>
	);
}

export function AppSidebar() {
	return (
		<aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-deep p-5 text-deep-foreground lg:flex">
			<Link to="/dashboard" className="px-2">
				<Logo />
			</Link>

			<nav aria-label="Navigation principale" className="mt-12 grid gap-1.5">
				<p className="mb-2 px-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-deep-foreground/50">
					Espace de travail
				</p>
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							cn(
								'flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-colors',
								isActive
									? 'bg-brand text-brand-foreground'
									: 'text-deep-foreground/70 hover:bg-deep-foreground/10 hover:text-deep-foreground',
							)
						}
					>
						{({ isActive }) => (
							<>
								<item.icon className="size-5" />
								{item.label}
								{isActive && <span className="ml-auto size-1.5 rounded-full bg-brand-foreground" />}
							</>
						)}
					</NavLink>
				))}
			</nav>

			<div className="mt-auto space-y-4">
				<ProgressCard />
				<UserCard />
			</div>
		</aside>
	);
}