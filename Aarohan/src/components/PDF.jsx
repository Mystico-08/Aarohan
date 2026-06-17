import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'PDF.css'

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF = () => {
  const [numPages, setNumPages] = useState();

  return (
    <div className="pdf-container">
      <Document
        file={`${import.meta.env.BASE_URL}Aarohan_SQP_9th.pdf`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(
          new Array(numPages),
          (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              width={900}
            />
          )
        )}
      </Document>
    </div>
  );
};

export default PDF;