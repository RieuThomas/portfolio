interface CardProjectProps {
    title: string
    image: string
    gitHub: string
    webLink?: string
}

function CardProject({project}: {project:CardProjectProps}) {
    return (
        <article>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.gitHub} target="_blank">Repo Github</a>
            <a href={project.webLink} target="_blank">Viste site web</a>
        </article>
    )
}

export default CardProject