import React from 'react';

import styles from './Header.module.css';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
    return <div className={styles.wrapper}> HEADER</div>;
};
