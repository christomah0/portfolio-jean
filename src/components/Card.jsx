/**
 * Card used to carry some informations like image and link
 * @param {{ img, alt, link, title }} props 
 * @returns JSX.Element
 */
function Card(props) {
  return (
    <div className="card-main">
      <div className="card-img">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="card-link">
        <a href={props.link} target="_blank">{props.title}</a>
      </div>
    </div>
  )
}

export default Card