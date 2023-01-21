import { LoginForm, LoginResponseStatus } from '@interfaces/auth';
import { authApi } from '@src/services/api/auth/auth.api';
import { useQuery } from '@tanstack/react-query';

const useLogin = (user: LoginForm | undefined) => {
    const cacheKey = [user];
    const fetcher = () => authApi.login(user);
    const queryOptiions = {
        enabled: !!user,
        retry: false,
    };

    return useQuery(cacheKey, fetcher, queryOptiions);
};

const Auth = { useLogin };

export { Auth };
