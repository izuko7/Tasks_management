import axios from "axios";

export function apiErrorMessage(error: unknown) : string {
    if(axios.isAxiosError(error)) {
        if(!error.response) {
            return 'Impossible de joindre le serveur. Vérifiez votre connexion.';
        }
        switch (error.response.status) {
            case 400:
                return 'Les données envoyées sont invalides.';
            case 404:
                return 'Element introuvable.';
            case 429:
                return 'Trop de requêtes. Réessayez dans une minute.';
        }
    }
    return 'Une erreur est survenue. Réessayez.';
}