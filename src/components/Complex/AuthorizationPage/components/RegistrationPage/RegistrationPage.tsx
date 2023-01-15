import React from 'react';
import { Input, Password } from '@components/Primitives/Input';
import { Link, Title } from '@components/Primitives/Typography';
import { Button } from '@components/Primitives/Button';
import { Divider } from '@components/Primitives/Divider';

import styles from './RegistrationPage.module.css';
import { useNavigate } from '@src/routing/Router';

type RegistrationPageProps = {};

const RegistrationPage: React.FC<RegistrationPageProps> = ({}) => {
    const navigate = useNavigate();
    const handleLoginLink = () => navigate('/auth');

    return (
        <>
            <div className={styles.authForm}>
                <Title level={2} type="secondary">
                    Registration
                </Title>
                <Input placeholder="Email" />
                <Input placeholder="Username" />
                <Password placeholder="Password" />
                <Password placeholder="Confirm password" />
                <Button type="primary" block>
                    Registration
                </Button>
            </div>
            <div className={styles.orContainer}>
                <Divider plain>or</Divider>
                <div className={styles.actionsList}>
                    <Link onClick={handleLoginLink}>Log in</Link>
                    <Link disabled>Forgot Password?</Link>
                </div>
            </div>
        </>
    );
};

export { RegistrationPage };
