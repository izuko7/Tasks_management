import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type ProgressRingProps = {
	percent: number;
	className?: string;
	children?: ReactNode;
};

export function ProgressRing({ percent, className, children }: ProgressRingProps) {
	const clamped = Math.min(100, Math.max(0, percent));

	return (
		<div className={cn('relative grid place-items-center', className)}>
			<svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden="true">
				<circle
					cx="50"
					cy="50"
					r={RADIUS}
					fill="none"
					strokeWidth="7"
					className="stroke-deep-foreground/15"
				/>
				{clamped > 0 && (
					<circle
						cx="50"
						cy="50"
						r={RADIUS}
						fill="none"
						strokeWidth="7"
						strokeLinecap="round"
						strokeDasharray={`${(CIRCUMFERENCE * clamped) / 100} ${CIRCUMFERENCE}`}
						className="stroke-brand"
					/>
				)}
			</svg>
			<div className="relative grid place-items-center text-center">{children}</div>
		</div>
	);
}