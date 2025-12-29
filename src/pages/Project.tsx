import CardProject from "../component/CardProject"
import "../styles/Project.css"

interface Project {
    title: string
    image: string
    gitHub: string
    webLink?: string
}

let projects: Project[] = [
    {
        title: 'My Local Escape',
        image: '/site-internet.png',
        gitHub: 'https://github.com/RieuThomas/My-local-escape',
        webLink: 'https://rieuthomas.github.io/My-local-escape'
    },
    {
        title: 'Wizdle',
        image: '/site-internet.png',
        gitHub: 'https://github.com/RieuThomas/Wizdle',
        webLink: 'https://wizdle.vercel.app'
    },
    {
        title: 'Portfolio',
        image: '/site-internet.png',
        gitHub: 'https://github.com/RieuThomas/Wizdle',
        webLink: 'https://wizdle.vercel.app'
    },
    {
        title: 'Expédition 33',
        image: '/site-internet.png',
        gitHub: 'https://github.com/RieuThomas/expedition-33',     
    },
    {
        title: 'Packedex',
        image: '/site-internet.png',
        gitHub: 'https://github.com/RieuThomas/Pokedex-cra',
    }
]


function Project () {
    return (
        <section>
            {projects.map((project) => (
                <CardProject project={project} />
            ))}
        </section>
        
    )
}

export default Project