import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Button } from './components/Primitives/Button/Button';

export const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Button>Test</Button>
            </div>
        </QueryClientProvider>
    );
};
