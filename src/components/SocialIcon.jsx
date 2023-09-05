import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'

function SocialIcon() {
  return (
    <div className='social-media-icons'>
      <a href="https://facebook.com/Mahalomba" target="_blank"><FaFacebook size={24} color='#4267b2' className='icons' /></a>
      <a href="https://github.com/christomah0" target="_blank"><FaGithub size={24} color='#171515' className='icons' /></a>
      <a href="" target="_blank"><FaLinkedin size={24} color='#0072b1' className='icons' /></a>
    </div>
  )
}

export default SocialIcon