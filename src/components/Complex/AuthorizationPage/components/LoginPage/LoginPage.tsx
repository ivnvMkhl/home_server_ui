import React, { useState } from 'react';
import { AuthFormLabels } from '@components/Complex/AuthorizationPage/AuthorizationPage.constants';
import { Button } from '@components/Primitives/Button';
import { Divider } from '@components/Primitives/Divider';
import { Input, Password } from '@components/Primitives/Input';
import { Link, Title } from '@components/Primitives/Typography';
import { Auth } from '@hooks/Auth';
import { Form } from '@src/components/Primitives/Form';
import { LoginForm, LoginFormFieldName } from '@src/interfaces/auth';
import { useNavigate } from '@src/services/routing/Router';

import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<LoginForm>();
    const { data, isFetching } = Auth.useLogin(currentUser);
    const navigate = useNavigate();

    const handleRegistrationLink = () => navigate('/auth/registration');

    const handleLoginButton = (user: LoginForm) => setCurrentUser(user);
    return (
        <>
            <Form className={styles.authForm} layout="vertical" name="login" onFinish={handleLoginButton}>
                <Title level={2} type="secondary">
                    {AuthFormLabels.LOGIN}
                </Title>
                <Form.Item
                    name={LoginFormFieldName.EMAIL}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your E-mail',
                        },
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}
                >
                    <Input placeholder={AuthFormLabels.EMAIL} />
                </Form.Item>
                <Form.Item
                    name={LoginFormFieldName.PASSWORD}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password',
                        },
                        {
                            min: 4,
                            message: 'Password min 8 symbols',
                        },
                    ]}
                >
                    <Password placeholder={AuthFormLabels.PASSWORD} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" loading={isFetching} block>
                        {AuthFormLabels.LOGIN}
                    </Button>
                </Form.Item>
            </Form>
            <div className={styles.orContainer}>
                <Divider plain>or</Divider>
                <div className={styles.actionsList}>
                    <Link onClick={handleRegistrationLink}>{AuthFormLabels.REGISTRATION}</Link>
                    <Link disabled>{AuthFormLabels.FORGOT_PASSWORD}</Link>
                </div>
            </div>
        </>
    );
};

export { LoginPage };
