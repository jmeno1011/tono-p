import Top from "../componets/Top"

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Top />
        <Component {...pageProps} />
        </>
    )
}

export default MyApp