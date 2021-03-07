import Link from 'next/link';
import Image from 'next/image';
import Github from '../../public/github.svg';
import LinkedIn from '../../public/linkedin.svg';

function Personal(): JSX.Element {
    return (
        <>
            <div className="personal-container">
                <h1 className="personal-heading">
                    Hello, I&apos;m <span className="header-name"> Toma Cezar </span>
                </h1>
                <p className="personal-text white">
                    <span className="purple">React</span> developer.&nbsp;
                    <span className="purple">IT</span> student.&nbsp;
                    <span className="purple">Front-End</span> enthusiast.
                </p>
                <div className="personal-links-container">
                    <div className="profile-pic-container">
                        <Image
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            objectFit="cover"
                            className="profile-pic"
                            alt="profile picture"
                        />
                    </div>
                    <div className="personal-links">
                        <Github className="links-icons" />
                        <Link href="https://github.com/tomaCezar1">GitHub</Link>
                    </div>
                    <div className="personal-links">
                        <LinkedIn className="links-icons" />
                        <Link href="www.linkedin.com/in/cezar-toma-541990190">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personal;
