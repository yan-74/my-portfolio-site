import projects from "../data/projects";

export default function ProjectList() {
  return (
    <div className="project-section">
      {projects.map((project, index) => (
        <div key={index} className="project">
          {project.type === "video" ? (
            <div className="project-video">
              <iframe
                width="320"
                height="240"
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
          <a href={project.link} target="_blank">View on GitLab</a>
        </div>
      ))}
    </div>
  );
}