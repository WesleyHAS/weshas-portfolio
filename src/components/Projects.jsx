// import React, { useState, useEffect } from "react";
// import { projectList } from "../utils/projectList";

// export default function Projects() {
//   const [openCardIndex, setOpenCardIndex] = useState(0);

//   useEffect(() => {
//     // Set the first card to be open when the component mounts
//     setOpenCardIndex(0);
//   }, []); // Empty dependency array ensures that this effect runs only once on mount

//   const handleCardClick = (index) => {
//     setOpenCardIndex(openCardIndex === index ? null : index);
//   };

//   return (
//     <>
//       <div className="wrapper-container">
//         {projectList.map((project, index) => (
//           <div key={index} className="wrapper">
//             <div className="card-container">
//               <input
//                 type="checkbox"
//                 id={`project-${index}`}
//                 checked={openCardIndex === index}
//                 onChange={() => handleCardClick(index)}
//               />
//               <label
//                 htmlFor={`project-${index}`}
//                 className="project-card"
//                 style={{ backgroundImage: `url(${project.imageUrl})` }}
//               >
//                 <div className="card-row">
//                   <div className="card-icon">{index + 1}</div>
//                   <div className="card-description">
//                     <h4>{project.projectName}</h4>
//                     <p>Techs: {project.projectDescription}</p>
//                     <a href={project.projectGithub} target="_blank">
//                       Github
//                     </a>
//                   </div>
//                 </div>
//               </label>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { projectList } from "../utils/projectList";
import { teamProjectList } from "../utils/teamProjectList";
import { nonProjectList } from "../utils/nonProjects";
import { FaGithubSquare } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

export default function Projects() {
  const [projects] = useState(projectList);
  const [teamProjects] = useState(teamProjectList);
  const [nonProjects] = useState(nonProjectList);

  return (
    <>
      <div id="team-projects-container" className="container">
        <h2 className="projects-tittle">Collaborative Group Projects</h2>
        <div className="row">
          {teamProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  id="project-images"
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.projectName}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-text">
                    Techs: {project.projectDescription}
                  </p>
                  <a
                    href={project.projectGithub}
                    target="_blank"
                    className="card-text"
                    id="card-anchor"
                  >
                    <FaGithubSquare size={30} className="github-icon" />
                    Github Repo
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    className="card-text"
                    id="card-anchor"
                  >
                    <GrDeploy size={25} className="deploy-icon" />
                    Deployed App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="deployed-apps-container" className="container">
        <h2 className="projects-tittle">Deployed Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  id="project-images"
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.projectName}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-text">
                    Techs: {project.projectDescription}
                  </p>
                  <a
                    href={project.projectGithub}
                    target="_blank"
                    className="card-text"
                    id="card-anchor"
                  >
                    <FaGithubSquare size={30} className="github-icon" />
                    Github Repo
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    className="card-text"
                    id="card-anchor"
                  >
                    <GrDeploy size={25} className="deploy-icon" />
                    Deployed App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="deployed-apps-container" className="container">
        <h2 className="projects-tittle">Non-Deployed Projects</h2>
        <div className="row">
          {nonProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  id="project-images"
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.projectName}
                />

                <div className="card-body">
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-text">
                    Techs: {project.projectDescription}
                  </p>
                  <a
                    href={project.projectGithub}
                    target="_blank"
                    className="card-text"
                    id="card-anchor"
                  >
                    <FaGithubSquare size={30} className="github-icon" />
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
