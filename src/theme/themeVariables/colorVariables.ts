enum ColorValue {
    PRIMARY = '#11ad7f',
    SECONDARY = '#4cc19f',
    SURFACE = '#f2f3f3',
    BASE = '#ffffff',
    ACCENT = '#1083a2',
    TEXT_BASE = '#191A1A',
    TEXT_INVERSE = '#ffffff',
}

const colorVariablesDict: readonly [string, ColorValue][] = [
    ['--color-primary', ColorValue.PRIMARY],
    ['--color-secondary', ColorValue.SECONDARY],
    ['--color-surface', ColorValue.SURFACE],
    ['--color-base', ColorValue.BASE],
    ['--color-accent', ColorValue.ACCENT],
    ['--color-text-base', ColorValue.TEXT_BASE],
    ['--color-text-inverse', ColorValue.TEXT_INVERSE],
];

export { colorVariablesDict, ColorValue };
