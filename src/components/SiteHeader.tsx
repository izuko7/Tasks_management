import { Link } from "react-router";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

const navLinkClass =
	'text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground';

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-8">
				<Link to="/">
					<Logo />
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					<a href="#fonctionnalites" className={navLinkClass}>
						Fonctionnalités
					</a>
					<a href="#methode" className={navLinkClass}>
						Méthode
					</a>
				</nav>

				<div className="flex items-center gap-2">
					<Button asChild variant="ghost">
						<Link to="/login">Se connecter</Link>
					</Button>
					<Button asChild>
						<Link to="/register">Commencer gratuitement</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}