
function Project({ title, description, img, url, repo }) {
  return (
    <div className="project">
    <div className="img-container">
      <img src={img} alt={title} />
    </div>      
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
    <a href={repo} target="_blank" rel="noopener noreferrer">View Repo</a>
    </div>
  );
}

export default Project;

