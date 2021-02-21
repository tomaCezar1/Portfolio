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
                    <div className="content-container flex column">
                        <div className="showcase-container">
                            <Showcase lang="Javascript" title="Project" desc="a js library" />
                            <Showcase lang="Javascript" title="Project" desc="a js library" />
                            <Showcase lang="Javascript" title="Project" desc="a js library" />
                            <Showcase lang="Javascript" title="Project" desc="a js library" />
                            <Showcase lang="Javascript" title="Project" desc="a js library" />
                        </div>
                        <div className="projects-container">
                            <Projects lang="React" title="Stock Market App" />
                            <Projects lang="React" title="Netflix Clone" />
                            <Projects lang="React" title="Netflix Clone" />
                            <Projects lang="React" title="Netflix Clone" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
