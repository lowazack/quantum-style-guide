import {styled, theme} from "../../stiches.config";

const Container = styled('div', {
    backgroundColor: theme.colors.offBody,
    width: '250px',
    height: '100vh',
})

const ImageHead = styled('div', {
    width: '100%',
    aspectRatio: '1/1',
    backgroundImage: `url('/img/wave-pattern.png')`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
})

const Logo = styled('img', {
    marginBottom: '5px'
})

const NavHeading = styled('h3', {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: theme.fontWeights.black,
    textShadow: theme.shadows.textSolid,
    fontSize: theme.fontSizes["2x"]
})

const NavLink = styled('a', {
    display: 'flex',
    fontSize: theme.fontSizes["2x"].value,
    fontWeight: theme.fontWeights.bold,
    padding: '3px 15px',
    textDecoration: 'none',
    color: theme.colors.textPrimary,
    position: 'relative',
    transition: theme.transitions.all,
    alignItems: 'center',

    '&::before': {
        content: `''`,
        display: 'block',
        position: 'absolute',
        left: 0,
        height: '100%',
        width: '0px',
        backgroundColor: theme.colors.purple,
        transition: theme.transitions.all,
    },

    '&:hover': {
        padding: '3px 30px',
        '&::before': {
            width: '15px'
        }
    }
})

const LinksCont = styled('div',{
    padding: '20px 0'
})

export default function SideNav(){
    return (
        <Container>
            <ImageHead>
                <Logo src="/img/logo.svg"/>
                <NavHeading>
                    Style Guide
                </NavHeading>
            </ImageHead>

            <LinksCont>
                <NavLink href="#typography">
                    Typography
                </NavLink>
                <NavLink href="#colors">
                    Colors
                </NavLink>
                <NavLink href="#buttons">
                    Buttons
                </NavLink>
            </LinksCont>

        </Container>
    )
}