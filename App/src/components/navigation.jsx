// const [activeSection, setActiveSection] = useState('home');

import { Link } from 'react-router-dom';


// const renderSection = () => {
//   switch (activeSection) {
//     case 'home':
//       return <Home />;
//     case 'about':
//       return <About />;
//     case 'contact':
//       return <Contact />;
//     default:
//       return <Home />;
//   }
// };

function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}


function Navigation() {
  return (
    <Navbar
      links={[
        <Link key={1} className="" to="/about-me">
          About Me
        </Link>,
        <Link key={2} className="" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="" to="/contact">
          Contact Me
        </Link>,
        <Link key={4} className="" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

export default Navigation;