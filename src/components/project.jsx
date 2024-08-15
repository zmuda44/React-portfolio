
function Project({ title, description, img, url }) {
  return (
    <div className="project">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default Project;

