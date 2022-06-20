import {styled, theme} from "../../stiches.config";
import {useState} from "react";

export default function ColorCard({name}) {
    const Container = styled('div', {
        border: '4px solid black',
        padding: '20px'
    })
    const ColorButton = styled('button', {
        display: 'block',
        aspectRatio: '1/1',
        width: "100%",
        backgroundColor: theme.colors[name],
        border: '4px solid black',
        marginBottom: '10px',
        fontWeight: theme.fontWeights.black,
        fontSize: theme.fontSizes["2x"],
        textTransform: 'uppercase',
        fontFamily: theme.fonts.inter,
        color: 'transparent',
        transition: theme.transitions.all,
        cursor: 'pointer',

        '&:hover': {
            color: theme.colors.textPrimaryLight,
            textShadow: theme.shadows.textSolid,
        },
        '&:active': {
            transform: 'scale(0.98)'
        }

    })
    const Name = styled('h5', {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes["3x"],
        fontWeight: theme.fontWeights.black
    })
    const Color = styled('h5', {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes["2x"],
        fontWeight: theme.fontWeights.bold,
    })

    const [buttonText, setButtonText] = useState('Copy')


    function CopyToClipBoard(){
        navigator.clipboard.writeText(theme.colors[name].value)
        setButtonText('Copied')
    }

    return (
        <Container>
            <ColorButton
                onMouseDown={() => CopyToClipBoard()}
                onMouseUp={() => setButtonText('Copy')}
            >
                {buttonText}
            </ColorButton>
            <Name>{name}</Name>
            <Color>{theme.colors[name].value}</Color>
        </Container>
    )
}