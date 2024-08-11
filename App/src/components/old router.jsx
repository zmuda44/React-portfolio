import Navigation from './navigation'
import AboutMe from './about-me'
import Portfolio from './portfolio'
import Contact from './contact'
import Resume from './resume'

const [current, setCurrentPage] = useState('About-me')

if (currentPage === 'Portfolio') {
  return <Portfolio />}
}
if (currentPage === 'Contact') {
  return <Contact />
}
if (currentPage === 'Resume') {
  return <Resume />
}
return <AboutMe />


function Content() {
  return (
    <main>
      <div className='container'>
      {renderPage()}        
      </div>
    </main>
  );
}

export default Content;