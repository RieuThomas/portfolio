import './styles/reset.css'
import './styles/App.css'
import { Link, Outlet } from 'react-router'

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
          <div className='sidebar-details'>
            <a href="https://github.com/RieuThomas" target='_blank'>
              <img src="/github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/thomas-rieu/" target='_blank'>
              <img src="/linkedin.png" alt="linkedin" />
            </a>
            <a href="mailto:rieu.thomas@hotmail.com"target='_blank'>
              <img src="mail.png" alt="mail" />
            </a>     
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
