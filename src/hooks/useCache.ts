import { useQuery, QueryKey, UseQueryOptions } from '@tanstack/react-query';

type OptionType<TQueryFnData, TError, TData, TQueryKey extends QueryKey = QueryKey> = Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'initialData'
> & { initialData?: () => undefined };

export const useCache = <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    options: OptionType<TQueryFnData, TError, TData, TQueryKey>,
) => useQuery<TQueryFnData, TError, TData, TQueryKey>(options);
