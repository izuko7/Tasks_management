import { authClient } from "@/lib/auth-client";


export function DashboardPage() {
    const {data: session} = authClient.useSession();

    return(
        <section className="mx-auto max-w-6xl px-8 py-16">
            <h1 className="font-heading text-4xl font-bold">Bonjour {session?.user.name}</h1>
        </section>
    )
}