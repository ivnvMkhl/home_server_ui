import React from 'react';
import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { ThemeConfig } from 'antd/es/config-provider/context';

type ThemeProviderProps = ConfigProviderProps;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...restProos }) => {
    return <ConfigProvider {...restProos}>{children}</ConfigProvider>;
};

export { ThemeProvider };
export type { ThemeConfig };
