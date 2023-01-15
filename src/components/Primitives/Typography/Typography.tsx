import React from 'react';
import { Typography as AntdTypography } from 'antd';
import { TextProps as AntdTextProps } from 'antd/es/typography/Text';
import { ColorValue } from '@src/theme/themeVariables/colorVariables';
import { TextSize } from '@src/theme/themeVariables/textSizeVariables';

const Typography = AntdTypography;

const { Link, Paragraph, Text: AntdText, Title } = Typography;

type SizeVariants = 'small' | 'medium' | 'large' | 'xlarge';

type TextProps = AntdTextProps & {
    size?: SizeVariants;
    color?: ColorValue;
};

const FontSizes: Readonly<Record<SizeVariants, string>> = {
    small: `${TextSize.SMALL}px`,
    medium: `${TextSize.MEDIUM}px`,
    large: `${TextSize.LARGE}px`,
    xlarge: `${TextSize.XLARGE}px`,
};

const Text: React.FC<TextProps & React.RefAttributes<HTMLSpanElement>> = ({ children, size, style, color, ...restProps }) => {
    return (
        <AntdText style={{ fontSize: size ? FontSizes[size] : undefined, color: color, ...style }} {...restProps}>
            {children}
        </AntdText>
    );
};

export { Link, Paragraph, Text, Title };
