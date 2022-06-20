import {styled, theme} from "../../stiches.config";

const Text = styled('p', {
    lineHeight: 1.5,
    fontSize: theme.fontSizes["1x"].value,
    color: theme.colors.textPrimary
})

export default Text;