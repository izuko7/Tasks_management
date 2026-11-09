import axios from 'axios';
import { authClient } from './auth-client';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    timeout: 10_000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(axios.isAxiosError(error) && error.response?.status === 401) {
            void authClient.signOut();
        }
        return Promise.reject(error);
    },
);