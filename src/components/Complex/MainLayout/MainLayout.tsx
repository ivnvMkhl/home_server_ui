import React from 'react';
import { Button } from '@components/Primitives/Button';
import { Header } from 'antd/es/layout/layout';

type MainLayoutProps = {
    children?: React.ReactNode;
    isLoading?: boolean;
    isError?: boolean;
    withoutHeader?: boolean;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, withoutHeader }) => {
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

export { MainLayout };
