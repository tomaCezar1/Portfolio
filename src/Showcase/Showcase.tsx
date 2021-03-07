import { useContext } from 'react';
import { BlurContext } from '../Context/BlurContext';

function Showcase({ link, lang, title, desc }): JSX.Element {
    const { hovered, mouseEnter, mouseLeave } = useContext(BlurContext);

    return (
        <>
            <a
                href={`${link}`}
                target="_blank"
                rel="noreferrer"
                className="relative showcase-links">
                <div className="jelly-effect" />
                <div
                    className={`showcase-box ${hovered ? 'blur' : ''}`}
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <h3 className="showcase-lang">{lang}</h3>
                    <h1 className="showcase-title">{title}</h1>
                    <p className="showcase-desc">{desc}</p>
                </div>
            </a>
        </>
    );
}

export default Showcase;
