import React, { useState } from "react";
import "../styles/RequiredInfo.css";

import ClipboardIcon from '../assets/clipboard-new-24x24.svg';
import NoteIcon from '../assets/note.svg';
import CloseIcon from '../assets/close.svg';

import VisaFormSection from './VisaFormSection';
import TransportTypeSelector from './TransportTypeSelector';
import BookingDetailsPage2 from './BookingDetailsPage2';

const RequiredInfoPage2 = ({ onClick, className = "" }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={`required-info-rectangle page-2-container ${className}`}> 
      <div className="required-info-header">
        <span className="required-info-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img className="clipboard-icon" src={ClipboardIcon} width={24} height={24} alt="clipboard" />
          <span style={{ fontSize: '20px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Required Information
            
          </span>
        </span>
      </div>
      <div className="worklet-details-card">
        <img 
          src={NoteIcon} 
          alt="note" 
          className="worklet-note-icon" 
          onClick={() => setIsPopupOpen(true)}
        />
        <div className="form-sections-container">
          <TransportTypeSelector pageNumber={2} />
          <VisaFormSection />
          <BookingDetailsPage2 />
        </div>
      </div>

      {/* Note Popup Modal */}
      {isPopupOpen && (
        <>
          <div className="note-popup-overlay" onClick={() => setIsPopupOpen(false)}></div>
          <div className="note-popup-container">
            <div className="note-popup-header">
              <h3 className="note-popup-title">Note Before Booking:</h3>
              <button className="note-popup-close-btn" onClick={() => setIsPopupOpen(false)}>
                <img src={CloseIcon} alt="close" width={20} height={20} />
              </button>
            </div>
            <div className="note-popup-content">
              <ul className="note-popup-list">
                <li>
                  To confirm the bookings, raise a My Single approval with above quote as per below path. (Approval can be a combined My Single for overall cost).
                </li>
                <li>
                  Approval Path: - Initiator ---- Reporting Manager --- Part Lead --- Part Head --- Budget Team (Sathish Kumar B) --- CFO.
                </li>
                <li>
                  Post approval online request with My Single should be submitted 3days in advance from the required date.
                </li>
                <li>
                  Bus seating is subject to availability, if not alternate seating will be provided and billed accordingly.
                </li>
                <li>
                  <div className="note-nested-item">
                    User should make a note of Opening KM & Closing KM and at the end user should sign on the Trip Sheet.
                  </div>
                </li>
                <li>
                  On receipt of invoice user should raise the bills for payment on GERP.
                </li>
                <li>
                  GST extra as applicable.
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RequiredInfoPage2;