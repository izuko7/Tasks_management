import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'mangement-task-theme';

function readTheme(): Theme {
	try {
		return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
	} catch {
		return 'dark';
	}
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(readTheme);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			// stockage indisponible : on garde le thème en mémoire seulement
		}
	}, [theme]);

	const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

	return { theme, toggleTheme };
}