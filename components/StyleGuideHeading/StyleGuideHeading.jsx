import {styled, theme} from "../../stiches.config";

const StyleGuideHeading = styled('h2', {
    fontSize: theme.fontSizes["5x"],
    color: theme.colors.textPrimary,
    paddingBottom: '10px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    marginBottom: '20px',
    lineHeight: 1,
    fontWeight: theme.fontWeights.black,
    textTransform: 'uppercase',
    borderBottomColor: theme.colors.offBody
})

export default StyleGuideHeading