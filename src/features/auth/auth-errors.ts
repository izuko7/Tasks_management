type AuthError = { code?: string; status?: number };

const MESSAGES: Record<string, string> = {
	INVALID_EMAIL_OR_PASSWORD: 'E-mail ou mot de passe incorrect',
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: 'Un compte existe déjà avec cet e-mail',
};

export function authErrorMessage(error: AuthError): string {
	if (error.status === 429) return 'Trop de tentatives. Réessaie dans une minute.';
	if (error.code && MESSAGES[error.code]) return MESSAGES[error.code];
	return 'Une erreur est survenue. Réessaie.';
}