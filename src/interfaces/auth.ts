export enum LoginFormFieldName {
    EMAIL = 'username',
    PASSWORD = 'password',
}

export type LoginForm = Record<LoginFormFieldName, string>;

export enum LoginResponseStatus {
    SUCCESS = 'Authorized',
    ERROR = 'Not authorized',
    SERVER_ERROR = 'Server error',
}

export enum RegistrationFormFieldName {
    USERNAME = 'username',
    EMAIL = 'email',
    PASSWORD = 'password',
    CONFIRM_PASSWORD = 'confirmPassword',
}

export type RegistrationForm = Record<RegistrationFormFieldName, string>;
