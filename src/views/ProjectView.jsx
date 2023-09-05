import ProjectDescription from "../components/ProjectDescription.jsx"
import ProjectImg from '../assets/images/fake-image.jpg'
import SocialIcon from '../components/SocialIcon.jsx'


function ProjectView() {
  const projectList = [
    {
      "title": "project 1",
      "text": "Lorem haha lol omg!",
      "imgPath": ProjectImg, 
      "alt": "fake-image", 
      "githubLink": "https://github.com/christomah0/"
    }
  ]

  return (
    <div className="project-view-container">
      <div id="projects" className="project-view">
        {/* Heading paragraph */}
        <div className="project-view-part1">
          <h2>
            List of some projects that i have done alone and with teams which are leveling up my experience in development around digital world. Check them out in the list below.
          </h2>
        </div>

        {/* Listing projects in card item with description */}
        <div className="project-view-part2">
          <ProjectDescription 
          range={0} 
          text={projectList[0].text} 
          img={projectList[0].imgPath}
          alt={projectList[0].alt} 
          link={projectList[0].githubLink} 
          title={projectList[0].title} />

          <ProjectDescription 
          range={1} 
          text={projectList[0].text} 
          img={projectList[0].imgPath}
          alt={projectList[0].alt} 
          link={projectList[0].githubLink} 
          title={projectList[0].title} />
        </div>
      </div>

      {/* Social media icons contains redirection links */}
      <SocialIcon />
    </div>
  )
}

export default ProjectView