import React from 'react';
import { useRoutes } from '@routing/Router';
import { MainRouter } from '@routing/routers';

import { MainLayout } from './components/Complex/MainLayout';

import '@src/theme/main.theme.css';

const App: React.FC = () => {
    const routes = useRoutes(MainRouter);

    return <MainLayout title="HomeApp">{routes}</MainLayout>;
};

export { App };
