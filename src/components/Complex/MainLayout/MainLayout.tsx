import React from 'react';
import { Header } from '@components/Complex/Header';

import styles from './MainLayout.module.css';

type MainLayoutProps = {
    children?: React.ReactNode;
    isLoading?: boolean;
    isError?: boolean;
    withoutHeader?: boolean;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, withoutHeader }) => {
    return (
        <div className={styles.wrapper}>
            {withoutHeader ? null : <Header />}
            <div className="content">{children}</div>
        </div>
    );
};

export { MainLayout };
