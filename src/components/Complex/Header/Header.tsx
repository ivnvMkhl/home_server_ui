import React from 'react';
import { Text } from '@components/Primitives/Typography';
import { ColorValue } from '@src/theme/themeVariables';

import styles from './Header.module.css';

type HeaderProps = {
    title?: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <Text size="xlarge" strong color={ColorValue.TEXT_INVERSE}>
                {title}
            </Text>
        </div>
    );
};

export { Header };
