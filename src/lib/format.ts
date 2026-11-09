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