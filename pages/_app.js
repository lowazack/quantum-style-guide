import {globalCss} from "@stitches/react";
import Head from "next/head";
import {styled, theme} from "../stiches.config";
import SideNav from "../components/SideNav";

const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    body: {
        fontFamily: theme.fonts.inter,
    },
    html: {
        fontSize: '16px',
    }
});

const Container = styled('div', {
    display: 'flex'
})

const Main = styled('main', {
    height: '100vh',
    flexDirection: 'column',
    flex: 1,
    padding: '20px',
    overflow: 'auto',
    scrollBehavior: 'smooth'

})

function MyApp({Component, pageProps}) {


    globalStyles();


    return (
        <>
            <Head>
                <title>Quantum Style Guide</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap" rel="stylesheet" crossOrigin/>
            </Head>
            <Container>
                <SideNav/>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </Container>
        </>

    )
}

export default MyApp
