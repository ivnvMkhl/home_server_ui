import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

type OptionType<TQueryFnData, TError, TData, TQueryKey extends QueryKey = QueryKey> = Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'initialData'
> & { initialData?: () => undefined };

export const useCache = <
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    },
) => useQuery<TQueryFnData, TError, TData, TQueryKey>(queryKey, queryFn, options);
