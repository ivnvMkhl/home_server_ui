import { TextSize, ColorValue } from './themeVariables';
import { ThemeConfig } from './ThemeProvider';

const MAIN_THEME: Readonly<ThemeConfig> = {
    token: {
        fontFamily: 'Poppins',
        fontWeightStrong: 800,
        fontSizeSM: TextSize.SMALL,
        fontSize: TextSize.MEDIUM,
        fontSizeLG: TextSize.LARGE,
        fontSizeXL: TextSize.XLARGE,

        borderRadius: 4,
        controlHeight: 40,
        controlHeightXS: 28,
        controlHeightSM: 32,
        controlHeightLG: 48,

        colorTextBase: ColorValue.TEXT_BASE,
        colorTextTertiary: ColorValue.PRIMARY,
        colorTextLightSolid: ColorValue.TEXT_INVERSE,

        colorIcon: ColorValue.PRIMARY,
        colorIconHover: ColorValue.SECONDARY,

        colorPrimary: ColorValue.PRIMARY,
        colorPrimaryActive: ColorValue.SECONDARY,
        colorPrimaryHover: ColorValue.SECONDARY,
    },
    components: {
        Button: {},
    },
};

export { MAIN_THEME };
