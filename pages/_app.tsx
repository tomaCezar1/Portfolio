import '../styles/globals.css';
import '../styles/styles.scss';
import BlurProvider from '../src/Context/BlurContext';
import Layout from '../src/Layout/Layout';

function MyApp({ Component, pageProps }): JSX.Element {
    return (
        <>
            <BlurProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </BlurProvider>
        </>
    );
}

export default MyApp;
