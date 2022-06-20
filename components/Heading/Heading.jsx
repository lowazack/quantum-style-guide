import {styled, theme} from "../../stiches.config";

const Heading = styled('h1', {
    fontSize: theme.fontSizes["6x"].value,
    fontWeight: theme.fontWeights.black,
    color: theme.colors.textPrimary,
    variants: {
        size: {
            '6x': {fontSize: theme.fontSizes["6x"].value},
            '5x': {fontSize: theme.fontSizes["5x"].value},
            '4x': {fontSize: theme.fontSizes["4x"].value},
            '3x': {fontSize: theme.fontSizes["3x"].value},
            '2x': {fontSize: theme.fontSizes["2x"].value},
        }
    }
})

export default Heading