import { Folder, LayoutGrid, ListChecks } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
	to: string;
	label: string;
	title: string;
	icon: LucideIcon;
};

export const navItems: NavItem[] = [
	{ to: '/dashboard', label: 'Accueil', title: 'Tableau de bord', icon: LayoutGrid },
	{ to: '/tasks', label: 'Mes tâches', title: 'Mes tâches', icon: ListChecks },
	{ to: '/projects', label: 'Projets', title: 'Projets', icon: Folder },
];