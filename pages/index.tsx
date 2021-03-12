import Head from 'next/head';
import HomePage from '../src/HomePage/HomePage';

function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <HomePage />
        </>
    );
}

export default Home;
