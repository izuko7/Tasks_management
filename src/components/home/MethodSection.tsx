import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { APP_NAME } from "@/lib/config";

const steps = [
	{ number: '01', title: 'Capturez', description: 'Notez chaque idée dès qu’elle arrive.' },
	{
		number: '02',
		title: 'Priorisez',
		description: 'Choisissez les actions qui feront la différence.',
	},
	{ number: '03', title: 'Avancez', description: 'Concentrez-vous sur une chose à la fois.' },
];

export function MethodSection() {
    return (
        <section
			id="methode"
			className="mx-auto grid max-w-6xl scroll-mt-14 items-center gap-12 px-8 py-24 md:grid-cols-2 md:gap-24"
		>
			<div className="flex flex-col items-start">
				<span className="rounded-full bg-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-foreground">
					Simple par nature
				</span>
				<h2 className="mt-4 max-w-md font-heading text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl">
					Votre esprit mérite un espace calme.
				</h2>
				<p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
					Commencez en quelques secondes. Organisez votre journée sans méthode compliquée, puis
					laissez {APP_NAME} garder le cap avec vous.
				</p>
				<Button asChild size="lg" className="mt-7">
					<Link to="/register">
						<ArrowRight />
						Essayer {APP_NAME} gratuitement
					</Link>
				</Button>
			</div>

			<ol>
				{steps.map((step) => (
                    <li 
                    key={step.number}
                    className="grid grid-cols-[44px_1fr] gap-5 border-b border-border py-6"
                    >
                        <span className="grid size-11 place-items-center rounded-[13px] bg-secondary font-heading text-[11px] font-extrabold text-secondary-foreground">
                             {step.number}
                        </span>
                        <div>
                            <h3 className="font-heading text-base font-bold">{step.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    </li>
                ))}
			</ol>
		</section>
    );
}