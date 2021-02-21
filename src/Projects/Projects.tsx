function Projects({ lang, title }): JSX.Element {
    return (
        <>
            <div className="projects-box">
                <h3>{lang}</h3>
                <h1>{title}</h1>
                <a href="/">link</a>
            </div>
        </>
    );
}

export default Projects;
