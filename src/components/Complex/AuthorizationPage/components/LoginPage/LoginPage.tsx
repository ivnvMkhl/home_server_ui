import React from 'react';
import { Button } from '@components/Primitives/Button';
import { Divider } from '@components/Primitives/Divider';
import { Input, Password } from '@components/Primitives/Input';
import { Link, Title } from '@components/Primitives/Typography';
import { useNavigate } from '@src/routing/Router';

import styles from './LoginPage.module.css';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = ({}) => {
    const navigate = useNavigate();
    const handleRegistrationLink = () => navigate('/auth/registration');

    return (
        <>
            <div className={styles.authForm}>
                <Title level={2} type="secondary">
                    Log in
                </Title>
                <Input placeholder="Username" />
                <Password placeholder="Password" />
                <Button type="primary" block>
                    Login
                </Button>
            </div>
            <div className={styles.orContainer}>
                <Divider plain>or</Divider>
                <div className={styles.actionsList}>
                    <Link onClick={handleRegistrationLink}>Registration</Link>
                    <Link disabled>Forgot Password?</Link>
                </div>
            </div>
        </>
    );
};

export { LoginPage };
