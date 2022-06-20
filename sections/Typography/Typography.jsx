import StyleGuideHeading from "../../components/StyleGuideHeading";
import Heading from "../../components/Heading";
import {styled, theme} from "../../stiches.config";

const TypeGrid = styled('div', {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'flex-end',
    marginBottom: '40px'
})

const  TypeDetails = styled('p', {
    color: theme.colors.textSecondary
})

const BodyFont = styled('p', {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes["1x"].value
})

export default function Typography(){
    return (
        <div id="typography">
            <StyleGuideHeading>
                Typography
            </StyleGuideHeading>

            <TypeGrid>
                <Heading size="6x" as="h1">Heading 6x</Heading>
                <TypeDetails>
                    size<br/>
                    weight<br/>
                    font
                </TypeDetails>

                <Heading size="5x" as="h2">Heading 5x</Heading>
                <TypeDetails>
                    size<br/>
                    weight<br/>
                    font
                </TypeDetails>

                <Heading size="4x" as="h3">Heading 4x</Heading>
                <TypeDetails>
                    size<br/>
                    weight<br/>
                    font
                </TypeDetails>

                <Heading size="3x" as="h4">Heading 3x</Heading>
                <TypeDetails>
                    size<br/>
                    weight<br/>
                    font
                </TypeDetails>

                <Heading size="2x" as="h5">Heading 2x</Heading>
                <TypeDetails>
                    size<br/>
                    weight<br/>
                    font
                </TypeDetails>

                <BodyFont>Body Font</BodyFont>
                <TypeDetails>
                    size<br/>
                    weight<br/>
                    font
                </TypeDetails>
            </TypeGrid>

        </div>
    )
}