import React from 'react';
import { Header } from '@components/Complex/Header/Header';
import { Button } from 'antd';

type MainLayoutProps = {
    children?: React.ReactNode;
    isLoading?: boolean;
    isError?: boolean;
    withoutHeader?: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, withoutHeader }) => {
    return (
        <div className="layout_wrapper">
            {withoutHeader ? null : <Header />}
            <div className="content">
                {children}
                <Button>test</Button>
            </div>
        </div>
    );
};
