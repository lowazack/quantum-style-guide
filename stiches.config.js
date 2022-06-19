import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            pink: '#F4B5FF',
            blue: '#3CDDFF',
            purple: '#6B40CC',
            yellow: '#FFE60E',
            orange: '#FF9F62',
            textPrimary: '#464646',
            textSecondary: '#807F7F',
            textPrimaryLight: '#FAFAFA',
            textSecondaryLight: '#DEE6E8',
            error: '#E84118',
            success: '#44BD32',
            black: '#000000',
            body: '#ffffff',
            offBody: '#F5F6FA',
        },
        fontSizes: {
            '0.75x': '0.75rem',
            '1x': '1rem',
            '2x': '1.25rem',
            '3x': '1.563rem',
            '4x': '1.953rem',
            '5x': '2.441rem',
            '6x': '3.052rem',
        },
        fontWeights: {
            regular: 500,
            bold: 700,
            black: 900,
        },
        fonts: {
            inter: `'Inter', sans-serif`
        },
        transitions: {
            all: `all 300ms ease-in-out`
        },
        shadows: {
            textSolid: `2px 2px 0px #000000`
        }
    },
    media: {
        bp1: '(min-width: 480px)',
    },
    utils: {
        marginX: (value) => ({ marginLeft: value, marginRight: value }),
    },
});