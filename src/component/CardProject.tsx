import "../styles/CardProject.css"
import { useState } from "react";

interface CardProjectProps {
    title: string
    image: string
    gitHub: string
    webLink?: string
    tag: string
}

function CardProject({ project }: { project: CardProjectProps }) {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = window.matchMedia("(hover: none)").matches;

    const handleCardClick = () => {
        if (isMobile) {
            setIsOpen(prev => !prev);
        }
    };
  
    return (
        <article
            className={`card-project ${isOpen ? "is-open" : ""}`}
            onClick={handleCardClick}
        >
            <span className={project.tag}>{project.tag}</span>
            <img src={project.image} alt={project.title} />
            <div className="written-overlay">
                <h3>{project.title}</h3>
                <div className="link">
                <a href={project.gitHub} target="_blank">
                    Repo Github
                </a>
                {project.webLink && (
                    <a href={project.webLink} target="_blank">
                    Site Web
                    </a>
                )}
                </div>
            </div>
        </article>
    );
}

export default CardProject