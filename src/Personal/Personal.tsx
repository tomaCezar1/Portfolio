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
                    <a href="/">link</a>
                    <a href="/">link</a>
                    <a href="/">link</a>
                </div>
            </div>
        </>
    );
}

export default Personal;