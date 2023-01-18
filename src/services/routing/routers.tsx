import React from 'react';
import { Navigate, RouteObject } from '@routing/Router';
import { AuthorizationPage } from '@src/components/Complex/AuthorizationPage';
import { LoginPage } from '@src/components/Complex/AuthorizationPage/components/LoginPage';
import { RegistrationPage } from '@src/components/Complex/AuthorizationPage/components/RegistrationPage';
import { HomePage } from '@src/components/Pages/HomePage/HomePage';

const MainRouter: RouteObject[] = [
    { path: '/', element: <HomePage /> },
    { path: 'auth/*', element: <AuthorizationPage /> },
    { path: '*', element: <div>404 page</div> },
];

const AuthRouter: RouteObject[] = [
    { index: true, element: <LoginPage /> },
    { path: 'registration', element: <RegistrationPage /> },
    { path: '*', element: <div>404 page</div> },
];

export { AuthRouter, MainRouter };
