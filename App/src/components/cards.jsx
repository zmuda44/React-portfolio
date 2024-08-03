import Projects from '../db/projects'


function Card (props) {
  return (
  <div className="card">
  <h1><a href='{props.url}'>{props.title}</a></h1>
  <p>{props.description}</p>
  <img src={props.img} />
  </div>
 ) 
}

function createCard (project) {  
  return <Card
    key = {project.id}
    title={project.title}
    description={project.description}
    img={project.img}
  />
}

function Cards(props) {

  return (
    <div className="cards-container">
      {Projects.map(createCard)}
    </div>
  );
}

export default Cards;

