import z from "zod";

export const LoginSchema = z.object({
    email: z.email('Adresse e-mail invalide'),
    password: z.string().min(1, 'Mot de passe requis'),
});

export const RegisterSchema = z.object({
    name: z.string().trim().min(2, 'Au moins 2 caractères').max(50, '50 caratères minimum'),
    email: z.email('Adresse e-mail invalide'),
    password: z.string().min(8, 'Au moins 8 caratères').max(128, '128 caractères maximum'),
    confirmPassword: z.string(),
})
 .refine((values) => values.password === values.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
	path: ['confirmPassword'],
 });

export type LoginValues = z.infer<typeof LoginSchema>;
export type RegisterValues = z.infer<typeof RegisterSchema>;