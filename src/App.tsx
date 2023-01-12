import { MainLayout } from '@components/Complex/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import './components/Theme/main.theme.css';

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout />
        </QueryClientProvider>
    );
};

export { App };
