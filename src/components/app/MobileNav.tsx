import { NavLink } from 'react-router';
import { navItems } from '@/components/app/nav-items';
import { cn } from '@/lib/utils';

export function MobileNav() {
	return (
		<nav
			aria-label="Navigation principale"
			className="fixed inset-x-3 bottom-3 z-40 flex justify-around rounded-2xl border border-deep-foreground/10 bg-deep/95 p-2 text-deep-foreground shadow-lg backdrop-blur lg:hidden"
		>
			{navItems.map((item) => (
				<NavLink
					key={item.to}
					to={item.to}
					className={({ isActive }) =>
						cn(
							'grid min-w-16 justify-items-center gap-1 rounded-xl px-3 py-1.5 text-[10px] font-semibold',
							isActive ? 'text-brand' : 'text-deep-foreground/60',
						)
					}
				>
					<item.icon className="size-5" />
					{item.label}
				</NavLink>
			))}
		</nav>
	);
}