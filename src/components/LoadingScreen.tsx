import { Spinner } from "./ui/spinner";


export function LoadingScreen() {
    return( 
       <div className="grid min-h-screen place-items-center">
        <Spinner role="status" aria-label="Chargement" className="size-8 text-primary"/>
       </div>
    )
}