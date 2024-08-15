import Project from '../components/project'
import projects from '../db/projects'
console.log(projects)

function Portfolio() {
  return (
    <section id='portfolio'>

      <div className='top'>
          <div className='left'>
            <h2>Welcome to my portfolio</h2>            
          </div>
          <div className='right'>
            <div id="adv-header">
              <p>Full stack</p>
              <p>Desktop and mobile design</p>
              <p>Graphic design</p>
            </div>          
          </div>        
      </div>
      <h2>See below for my portfolio of projects that I have designed</h2>

              
      <div className="bottom">
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            url={project.url}
          />
        ))}
      </div>
    
    </section>



  );
}

export default Portfolio;