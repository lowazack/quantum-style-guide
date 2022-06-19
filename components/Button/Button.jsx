import { styled, theme } from '../../stiches.config';
import {darkenHex} from "../../lib/colorHelpers";


const colorMap = {
    pink: 'textPrimary',
    blue: 'textPrimary',
    yellow: 'textPrimary',
    orange: 'textPrimary',
    purple: 'textPrimaryLight',
    success: 'textPrimaryLight',
    error: 'textPrimaryLight',
}

function getColorVariants(){
    const variants = {}
    for (const color in colorMap) {
        let darken = ((colorMap[color] === 'textPrimaryLight'))
        variants[color] = {
            borderColor: theme.colors[color].value,
            backgroundColor: theme.colors[color].value,
            color: theme.colors[colorMap[color]].value,

            '&:hover': {
                backgroundColor: darkenHex(theme.colors[color].value, darken? -40 : 40),
            }
        }
    }
    return variants
}

function getWireVariants(){
    const variants = {}

    for (const color in colorMap) {
        let darken = ((colorMap[color] === 'textPrimaryLight'))
        variants[color] = {
            borderColor: theme.colors[color].value,
            backgroundColor: 'transparent',

            'svg': {
                color: theme.colors[color].value
            },

            '&:hover': {
                backgroundColor: darkenHex(theme.colors[color].value, darken? -40 : 40),
                color: theme.colors[colorMap[color]].value,
                'svg': {
                    color: theme.colors[colorMap[color]].value,
                },
            }
        }
    }
    return variants
}

const Button = styled('button', {
    backgroundColor: theme.colors.pink,
    borderWidth: '4px',
    borderColor: theme.colors.pink,
    borderStyle: 'solid',
    fontSize: theme.fontSizes["2x"].value,
    fontWeight: theme.fontWeights.bold,
    padding: '5px 18px',
    fontFamily: theme.fonts.inter,
    display: 'inline-flex',
    alignItems: 'center',
    transition: theme.transitions.all,
    cursor: 'pointer',

    'svg': {
        marginRight: '5px',
        width: '25px',
        transition: theme.transitions.all,
    },

    '&:active': {
      transform: `scale(0.9)`
    },

    variants: {
        color: {...getColorVariants()},
        wire: {...getWireVariants()},
        size: {
            small: {
                fontSize: theme.fontSizes["1x"].value,
            },
            large: {
                fontSize: theme.fontSizes["3x"].value,
            },
        },
        fillSpace: {
            true: {
                display: 'block',
                width: '100%'
            }
        },
        iconOnly: {
            true: {
                padding: '5px',
                aspectRatio: '1/1',
                'svg': {
                    marginRight: '0',
                },
            }
        }
    }
});

export default Button;