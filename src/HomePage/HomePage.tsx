import Personal from '../Personal/Personal';
import Showcase from '../Showcase/Showcase';
import Projects from '../Projects/Projects';

function HomePage(): JSX.Element {
    return (
        <section className="global-container">
            <Personal />
            <div className="flex flex-end">
                <div className="content-container flex column">
                    <div className="showcase-container">
                        <Showcase
                            link="https://github.com/tomaCezar1/cegoltar-ecommerce"
                            lang="React & Next.js"
                            title="E-commerce website"
                            desc="Created an e-commerce website for a local company, in collaboration with a team. 
                                GraphQL, Server-side rendering, ContextAPI implemented."
                        />
                        <Showcase
                            link="https://github.com/tomaCezar1/DoEmploy"
                            lang="React & Next.js"
                            title="DoEmploy"
                            desc=""
                        />
                        <Showcase
                            link="https://finance-styled-app-react.netlify.app/#/"
                            lang="React"
                            title="Finance App"
                            desc="A template for a finance style app."
                        />
                        <Showcase
                            link="https://tomacezar1.github.io/Stock-Market-API-React/"
                            lang="React"
                            title="Stock Market app"
                            desc="React App built to display stocks charts, utilizing real-time data with APIs"
                        />
                        <Showcase
                            link="https://tomacezar1.github.io/Netflix-clone-React/#/"
                            lang="React"
                            title="Netflix Clone"
                            desc="A Netflix Clone built with React"
                        />
                        <Showcase
                            link="https://barbershop-website-cezar.netlify.app/"
                            lang="JavaScript"
                            title="Barbershop Website"
                            desc="A barbershop styled template"
                        />
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
    );
}

export default HomePage;
