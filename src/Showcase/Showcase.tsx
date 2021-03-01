import { useContext } from 'react';
import { BlurContext } from '../Context/BlurContext';

function Showcase({ lang, title, desc }): JSX.Element {
    const { hovered } = useContext(BlurContext);
    const { mouseEnter } = useContext(BlurContext);
    const { mouseLeave } = useContext(BlurContext);

    return (
        <>
            <a href="/" className="relative showcase-links">
                <div className="jelly-effect" />
                <div
                    className={`showcase-box ${hovered ? 'blur' : ''}`}
                    onMouseEnter={(e) => mouseEnter(e)}
                    onMouseLeave={mouseLeave}>
                    <h3>{lang}</h3>
                    <h1 className="showcase-title">{title}</h1>
                    <p className="showcase-desc">{desc}</p>
                </div>
            </a>
        </>
    );
}

export default Showcase;
