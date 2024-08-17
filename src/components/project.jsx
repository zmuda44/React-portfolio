
function Project({ title, description, img, url, repo }) {
  return (
    <div className="project">
    <div className="img-container">
      <img src={img} alt={title} />
    </div>
    <div className="project-title">
      <h3>{title}</h3>

    </div>      

    <div className="project-description">
      <p>{description}</p>
    </div>  
    <div className="links">
      <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
      <a href={repo} target="_blank" rel="noopener noreferrer">View Repo</a>
    </div>
  </div>
  );
}

export default Project;

