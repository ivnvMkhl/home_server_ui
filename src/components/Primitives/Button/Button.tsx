import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button/button';
import React from 'react';

type ButtonProps = AntdButtonProps;

const Button: React.FC<ButtonProps> = ({ children, className, ...restProps }) => {
    return (
        <AntdButton className={className} {...restProps}>
            {children}
        </AntdButton>
    );
};

export { Button };
