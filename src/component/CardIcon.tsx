import { useState } from "react"
import "../styles/CardIcon.css"

interface CardIconProps {
    name: string
    image: string
    link?: string
    download?: boolean
}

function CardIcon({ icon }: { icon: CardIconProps }) {
  const [isTitileVisible, setIsTitleVisible] = useState(false)
  const isMobile = window.matchMedia("(hover: none)").matches;

  return (
    <div className="card-skill">
      {isMobile ? <h3 className="icon-title">{icon.name}</h3> : !icon.link ? <h3 className="icon-title">{icon.name}</h3>
      : isTitileVisible && <h3 className="icon-title">{icon.name}</h3> }
      <article className={`skill ${icon.name}`}
        onMouseEnter={() => setIsTitleVisible(true)}
        onMouseLeave={() => setIsTitleVisible(false)}>
        <img src={icon.image} alt={icon.name} />
      </article>
    </div>
  );
}

export default CardIcon