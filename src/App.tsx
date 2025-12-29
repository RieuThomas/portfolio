import './styles/reset.css'
import './styles/App.css'
import { Link, Outlet } from 'react-router'
import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Link to="/">
          <h1>Thomas RIEU</h1>
        </Link>
        <p>
          {time.getHours().toString().padStart(2, "0")}:{time.getMinutes().toString().padStart(2, "0")}
        </p>
      </header>
      
      <main>
        <Outlet />
      </main>

      <footer>
        <a href="https://github.com/RieuThomas" target='_blank'>
          <img src="/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/thomas-rieu/" target='_blank'>
          <img src="/linkedin.png" alt="linkedin" />
        </a>
        <a href="mailto:rieu.thomas@hotmail.com"target='_blank'>
          <img src="mail.png" alt="mail" />
        </a>
      </footer>
    </>
  )
}

export default App
