// import logo from './logo.svg';
// import './App.css';
import Projects from './db/projects'

function Card (props) {
  console.log(props)
  return (
  <div classname="card">
  <h1>{props.title}</h1>
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

{/* <div className='cards-container'>
<Card 
  title = {Projects[0].title}
  description = {Projects[1].title}
  img = {Projects[2].title}
  />
</div> */}

{/* <>
<h1>{props.title}</h1>
<h1>{props.description}</h1>
<h1>{props.img}</h1>

</> */}