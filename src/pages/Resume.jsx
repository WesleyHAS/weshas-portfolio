// import React from "react";

// const Resume = () => {
//   const fileUrl =
//     "https://raw.githubusercontent.com/WesleyHAS/weshas-portfolio/main/src/assets/documents/resumeWesley.pdf";

//   return (
//     <div>
//       <p>Click the link below to download the file:</p>
//       <a href={fileUrl} download="resumeWesley.pdf">
//         Download Resume
//       </a>
//     </div>
//   );
// };

// export default Resume;

import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSequelize } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export default function Resume() {
  const fileUrl =
    "https://raw.githubusercontent.com/WesleyHAS/weshas-portfolio/main/src/assets/documents/resumeWesley.pdf";

  return (
    <div id="skills-container" className="container">
      <div className="row">
        {/* Frontend Proficiency Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Frontend Technologies</h5>
              <p className="card-text">
                <ul>
                  <li>
                    <FaHtml5 size={30} />
                    HTML
                  </li>
                  <li>
                    <FaCss3Alt size={30} />
                    CSS
                  </li>
                  <li>
                    <FaBootstrap  size={30} />
                    Bootstrap
                  </li>
                  <li>
                    <IoLogoJavascript size={25} />
                    Javascript + <DiJqueryLogo size={30} />
                    JQuery
                  </li>
                  <li>
                    <FaReact size={30} />
                    React
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Backend Proficiency Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Backend Technologies</h5>
              <p className="card-text">
                <ul>
                  <li>
                    <GrMysql size={30} /> MySQL
                  </li>
                  <li>
                    <SiSequelize size={30} /> Sequelize
                  </li>
                  <li>
                    <FaNodeJs size={30} />
                    NodeJS
                  </li>
                  <li>
                    <SiExpress size={30} />
                    ExpressJS
                  </li>
                  <li>
                    <SiMongodb size={30} />
                    MongoDB
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download Link */}
      <div className="mt-5">
        <p>Resume available for download here:</p>
        <a
          href={fileUrl}
          download="resumeWesley.pdf"
          className="btn btn-primary"
          id="download-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
