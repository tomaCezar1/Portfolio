function Showcase({ lang, title, desc }): JSX.Element {
    return (
        <>
            <div className="showcase-container">
                <div className="showcase-box-container">
                    <div className="showcase-box">
                        <h3>{lang}</h3>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Showcase;
