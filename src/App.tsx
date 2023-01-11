import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { MainLayout } from '@components/Complex/MainLayout/MainLayout';

export const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout />
        </QueryClientProvider>
    );
};
