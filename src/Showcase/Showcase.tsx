import Link from 'next/link';

function Showcase({ lang, title, desc }): JSX.Element {
    return (
        <>
            <a href="/" className="relative showcase-links">
                <div className="jelly-effect" />
                <div className="showcase-box">
                    <h3>{lang}</h3>
                    <h1 className="showcase-title">{title}</h1>
                    <p className="showcase-desc">{desc}</p>
                </div>
            </a>
        </>
    );
}

export default Showcase;
