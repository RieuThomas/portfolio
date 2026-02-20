import CardProject from "../component/CardProject"
import "../styles/Project.css"

interface Project {
    title: string
    image: string
    gitHub: string
    webLink?: string
    tag: string
}

const projects: Project[] = [
    {
        title: 'My Local Escape',
        image: '/pic-st-loup.png',
        gitHub: 'https://github.com/RieuThomas/My-local-escape',
        webLink: 'https://rieuthomas.github.io/My-local-escape',
        tag: 'Ecole'
    },
    {
        title: 'Wizdle',
        image: '/wizdle.jpg',
        gitHub: 'https://github.com/RieuThomas/Wizdle',
        webLink: 'https://wizdle.vercel.app',
        tag: 'Ecole'
    },
    {
        title: 'Portfolio',
        image: '/portfolio.png',
        gitHub: 'https://github.com/RieuThomas/portfolio',
        tag: 'Perso'
       
    },
    {
        title: 'Expédition 33',
        image: '/CO.jpg',
        gitHub: 'https://github.com/RieuThomas/expedition-33',
        tag: 'Perso'     
    },
    {
        title: 'Packedex',
        image: '/Packedex.png',
        gitHub: 'https://github.com/RieuThomas/Pokedex-cra',
        tag: 'Perso'
    },
    {
        title: 'TeamUp',
        image: 'TeamUp.png',
        gitHub: 'https://github.com/RieuThomas/Pokedex-cra',
        tag:'Ecole'
    }
]

function Project () {  
    return (
        <>
            <h1>Projets</h1>
            <section className="project">
                {projects.map((project) => (
                    <CardProject project={project} key={project.title} />
                ))}
            </section>   
        </>
          
    )
}

export default Project