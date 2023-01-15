import React from 'react';

import { useRoutes } from '@routing/Router';
import { MainRouter } from '@src/routing/routers';

import '@src/theme/main.theme.css';
import { MainLayout } from './components/Complex/MainLayout';

const App: React.FC = () => {
    const routes = useRoutes(MainRouter);

    return <MainLayout title="HomeApp">{routes}</MainLayout>;
};

export { App };
