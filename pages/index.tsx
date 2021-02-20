import Head from 'next/head';
import Personal from '../src/Personal/Personal';
import Showcase from '../src/Showcase/Showcase';
import Projects from '../src/Projects/Projects';

function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <section className="global-container">
                <Personal />
                <div className="flex flex-end">
                    <div className="flex column">
                        <Showcase lang="Javascript" title="Project" desc="a js library" />
                        <Showcase lang="Javascript" title="Project" desc="a js library" />
                        <Showcase lang="Javascript" title="Project" desc="a js library" />
                        <Showcase lang="Javascript" title="Project" desc="a js library" />
                        <Showcase lang="Javascript" title="Project" desc="a js library" />
                    </div>
                </div>
                <div className="flex projects-container">
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                </div>
            </section>
        </>
    );
}

export default Home;
