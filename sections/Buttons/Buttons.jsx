import FlexGrid from "../../components/FlexGrid";
import Button from "../../components/Button";
import {styled, theme} from "../../stiches.config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/pro-solid-svg-icons";
import StyleGuideHeading from "../../components/StyleGuideHeading";

const FillContainer = styled('div', {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '10px',
    padding: '20px',
    backgroundColor: theme.colors.offBody,
    maxWidth: '500px'

})

export default function Buttons(){
    return (
        <div id="buttons">
            <StyleGuideHeading>
                Buttons
            </StyleGuideHeading>

            <FlexGrid>
                <Button size="small" color="pink">Button</Button>
                <Button size="small" color="blue">Button</Button>
                <Button size="small" color="yellow">Button</Button>
                <Button size="small" color="orange">Button</Button>
                <Button size="small" color="purple">Button</Button>
                <Button size="small" color="success">Button</Button>
                <Button size="small" color="error">Button</Button>
            </FlexGrid>
            <FlexGrid>
                <Button color="pink">Button</Button>
                <Button color="blue">Button</Button>
                <Button color="yellow">Button</Button>
                <Button color="orange">Button</Button>
                <Button color="purple">Button</Button>
                <Button color="success">Button</Button>
                <Button color="error">Button</Button>
            </FlexGrid>
            <FlexGrid>
                <Button size="large" color="pink">Button</Button>
                <Button size="large" color="blue">Button</Button>
                <Button size="large" color="yellow">Button</Button>
                <Button size="large" color="orange">Button</Button>
                <Button size="large" color="purple">Button</Button>
                <Button size="large" color="success">Button</Button>
                <Button size="large" color="error">Button</Button>
            </FlexGrid>
            <FlexGrid>
                <Button color="pink">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button color="blue">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button color="yellow">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button color="orange">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button color="purple">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button color="success">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button color="error">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
            </FlexGrid>
            <FlexGrid>
                <Button wire="pink">Button</Button>
                <Button wire="blue">Button</Button>
                <Button wire="yellow">Button</Button>
                <Button wire="orange">Button</Button>
                <Button wire="purple">Button</Button>
                <Button wire="success">Button</Button>
                <Button wire="error">Button</Button>
            </FlexGrid>

            <FlexGrid>
                <Button wire="pink">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button wire="blue">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button wire="yellow">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button wire="orange">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button wire="purple">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button wire="success">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
                <Button wire="error">
                    <FontAwesomeIcon icon={faHeart}/>
                    Button
                </Button>
            </FlexGrid>

            <FlexGrid>
                <FillContainer>
                    <Button color="pink" fillSpace>Button</Button>
                    <Button color="blue" fillSpace>Button</Button>
                    <Button color="yellow" fillSpace>Button</Button>
                    <Button color="orange" fillSpace>Button</Button>
                    <Button color="purple" fillSpace>Button</Button>
                    <Button color="success" fillSpace>Button</Button>
                    <Button color="error" fillSpace>Button</Button>
                </FillContainer>

                <FillContainer>
                    <Button wire="pink" fillSpace>Button</Button>
                    <Button wire="blue" fillSpace>Button</Button>
                    <Button wire="yellow" fillSpace>Button</Button>
                    <Button wire="orange" fillSpace>Button</Button>
                    <Button wire="purple" fillSpace>Button</Button>
                    <Button wire="success" fillSpace>Button</Button>
                    <Button wire="error" fillSpace>Button</Button>
                </FillContainer>
            </FlexGrid>
        </div>
    )
}