import React, { useState } from "react";
import { projectList } from "../utils/projectList";

export default function Projects() {
  const [projects] = useState(projectList);

  return (
    <div id="projects-container" className="container">
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.projectName}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.projectName}</h5>
                <p className="card-text">Techs: {project.projectDescription}</p>
                <a
                  href={project.projectGithub}
                  target="_blank"
                  className="card-text"
                  id="card-anchor"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
