import "../styles/CardIcon.css"

interface CardIconProps {
    name: string
    image: string
    link?: string
    download?: boolean
}

function CardIcon({ icon }: { icon: CardIconProps }) {
  return (
    <div className="card-skill">
      <h3 className="icon-title">{icon.name}</h3>
      <article className={`skill ${icon.name}`}>
        <img src={icon.image} alt={icon.name} />
      </article>
    </div>
  );
}

export default CardIcon