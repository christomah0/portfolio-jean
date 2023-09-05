import Card from './Card.jsx'


/**
 * Hold project description which including image, link forwards to the project's link
 * @param {{ range, text, img, alt, link, title }} props 
 * @returns JSX.Element
 */
function ProjectDescription(props) {
  return (
      <div className='project-descr'>
        {
          (props.range % 2 == 0)
          ? (
            <div className='project-descr-even'>
              <div className="text-descr">
                <p>{props.text}</p>
              </div>
              <Card img={props.img} alt={props.alt} link={props.link} title={props.title} />
            </div>
          )
          : (
            <div className='project-descr-odd'>
              <div className="text-descr">
                <p>{props.text}</p>
              </div>
              <Card img={props.img} alt={props.alt} link={props.link} title={props.title} />
            </div>
          )
        }
      </div>
  )
}

export default ProjectDescription