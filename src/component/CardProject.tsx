import "../styles/CardProject.css"
import { useState } from "react";

interface CardProjectProps {
    title: string
    image: string
    gitHub: string
    webLink?: string
}

function CardProject({ project }: { project: CardProjectProps }) {
    const [showLinkAndTitle, setShowLinkAndTitle] = useState(false);

    return (
        <article
            className={`card-project ${showLinkAndTitle ? "is-hovered" : ""}`}
            onMouseEnter={() => setShowLinkAndTitle(true)}
            onMouseLeave={() => setShowLinkAndTitle(false)}
        >
            <img src={project.image} alt={project.title} />

            <div className="written-overlay">
                <h3>{project.title}</h3>
                <div className="link">
                    <a href={project.gitHub} target="_blank">
                        Repo Github
                    </a>
                    {project.webLink &&
                        <a href={project.webLink} target="_blank">
                            Site Web
                        </a>
                    }

                </div>
            </div>
        </article>
    );
}

export default CardProject