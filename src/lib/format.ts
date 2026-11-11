export function firstName(name: string): string {
	return name.trim().split(/\s+/)[0] ?? '';
}

export function plural(count: number, singular: string, pluralForm: string): string {
	return count > 1 ? pluralForm : singular;
}

export function formatLongDate(date: Date): string {
	return new Intl.DateTimeFormat('fr-FR', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}).format(date);
}

export function formatDueDate(iso: string, now: Date = new Date()): string {
	const date = new Date(iso);
	const startOfDay = (value: Date) =>
		new Date(value.getFullYear(), value.getMonth(), value.getDate()).getTime();
	const dayDiff = Math.round((startOfDay(date) - startOfDay(now)) / 86_400_000);
	const hasTime = date.getHours() !== 0 || date.getMinutes() !== 0;
	const time = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(date);

	if (dayDiff === 0) return hasTime ? `Aujourd’hui, ${time}` : 'Aujourd’hui';
	if (dayDiff === 1) return hasTime ? `Demain, ${time}` : 'Demain';
	if (dayDiff === -1) return 'Hier';

	return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long' }).format(date);
}