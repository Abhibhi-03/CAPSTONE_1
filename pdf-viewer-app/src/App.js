import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer } from '@react-pdf-viewer/core';

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const uploadPdf = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setPdfUrl(url);
  };

  const defaultPlugin = defaultLayoutPlugin();

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={uploadPdf} />
      {pdfUrl && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfUrl} plugins={[defaultPlugin]} />
        </Worker>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>PDF Viewer</h1>
      <PdfViewer />
    </div>
  );
}

export default App;
