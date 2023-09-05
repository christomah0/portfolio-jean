import { useState } from "react"
import { FaBars, FaXmark } from 'react-icons/fa6'

function BurgerMenu() {
  const [ open, setOpen ] = useState(false)
  const clickHandler = () => { setOpen(!open) }

  return (
    <div className="burger-menu">
      <button onClick={clickHandler}>
        <FaBars size={24} color='#ffffff' />
      </button>
      {open && (
        <div className="burger-menu-route">
          <div className="icon-close-container"><FaXmark className="icon-close" size={24} color="#ccc" onClick={clickHandler} /></div>
          <nav>
            <a href="#home" onClick={clickHandler}>Home</a>
            <a href="#projects" onClick={clickHandler}>Projects</a>
            <a href="#contact" onClick={clickHandler}>Contact</a>
            <a href="#about" onClick={clickHandler}>About</a>
          </nav>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu