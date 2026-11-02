import { Link } from 'react-router';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { authClient } from '@/lib/auth-client';

const navLinkClass =
	'text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground';

export function SiteHeader() {
	const { data: session, isPending } = authClient.useSession();

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-8">
				<Link to="/">
					<Logo />
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					<a href="/#fonctionnalites" className={navLinkClass}>
						Fonctionnalités
					</a>
					<a href="/#methode" className={navLinkClass}>
						Méthode
					</a>
				</nav>

				<div className="flex items-center gap-2">
					{isPending ? null : session ? (
						<>
							<span className="hidden text-sm font-semibold sm:inline">{session.user.name}</span>
							<Button asChild variant="ghost">
								<Link to="/dashboard">Mon espace</Link>
							</Button>
							<Button variant="outline" onClick={() => authClient.signOut()}>
								Se déconnecter
							</Button>
						</>
					) : (
						<>
							<Button asChild variant="ghost">
								<Link to="/login">Se connecter</Link>
							</Button>
							<Button asChild>
								<Link to="/register">Commencer gratuitement</Link>
							</Button>
						</>
					)}
				</div>
			</div>
		</header>
	);
}