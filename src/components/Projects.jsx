// import { projectList } from "../utils/projectList";
// import React, { useState } from "react";

// export default function Projects() {
//   const [projects] = useState(projectList);
//   return (
//     <figure className="right-container-bottom-img">
//       <a
//         className="image-container-link"
//         href={projects.projectUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           src={projects.imageUrl}
//           className="img-2"
//           alt={projects.projectName}
//         />
//         <div className="bottom-image-captions">
//           <p>{projects.projectName}</p>
//           <p className="captions-bottom-description">
//             {projects.projectDescription}
//           </p>
//         </div>
//       </a>
//     </figure>
//   );
// }

import React, { useState } from "react";
import { projectList } from "../utils/projectList";

export default function Projects() {
  const [projects] = useState(projectList);

  return (
    <div>
      {projects.map((project, index) => (
        <figure key={index} className="right-container-bottom-img">
          <a
            className="image-container-link"
            href={project.projectUrl}
            target="_blank"
          >
            <img
              src={project.imageUrl}
              className="img-2"
              alt={project.projectName}
            />
            <div className="bottom-image-captions">
              <p>{project.projectName}</p>
              <p className="captions-bottom-description">
                {project.projectDescription}
              </p>
            </div>
          </a>
        </figure>
      ))}
    </div>
  );
}
