import { Moon, Sun } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { useTheme } from '@/hooks/use-theme';
import { APP_NAME } from '@/lib/config';

export function SiteFooter() {
	const { theme, toggleTheme } = useTheme();

	return (
		<footer className="border-t border-border">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-8 py-8 md:flex-row">
				<Logo />
				<p className="text-xs text-muted-foreground">Votre travail, avec plus de clarté.</p>
				<div className="flex items-center gap-3">
					<p className="text-xs text-muted-foreground">
						© {new Date().getFullYear()} {APP_NAME}
					</p>
					<Button
						variant="outline"
						size="icon"
						onClick={toggleTheme}
						aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
					>
						{theme === 'dark' ? <Sun /> : <Moon />}
					</Button>
				</div>
			</div>
		</footer>
	);
}