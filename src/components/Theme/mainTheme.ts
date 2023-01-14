import { ColorValue } from './colorVariables';
import { ThemeConfig } from './ThemeProvider';

const MAIN_THEME: ThemeConfig = {
    token: {
        fontFamily: 'Poppins',
        fontWeightStrong: 800,

        boxShadow: 'none',
        boxShadowSecondary: 'none',

        borderRadius: 4,
        controlHeight: 40,
        controlHeightXS: 28,
        controlHeightSM: 32,
        controlHeightLG: 48,

        colorPrimary: ColorValue.PRIMARY,
        colorPrimaryActive: ColorValue.SECONDARY,
        colorPrimaryHover: ColorValue.SECONDARY,
    },
};

export { MAIN_THEME };
