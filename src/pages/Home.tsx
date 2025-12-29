import { Link } from "react-router"
import "../styles/Home.css"

function Home() {
    return (
        <section className="home">
             <Link to="/project">
               <article>
                 <h2>Project</h2>
                 <img src="/site-internet.png" alt="web" />
               </article>
             </Link>
             <Link to="/about">
               <article>
                  <h2>A propos</h2>
               </article>
             </Link>
             <Link to="/project">
               <article>
                  <h2>Project</h2>
               </article>
             </Link>
        </section>
    )    
    
    
}

export default Home