import React from "react";

const Resume = () => {
  const fileUrl =
    "https://raw.githubusercontent.com/WesleyHAS/weshas-portfolio/main/src/assets/documents/resumeWesley.pdf";

  return (
    <div>
      <p>Click the link below to download the file:</p>
      <a href={fileUrl} download="resumeWesley.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
