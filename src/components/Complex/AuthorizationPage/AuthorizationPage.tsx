import React from 'react';
import { Input, Password } from '@components/Primitives/Input';
import { Button } from '@components/Primitives/Button';

import styles from './AuthorizationPage.module.css';

type AuthorizationPageProps = {};

const AuthorizationPage: React.FC<AuthorizationPageProps> = ({}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.authForm}>
                <Input />

                <Password />
                <Button>Login</Button>
            </div>
        </div>
    );
};

export { AuthorizationPage };
