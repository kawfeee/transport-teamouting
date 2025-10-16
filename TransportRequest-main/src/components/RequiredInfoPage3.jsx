import React from "react";
import "../styles/RequiredInfo.css";

import ClipboardIcon from '../assets/clipboard-new-24x24.svg';

import VisaFormSection from './VisaFormSection';
import TransportTypeSelector from './TransportTypeSelector';
import BookingDetailsPage3 from './BookingDetailsPage3';

const RequiredInfoPage3 = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info-rectangle ${className}`}> 
      <div className="required-info-header">
        <span className="required-info-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img className="clipboard-icon" src={ClipboardIcon} width={24} height={24} alt="clipboard" />
          <span style={{ fontSize: '20px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Required Information
            
          </span>
        </span>
      </div>
      <div className="worklet-details-card">
        <div className="form-sections-container">
          <TransportTypeSelector />
          <VisaFormSection />
          <BookingDetailsPage3 />
        </div>
      </div>
    </div>
  );
};

export default RequiredInfoPage3;