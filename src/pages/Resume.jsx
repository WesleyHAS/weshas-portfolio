// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import MyDocument from "../assets/documents/resumeWesley.pdf";

// export default function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   function onDocumentSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div style={{ width: "700px", border: "3px solid gray" }}>
//         <Document file={MyDocument} onLoadSuccess={onDocumentSuccess}>
//           {Array(numPages)
//             .fill()
//             .map((_, i) => (
//               <Page pageNumber={i + 1}></Page>
//             ))}
//         </Document>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "700px", border: "3px solid gray" }}>
        {!numPages && <p>Loading...</p>}
        {numPages && (
          <Document
            file="https://example.com/path/to/resumeWesley.pdf"
            onLoadSuccess={onDocumentSuccess}
          >
            {Array(numPages)
              .fill()
              .map((_, i) => (
                <Page key={i + 1} pageNumber={i + 1} />
              ))}
          </Document>
        )}
      </div>
    </div>
  );
}
