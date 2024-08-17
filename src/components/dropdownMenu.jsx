import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Assuming you’ll add styles here

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Menu
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <Link to="/about-me" onClick={() => setIsOpen(false)}>About Me</Link>
        <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
