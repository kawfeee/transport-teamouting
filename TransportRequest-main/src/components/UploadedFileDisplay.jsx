import React from 'react';
import '../styles/UploadedFileDisplay.css';
import onlyPdfSvg from '../assets/onlyPdf.svg';

const UploadedFileDisplay = ({ 
  fileName = 'Quote details.pdf',
  fileDate = '11 Sep, 2023',
  fileTime = '12:24pm',
  fileSize = '13MB'
}) => {
  return (
    <div className="uploaded-file-display-wrapper">
      <img src={onlyPdfSvg} alt="PDF Document" className="only-pdf-base" />
      <div className="file-text-overlay">
        <div className="file-name-text">{fileName}</div>
        <div className="file-meta-text">{fileDate} {fileTime} • {fileSize}</div>
      </div>
    </div>
  );
};

export default UploadedFileDisplay;