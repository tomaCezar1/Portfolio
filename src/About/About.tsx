/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import Github from '../../public/github.svg';
import LinkedIn from '../../public/linkedin.svg';

function About(): JSX.Element {
    return (
        <>
            <div className="about-container">
                <h1 className="about-h1">about()</h1>
                <div className="about-info-container">
                    <div className="first-info">
                        <ul className="about-contact flex">
                            <li className="personal-links purple">
                                <Link href="https://github.com/tomaCezar1">
                                    <Github className="links-icons about-icons" />
                                </Link>
                            </li>
                            <li className="personal-links purple">
                                <Link href="https://www.linkedin.com/in/cezar-toma-541990190/">
                                    <LinkedIn className="links-icons about-icons" />
                                </Link>
                            </li>
                            <li className="about-download grey">Download my resume</li>
                        </ul>
                        <p className="about-me purple">
                            I am a creative frontend developer, designer and illustrator. From
                            Brazil, based in Berlin.
                        </p>
                        <p className="about-experience grey">// 1 year of experience</p>
                    </div>
                    <div className="about-section">
                        <h2 className="about-title light-grey">Technical Skills</h2>
                        <ul className="about-grid grey">
                            <li>
                                Javascript <br /> React <br /> NextJS
                            </li>
                            <li>
                                HTML <br /> CSS <br /> SASS
                            </li>
                            <li>
                                Git <br /> REST/GraphQL APIs <br /> OOP
                            </li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h2 className="about-title light-grey">Experience</h2>
                        <ul className="about-grid about-grid-experience grey">
                            <li>
                                <strong className="purple">React Developer</strong>
                                <p>@ Incoden</p>
                                <p>November 2020 - February 2021</p>
                            </li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h2 className="about-title light-grey">Experience</h2>
                        <p className="about-experience grey languages">// Fluent</p>
                        <ul className="about-grid grey">
                            <li>English</li>
                            <li>French</li>
                            <li>Romanian</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
