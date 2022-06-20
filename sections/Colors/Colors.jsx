import StyleGuideHeading from "../../components/StyleGuideHeading";
import Heading from "../../components/Heading";
import {styled} from "../../stiches.config";
import ColorCard from "../../components/ColorCard";

const CardGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '20px',
    marginBottom: '30px'

})

export default function Colors(){
    return(
        <div id="colors">
            <StyleGuideHeading>
                Colors
            </StyleGuideHeading>

            <Heading size="4x" as="h3" style={{marginBottom: '20px'}}>
                Brand Colors
            </Heading>

            <CardGrid>
                <ColorCard name="pink"/>
                <ColorCard name="blue"/>
                <ColorCard name="purple"/>
                <ColorCard name="yellow"/>
                <ColorCard name="orange"/>
            </CardGrid>

            <Heading size="4x" as="h3" style={{marginBottom: '20px'}}>
                Text Colors
            </Heading>

            <CardGrid>
                <ColorCard name="textPrimary"/>
                <ColorCard name="textSecondary"/>
                <ColorCard name="textPrimaryLight"/>
                <ColorCard name="textSecondaryLight"/>
            </CardGrid>

            <Heading size="4x" as="h3" style={{marginBottom: '20px'}}>
                Utility Colors
            </Heading>

            <CardGrid>
                <ColorCard name="error"/>
                <ColorCard name="success"/>
                <ColorCard name="black"/>
                <ColorCard name="body"/>
                <ColorCard name="offBody"/>
            </CardGrid>
        </div>
    )
}