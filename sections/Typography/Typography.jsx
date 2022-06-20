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
                    3.052rem | 48.83px<br/>
                    Black | 900<br/>
                    Inter
                </TypeDetails>

                <Heading size="5x" as="h2">Heading 5x</Heading>
                <TypeDetails>
                    2.441rem | 39.06px<br/>
                    Black | 900<br/>
                    Inter
                </TypeDetails>

                <Heading size="4x" as="h3">Heading 4x</Heading>
                <TypeDetails>
                    1.953rem | 31.25px<br/>
                    Black | 900<br/>
                    Inter
                </TypeDetails>

                <Heading size="3x" as="h4">Heading 3x</Heading>
                <TypeDetails>
                    1.563rem | 25.00px<br/>
                    Black | 900<br/>
                    Inter
                </TypeDetails>

                <Heading size="2x" as="h5">Heading 2x</Heading>
                <TypeDetails>
                    1.25rem | 20.00px<br/>
                    Black | 900<br/>
                    Inter
                </TypeDetails>

                <BodyFont>Body Font</BodyFont>
                <TypeDetails>
                    1rem | 16.00px<br/>
                    Inter<br/>
                    Medium | 500
                </TypeDetails>
            </TypeGrid>

        </div>
    )
}