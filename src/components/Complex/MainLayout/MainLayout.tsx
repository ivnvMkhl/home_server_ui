import React from 'react';
import { Header } from '@components/Complex/Header';

import styles from './MainLayout.module.css';

type MainLayoutProps = {
    children?: React.ReactNode;
    isLoading?: boolean;
    isError?: boolean;
    withoutHeader?: boolean;
    title?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, withoutHeader }) => {
    return (
        <div className={styles.wrapper}>
            {withoutHeader ? null : <Header title={title} />}
            <div className="content">{children}</div>
        </div>
    );
};

export { MainLayout };
