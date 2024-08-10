import Projects from '../db/projects'


function Project (props) {
  return (
  <div className="card">
  <h1><a href='{props.url}'>{props.title}</a></h1>
  <p>{props.description}</p>
  <img src={props.img} />
  </div>
 ) 
}

function createProject(project) {  
  return <Project
    key = {project.id}
    title={project.title}
    description={project.description}
    img={project.img}
  />
}

function Project(props) {

  return (
    <div className="cards-container">
      {Projects.map(project)}
    </div>
  );
}

export default Cards;

