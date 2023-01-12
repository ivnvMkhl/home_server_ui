import React from 'react';
import { Typography as AntdTypography } from 'antd';
import { TextProps as AntdTextProps } from 'antd/es/typography/Text';

const Typography = AntdTypography;

const { Link, Paragraph, Text: AntdText, Title } = Typography;

type TextProps = AntdTextProps & {
    size: 'small' | 'medium' | 'large' | 'xlarge';
};

enum FontSize {
    'small' = '10px',
    'medium' = '12px',
    'large' = '16px',
    'xlarge' = '20px',
}

const Text: React.FC<TextProps & React.RefAttributes<HTMLSpanElement>> = ({ children, size, style, ...restProps }) => {
    return (
        <AntdText style={{ fontSize: FontSize[size], ...style }} {...restProps}>
            {children}
        </AntdText>
    );
};

export { Link, Paragraph, Text, Title };
