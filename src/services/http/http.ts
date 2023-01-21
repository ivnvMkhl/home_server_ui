import Axios, { AxiosError as HttpError, AxiosResponse as HttpResponse, RawAxiosRequestConfig } from 'axios';

const http = {
    get<ResponseType>(url: string, config?: RawAxiosRequestConfig, notHandleCodes?: number[]) {
        const request = Axios.get<ResponseType>(url, config);
        return httpErrorHandler(request, notHandleCodes);
    },

    post<ResponseType>(url: string, payload?: any, config?: RawAxiosRequestConfig, notHandleCodes?: number[]) {
        const request = Axios.post<ResponseType>(url, payload, config);
        return httpErrorHandler(request, notHandleCodes);
    },

    put<ResponseType>(url: string, payload?: any, config?: RawAxiosRequestConfig, notHandleCodes?: number[]) {
        const request = Axios.put<ResponseType>(url, payload, config);
        return httpErrorHandler(request, notHandleCodes);
    },

    delete<ResponseType>(url: string, config?: RawAxiosRequestConfig, notHandleCodes?: number[]) {
        const request = Axios.delete<ResponseType>(url, config);
        return httpErrorHandler(request, notHandleCodes);
    },
};

const httpErrorHandler = async <T>(request: Promise<HttpResponse<T>>, notHandleCodes?: number[]) => {
    try {
        return await request;
    } catch (e) {
        const error = e as HttpError<T>;
        const statusCode = error.request.status;
        if (notHandleCodes && notHandleCodes.includes(statusCode)) {
            throw error;
        } else {
            // TODO: add UI notifications
            console.log('Май эрор хендлер: ашибка ' + statusCode);
            throw error;
        }
    }
};

export { http, HttpError };
export type { HttpResponse };
