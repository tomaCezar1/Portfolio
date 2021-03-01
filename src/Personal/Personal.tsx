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
                <p className="personal-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum eos
                    nesciunt obcaecati amet voluptatum repudiandae libero dignissimos. Inventore ad
                    voluptatum, eum hic, libero assumenda et dignissimos blanditiis atque nisi quas
                    impedit sed suscipit sint dicta laboriosam repellendus mollitia explicabo.
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
                        <Link href="/">GitHub</Link>
                    </div>
                    <div className="personal-links">
                        <LinkedIn className="links-icons" />
                        <Link href="/">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personal;
