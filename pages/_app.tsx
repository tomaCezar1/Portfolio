import '../styles/globals.css';
import '../styles/styles.scss';
import BlurProvider from '../src/Context/BlurContext';

function MyApp({ Component, pageProps }): JSX.Element {
    return (
        <>
            <BlurProvider>
                <Component {...pageProps} />
            </BlurProvider>
        </>
    );
}

export default MyApp;
