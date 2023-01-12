import React from 'react';
import { Text } from '@components/Primitives/Typography';

import styles from './Header.module.css';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <div className={styles.wrapper}>
            <Text size="xlarge" strong type="secondary">
                HEADER
            </Text>
        </div>
    );
};

export { Header };
