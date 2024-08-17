import { useState } from 'react';
import { Link } from 'react-router-dom';


// function HamburgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link to="/about-me" onClick={toggleMenu}>About Me</Link>
        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Me</Link>
        <Link to="/resume" onClick={toggleMenu}>Resume</Link>
      </div>
</>
  )
}

export default HamburgerMenu;
