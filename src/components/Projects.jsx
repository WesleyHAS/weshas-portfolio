// import React, { useState } from "react";
// import { projectList } from "../utils/projectList";

// export default function Projects() {
//   const [projects] = useState(projectList);

//   return (
//     <div>
//       {projects.map((project, index) => (
//         <figure key={index} className="right-container-bottom-img">
//           <a
//             className="image-container-link"
//             href={project.projectUrl}
//             target="_blank"
//           >
//             <img
//               src={project.imageUrl}
//               className="img-2"
//               alt={project.projectName}
//             />
//             <div className="bottom-image-captions">
//               <p>{project.projectName}</p>
//               <p className="captions-bottom-description">
//                 {project.projectDescription}
//               </p>
//             </div>
//           </a>
//         </figure>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";
import { projectList } from "../utils/projectList";

export default function Projects() {
  const [projects] = useState(projectList);

  return (
    <div className="container">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
