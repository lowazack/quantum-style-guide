import {styled, theme} from "../../stiches.config";

const StyleGuideHeading = styled('h2', {
    fontSize: theme.fontSizes["6x"],
    color: theme.colors.textPrimary,
    paddingBottom: '10px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    marginBottom: '20px',
    lineHeight: 1,
    borderBottomColor: theme.colors.offBody
})

export default StyleGuideHeading