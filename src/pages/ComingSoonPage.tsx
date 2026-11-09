export function ComingSoonPage({ title }: { title: string }) {
	return (
		<section className="space-y-2">
			<h2 className="font-heading text-2xl font-bold">{title}</h2>
			<p className="text-sm text-muted-foreground">Cette page arrive bientôt.</p>
		</section>
	);
}