import './styles/reset.css'
import './styles/App.css'
import { Link, Outlet } from 'react-router'
import CardIcon from './component/CardIcon'

const contactArray = [
    {
        name: "GitHub",
        image: "/github2.png",
        link: "https://github.com/RieuThomas"
    },
    {
        name: "LinkedIn",
        image: "/linkedin2.png",
        link: "https://www.linkedin.com/in/thomas-rieu/"
    },
    {
        name: "Mail",
        image: "mail2.png",
        link: "mailto:rieu.thomas@hotmail.com"
    },
    {
        name: "CV",
        image: "download.png",
        link: "/CV-Rieu-Thomas.jpg",
        download: true
    }
]

function App() {

  return (
    <>      
      <main>
        <aside className='sidebar'>  
          <div className='sidebar-infos'>
            <img src="/avatar.png" alt="" />
            <h2>Thomas RIEU</h2>
            <p>Développeur Full-Stack</p>
          </div>
          <div className='sidebar-details-container'>
            <h2>Contact</h2>
            <div className='sidebar-details'>
              {contactArray.map((contact) => (
                <a 
                  href={contact.link} 
                  target={contact.download ? undefined : "_blank"}
                  download={contact.download}
                >
                  <CardIcon icon={contact}/>
                </a>
              ))}  
            </div>
          </div>          
        </aside>
        <section className='main-section'>
          <ul className='navbar'>
            <li><Link to="/">A propos</Link></li>
            <li><Link to="/project">Projets</Link></li>
            <li><Link to="/skill">Skills</Link></li>
          </ul>
          <div className='outlet-section'>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
