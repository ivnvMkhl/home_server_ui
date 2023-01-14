import { AuthorizationPage } from '@components/Complex/AuthorizationPage';
import { MainLayout } from '@components/Complex/MainLayout';
import { MAIN_THEME } from '@components/Theme/mainTheme';
import { ThemeProvider } from '@components/Theme/ThemeProvider/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import './components/Theme/main.theme.css';

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={MAIN_THEME}>
                <MainLayout>
                    <AuthorizationPage />
                </MainLayout>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export { App };
