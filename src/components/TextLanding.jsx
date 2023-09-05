import IntroImg from '../assets/images/fake-image.jpg'

function TextLanding() {
  return (
    <div className="intro-landing">
      <div className='img-landing'>
        <img src={IntroImg} alt="Jean-image" className='intro-img' />
      </div>
      <div className="text-landing">
        <h1>Hello, i am JEAN Christophe MAHALOMBA</h1>
        <h2>Web developer</h2>
        <p>
          I am a passionate software engineer with a knack for turning innovative ideas 
          into reality through code. Let's connect and collaborate on exciting adventures 
          together!
        </p>
      </div>
    </div>
  )
}

export default TextLanding