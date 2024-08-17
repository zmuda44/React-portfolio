import Project from '../components/project'
import projects from '../db/projects'
console.log(projects)

function Portfolio() {
  return (
    <section id='portfolio'>
        <div className="container">
          <h1 className="section-title">Welcome to my portfolio</h1>  
          <div className="section-body">
            {projects.map(project => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                img={project.img}
                url={project.url}
                repo={project.repo}
              />
            ))}
          </div>
        </div>  
    </section>



  );
}

export default Portfolio;