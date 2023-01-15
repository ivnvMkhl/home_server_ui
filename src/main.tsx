import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCssVariables } from '@helpers/defineCssVariables';
import { BrowserRouter } from '@routing/Router';
import { App } from '@src/App';
import { MAIN_THEME } from '@src/theme/mainTheme';
import { ThemeProvider } from '@src/theme/ThemeProvider';
import { colorVariablesDict } from '@src/theme/themeVariables';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const rootEntry = document.getElementById('root');
const queryClient = new QueryClient();
const AppWithProviders = (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={MAIN_THEME}>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

if (rootEntry) {
    defineCssVariables(colorVariablesDict);
    createRoot(rootEntry).render(AppWithProviders);
} else throw new Error('Root entry not found');
