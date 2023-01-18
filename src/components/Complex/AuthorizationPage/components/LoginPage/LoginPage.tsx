import React from 'react';
import { AuthFormLabels } from '@components/Complex/AuthorizationPage/AuthorizationPage.constants';
import { Button } from '@components/Primitives/Button';
import { Divider } from '@components/Primitives/Divider';
import { Input, Password } from '@components/Primitives/Input';
import { Link, Title } from '@components/Primitives/Typography';
import { Form } from '@src/components/Primitives/Form';
import { useNavigate } from '@src/services/routing/Router';

import styles from './LoginPage.module.css';

type LoginPageProps = {
    onLoginSubmit?: (values: FormValues) => void;
};

enum FormItem {
    EMAIL = 'email',
    PASSWORD = 'password',
}

type FormValues = Record<FormItem, string>;

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSubmit }) => {
    const navigate = useNavigate();
    const handleRegistrationLink = () => navigate('/auth/registration');

    return (
        <>
            <Form className={styles.authForm} layout="vertical" name="login" onFinish={onLoginSubmit}>
                <Title level={2} type="secondary">
                    {AuthFormLabels.LOGIN}
                </Title>
                <Form.Item
                    name={FormItem.EMAIL}
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
                    name={FormItem.PASSWORD}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password',
                        },
                        {
                            min: 8,
                            message: 'Password min 8 symbols',
                        },
                    ]}
                >
                    <Password placeholder={AuthFormLabels.PASSWORD} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" block>
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
