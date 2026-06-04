import { useState } from "react";
import projects from "../data/projects";
import ImageLightbox from "./ImageLightbox";

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="project-section">
        {projects.map((project, index) => (
          <div key={index} className="project">
            {project.type === "video" ? (
              <div
                className="project-video project-video-clickable"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Open ${project.title} video`}
              >
                <iframe
                  width="500"
                  height="240"
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <button className="project-image project-image-button" onClick={() => setSelectedProject(project)}>
                <img
                  src={Array.isArray(project.images) && project.images.length ? project.images[0] : project.image}
                  alt={project.title}
                />
              </button>
            )}
            <h3>
              {project.title}
            </h3>
            <p>{project.short_description}</p>
            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            {project.deployment && (
              <>
                <span> | </span>
                <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                  View Site Deployment
                </a>
              </>
            )}
          </div>
        ))}
      </div>

      <ImageLightbox
        isOpen={Boolean(selectedProject)}
        title={selectedProject?.title}
        image={selectedProject?.image}
        images={selectedProject?.images}
        video={selectedProject?.video}
        description={selectedProject?.description}
        footer={selectedProject ? `Tech: ${selectedProject.tech.join(", ")}` : ""}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}