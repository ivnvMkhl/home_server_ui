import React from 'react';
import { AuthFormLabels } from '@components/Complex/AuthorizationPage/AuthorizationPage.constants';
import { Button } from '@components/Primitives/Button';
import { Divider } from '@components/Primitives/Divider';
import { Input, Password } from '@components/Primitives/Input';
import { Link, Title } from '@components/Primitives/Typography';
import { Form, RuleRender } from '@src/components/Primitives/Form';
import { RegistrationFormFieldName } from '@src/interfaces/auth';
import { useNavigate } from '@src/services/routing/Router';

import styles from './RegistrationPage.module.css';

const RegistrationPage: React.FC = () => {
    const navigate = useNavigate();
    const handleLoginLink = () => navigate('/auth');
    const validateConfirmPassword: RuleRender = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue(RegistrationFormFieldName.PASSWORD) === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
    });

    const handleRegistationButton = () => {};

    return (
        <>
            <Form className={styles.authForm} layout="vertical" name="login" onFinish={handleRegistationButton}>
                <Title level={2} type="secondary">
                    {AuthFormLabels.REGISTRATION}
                </Title>
                <Form.Item
                    name={RegistrationFormFieldName.EMAIL}
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
                    name={RegistrationFormFieldName.USERNAME}
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
                    name={RegistrationFormFieldName.PASSWORD}
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
                    name={RegistrationFormFieldName.CONFIRM_PASSWORD}
                    dependencies={[RegistrationFormFieldName.PASSWORD]}
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
