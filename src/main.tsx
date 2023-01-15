import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { defineCssVariables } from '@helpers/defineCssVariables';

import { BrowserRouter } from '@routing/Router';
import { ThemeProvider } from '@src/theme/ThemeProvider';
import { App } from '@src/App';

import { colorVariablesDict } from '@src/theme/themeVariables';
import { MAIN_THEME } from '@src/theme/mainTheme';

const rootEntry = document.getElementById('root');
const queryClient = new QueryClient();

if (rootEntry) {
    defineCssVariables(colorVariablesDict);
    createRoot(rootEntry).render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={MAIN_THEME}>
                    <App />
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>,
    );
} else throw new Error('Root entry not found');
