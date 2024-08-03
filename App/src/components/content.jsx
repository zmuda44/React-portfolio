import Navigation from './navigation'
import AboutMe from './about-me'
import Portfolio from './portfolio'
import Contact from './contact'
import Resume from './resume'


function Content() {
  return (
    <main>
    <div className='container'>
        <p>Welcome to my online portfolio</p>
        <AboutMe />
        {/* <Portfolio />
        <Contact />
        <Resume /> */}

    </div>
    </main>
  );
}

export default Content;