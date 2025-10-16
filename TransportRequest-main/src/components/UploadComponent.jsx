import React from 'react';
import '../styles/UploadComponent.css';
import uploadComponentSvg from '../assets/upload_component.svg';
import uploadCircleSvg from '../assets/upload-circle.svg';
import attachSvg from '../assets/attach.svg';
import deleteSvg from '../assets/delete.svg';

const UploadComponent = ({ 
  fileName = 'Departure flight ticket.pdf',
  fileMeta = '11 Sep, 2023 • 12:24pm • 13MB',
  onFileSelect,
  onFileDelete 
}) => {
  return (
    <div className="upload-component-wrapper">
      <img src={uploadComponentSvg} alt="upload component" className="upload-component-base" />
      
      {/* Left Box Content - Overlay on SVG */}
      <div className="upload-left-content">
        <img src={uploadCircleSvg} alt="upload" className="upload-circle-icon" />
        <div className="upload-text-content">
          <div className="upload-main-text">Choose a File</div>
          <div className="upload-sub-text">PDF format • Max. 3MB</div>
        </div>
        <img 
          src={attachSvg} 
          alt="attach" 
          className="attach-icon-btn"
          onClick={onFileSelect}
        />
      </div>

      {/* Right Box Content - Uploaded File Details Overlay */}
      <div className="upload-right-content">
        <div className="file-details-text">
          <div className="file-name-text">{fileName}</div>
          <div className="file-meta">{fileMeta}</div>
        </div>
        <img 
          src={deleteSvg} 
          alt="delete" 
          className="delete-icon-btn"
          onClick={onFileDelete}
        />
      </div>
    </div>
  );
};

export default UploadComponent;
