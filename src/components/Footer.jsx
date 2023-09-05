import { FaHeart } from "react-icons/fa6"


function Footer() {
  return (
    <div className="footer-container">
      <footer id="contact">
        <div className="about-me-part">
          <h4>ABOUT ME</h4>
          <p>
            I am a software engineer. Working around technology is part of my 
            passion that motivate me to achieve interesting project personally 
            and with all my collaborators. I have experience in <code>HTML5/CSS3, React.js, tailwindcss, 
              FastAPI framework.</code> And i am always looking for challenges, so let's get in touch for 
              growing your project.
          </p>
        </div>
        <div className="address-part">
          <h4>ADDRESS</h4>
          <p>
            Actually, i am located in 601 Toliara 1 - Madagascar
          </p>
        </div>
        <div className="contact-part">
          <h4>CONTACT</h4>
        </div>
      </footer>

      <div className="appreciation">
        <span>Made with</span>
        <FaHeart size={16} color="red" />
        <span>using React.js</span>
      </div>
    </div>
  )
}

export default Footer