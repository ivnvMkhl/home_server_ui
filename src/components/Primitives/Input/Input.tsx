import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';

const { TextArea, Search, Password, Group } = AntdInput;

type InputProps = AntdInputProps;

const Input: React.FC<InputProps> = ({ children, className, ...restProps }) => {
    return (
        <AntdInput className={className} {...restProps}>
            {children}
        </AntdInput>
    );
};

export { Group, Input, Password, Search, TextArea };
export type { InputProps };
