// const [activeSection, setActiveSection] = useState('home');

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


function Navigation() {
  return (
    <div className="navigation">
        <ul className='nav'>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#portfolio"></a>Portfolio</li>
          <li><a href="#contact"></a>Contact</li>
          <li><a href="#resume"></a>Resume</li>
   
        </ul>
    </div>

  );
}

export default Navigation;