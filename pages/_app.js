import {globalCss} from "@stitches/react";
import Head from "next/head";
import {theme} from "../stiches.config";

const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: theme.fonts.inter,
    },
    html: {
        fontSize: '16px',
    }
});

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
            <Component {...pageProps} />
        </>

    )
}

export default MyApp
