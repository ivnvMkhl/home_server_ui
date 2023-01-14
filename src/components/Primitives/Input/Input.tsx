import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import React from 'react';

const { TextArea, Search, Password, Group } = AntdInput;

type InputProps = AntdInputProps;

const Input: React.FC<InputProps> = ({ children, className, ...restProps }) => {
    return (
        <AntdInput className={className} {...restProps}>
            {children}
        </AntdInput>
    );
};

export { Input, TextArea, Search, Password, Group };
export type { InputProps };
