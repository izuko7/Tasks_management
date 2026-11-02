import { APP_NAME } from '@/lib/config';

export function Logo() {
	return (
		<span className="inline-flex items-center gap-2.5">
			<svg viewBox="25 14 34 35" className="size-8" aria-hidden="true">
				<path
					className="fill-brand"
					d="M37 14H47C53.6 14 59 19.4 59 26V37C59 43.6 53.6 49 47 49H30C27 49 25 47 25 44V26C25 19.4 30.4 14 37 14Z"
				/>
				<text
					x="42"
					y="43"
					textAnchor="middle"
					fontSize="34"
					className="fill-brand-foreground font-heading font-extrabold"
				>
					{APP_NAME.charAt(0).toLowerCase()}
				</text>
			</svg>
			<span className="font-heading text-xl font-extrabold tracking-tight">{APP_NAME}</span>
		</span>
	);
}