import React from 'react';
import { AuthFormLabels } from '@components/Complex/AuthorizationPage/AuthorizationPage.constants';
import { Button } from '@components/Primitives/Button';
import { Divider } from '@components/Primitives/Divider';
import { Input, Password } from '@components/Primitives/Input';
import { Link, Title } from '@components/Primitives/Typography';
import { Form, RuleRender } from '@src/components/Primitives/Form';
import { useNavigate } from '@src/routing/Router';

import styles from './RegistrationPage.module.css';

type RegistrationPageProps = {
    onRegistrationSubmit?: (values: FormValues) => void;
};

enum FormItem {
    USERNAME = 'username',
    EMAIL = 'email',
    PASSWORD = 'password',
    CONFIRM_PASSWORD = 'confirmPassword',
}

type FormValues = Record<FormItem, string>;

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onRegistrationSubmit }) => {
    const navigate = useNavigate();
    const handleLoginLink = () => navigate('/auth');
    const validateConfirmPassword: RuleRender = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue(FormItem.PASSWORD) === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
    });

    return (
        <>
            <Form className={styles.authForm} layout="vertical" name="login" onFinish={onRegistrationSubmit}>
                <Title level={2} type="secondary">
                    {AuthFormLabels.REGISTRATION}
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
                    name={FormItem.USERNAME}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username',
                        },
                        {
                            min: 4,
                            message: 'Username min 4 symbols',
                        },
                    ]}
                >
                    <Input placeholder={AuthFormLabels.USERNAME} />
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
                <Form.Item
                    name={FormItem.CONFIRM_PASSWORD}
                    dependencies={[FormItem.PASSWORD]}
                    rules={[
                        {
                            required: true,
                            message: 'Confirm your password',
                        },
                        validateConfirmPassword,
                    ]}
                >
                    <Password placeholder={AuthFormLabels.CONFIRM_PASSWORD} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" block>
                        {AuthFormLabels.REGISTRATION}
                    </Button>
                </Form.Item>
            </Form>
            <div className={styles.orContainer}>
                <Divider plain>or</Divider>
                <div className={styles.actionsList}>
                    <Link onClick={handleLoginLink}>{AuthFormLabels.LOGIN}</Link>
                    <Link disabled>{AuthFormLabels.FORGOT_PASSWORD}</Link>
                </div>
            </div>
        </>
    );
};

export { RegistrationPage };
