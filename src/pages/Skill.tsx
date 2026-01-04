import "../styles/Skill.css"
import CardIcon from "../component/CardIcon";

const hardskillsArray = [
    {
        name: 'CSS',
        image: '/css-3.png'
    },
    {
        name: 'HTML',
        image: '/html-5.png'
    },
    {
        name: 'JavaScript',
        image: '/js.png'
    },
    {
        name: 'TypeScript',
        image: '/ts.png'
    },
    {
        name: 'React',
        image: '/React-icon.svg.png'
    },
    {
        name: 'Express',
        image: '/express.png'
    },
    {
        name: 'NodeJS',
        image: '/nodejs.png'
    },
    {
        name: 'MySQL',
        image: '/mysql-com-logo.avif'
    },
    {
        name: 'Figma',
        image: '/Figma-logo.svg'
    },
]

const softkillsArray = [
    {
        name: 'Rigueur',
        image: '/rigueur.png'
    },
    {
        name: 'Organisation',
        image: '/organiser.png'
    },
    {
        name: 'Curiosité',
        image: '/curiosite.png'
    },
    {
        name: 'Analyse',
        image: '/analyse.png'
    },
    {
        name: 'Adaptabilité',
        image: '/adaptabilite.png'
    },
    {
        name: 'Teamwork',
        image: '/esprit-dequipe.png'
    }
]

function Skill () {
        
    return (
        <>
            <h1>Skills</h1>
            <div className="all-skill">
                <div className="skill-container">
                    <h2>HardSkills</h2>
                    <div className="hardskill">
                        {hardskillsArray.map((hardskill) => (
                            <CardIcon icon={hardskill} key={hardskill.name}/>
                        ))}
                    </div>
                </div>
                <div className="skill-container">
                    <h2>SoftSkills</h2>
                    <div className="hardskill">
                        {softkillsArray.map((softskill) => (
                            <CardIcon icon={softskill} key={softskill.name} />
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Skill