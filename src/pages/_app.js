import '../styles/globals.css'
import Top from "../componets/commons/Top"

function MyApp({ Component, pageProps }) {
    return (
        <div className='container'>
            <Top />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp