import { LoginForm, LoginResponseStatus, RegistrationForm } from '@interfaces/auth';
import { http, HttpError, HttpResponse } from '@src/services/http';

const BASE_URL = 'http://localhost:8000/';

const authApi = {
    async login(user: LoginForm | undefined): Promise<LoginResponseStatus> {
        const url = `${BASE_URL}auth/login`;
        const requestSettings = {
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true,
        };
        const formDataPayload = new FormData();

        if (user) Object.entries(user).forEach((formRecord) => formDataPayload.append(...formRecord));

        try {
            await http.post(url, formDataPayload, requestSettings, [400]);
            return LoginResponseStatus.SUCCESS;
        } catch (e) {
            const error = e as HttpError;
            const statusCode: number = error.request.status;
            if (statusCode >= 400 && statusCode < 500) return LoginResponseStatus.ERROR;
            return LoginResponseStatus.SERVER_ERROR;
        }
    },

    async logout<T>(payload: LoginForm) {
        const url = `${BASE_URL}auth/logout`;

        return await http.post<T>(url, payload);
    },

    async register<T>(payload: RegistrationForm) {
        const url = `${BASE_URL}auth/register`;

        return await http.post<T>(url, payload);
    },
};

export { authApi };
