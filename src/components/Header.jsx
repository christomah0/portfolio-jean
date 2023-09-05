import { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu.jsx'
import Logo from '../assets/images/logo.png'

function Header() {
  const [ showDefaultMenu, setShowDefaultMenu ] = useState(true)

  const showMainMenu = () => {
    if (window.innerWidth <= 768) {
      setShowDefaultMenu(!showDefaultMenu)
    }
  }

  // Loads function checker of screen's width
  useEffect(() => {
    showMainMenu()
  }, [])

  return (
    <div className='header-container'>
      <header id='home'>
        <a href="#home" style={{textDecoration: 'none'}}><img className='logo' src={Logo} alt="logo" /></a>
        {
          (showDefaultMenu) 
          ? (
            <nav className='nav-bar'>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </nav>
          ) 
          : <BurgerMenu />
        }
      </header>
    </div>
  )
}

export default Header