import React from 'react';
import { useRoutes } from '@src/routing/Router';
import { AuthRouter } from '@src/routing/routers';

import styles from './AuthorizationPage.module.css';

type AuthorizationPageProps = {};

const AuthorizationPage: React.FC<AuthorizationPageProps> = ({}) => {
    const routes = useRoutes(AuthRouter);
    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>{routes}</div>
        </div>
    );
};

export { AuthorizationPage };
