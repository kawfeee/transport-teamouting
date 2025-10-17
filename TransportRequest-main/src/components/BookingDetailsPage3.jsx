import React, { useState } from 'react';
import '../styles/BookingDetails.css';
import calcIcon from '../assets/calculator.svg';
import sendIcon from '../assets/sendQuote.svg';
import attachmentIcon from '../assets/attachment.svg';
import onlyPdf from '../assets/onlyPdf.svg';
import poliIcon from '../assets/poli.svg';
import clockIcon from '../assets/clock.svg';
import speedIcon from '../assets/speed.svg';
import arrowDown from '../assets/arrow-down.svg';
import uploadIcon from '../assets/upload.svg';
import cancelIcon from '../assets/cancel.svg';
import submitIcon from '../assets/submit.svg';
import infoIcon from '../assets/info.svg';
import CloseIcon from '../assets/close.svg';
import downloadIcon from '../assets/download.svg';
import grayTick from '../assets/gray-tick.svg';

const BookingDetailsPage3 = () => {
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [numberOfVehicles, setNumberOfVehicles] = useState('2');
  const [seatingCapacity, setSeatingCapacity] = useState('25');
  const [vehicleType, setVehicleType] = useState('AC');
  const [distance, setDistance] = useState('25 KM');
  const [endTime, setEndTime] = useState('12:00 PM');
  const [startTime, setStartTime] = useState('12:00 PM');
  const [extensionNo, setExtensionNo] = useState('2-03-719');
  const [mobileNo, setMobileNo] = useState('+91 7550142047');
  const [isApprovalChecked, setIsApprovalChecked] = useState(false);

  return (
    <div className="booking-details">
      <div className="booking-header">Booking Details</div>

      <div className="booking-container">
        <div className="booking-left">
          <div className="form-row">
            <div className="field">
              <label>Number of Vehicle</label>
              <div className="select-wrap">
                <select value={numberOfVehicles} onChange={e => setNumberOfVehicles(e.target.value)} className="custom-select">
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <img src={arrowDown} alt="arrow" className="select-arrow" />
              </div>
            </div>

            <div className="field">
              <label>Seating Capacity</label>
              <div className="select-wrap">
                <select value={seatingCapacity} onChange={e => setSeatingCapacity(e.target.value)} className="custom-select">
                  <option>25</option>
                  <option>30</option>
                  <option>40</option>
                </select>
                <img src={arrowDown} alt="arrow" className="select-arrow" />
              </div>
            </div>

            <div className="field">
              <label>Vehicle Type</label>
              <div className="select-wrap">
                <select value={vehicleType} onChange={e => setVehicleType(e.target.value)} className="custom-select">
                  <option>AC</option>
                  <option>Non-AC</option>
                </select>
                <img src={arrowDown} alt="arrow" className="select-arrow" />
              </div>
            </div>

            <div className="field">
              <label>One way Distance from Office to Venue</label>
              <div className="input-with-icon">
                <input value={distance} onChange={e => setDistance(e.target.value)} />
                <button className="icon-btn">
                  <img src={speedIcon} alt="speed" className="distance-icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="form-row form-row-with-actions">
            <div className="field">
              <label>End Time at Office</label>
              <div className="input-with-icon">
                <input value={endTime} onChange={e => setEndTime(e.target.value)} />
                <button className="icon-btn">
                  <img src={clockIcon} alt="clock" className="time-icon" />
                </button>
              </div>
            </div>

            <div className="field field-with-actions">
              <label>Start Time from Office</label>
              <div className="input-with-icon">
                <input value={startTime} onChange={e => setStartTime(e.target.value)} />
                <button className="icon-btn">
                  <img src={clockIcon} alt="clock" className="time-icon" />
                </button>
              </div>

              <div className="actions-row image-actions">
                <button className="img-btn" title="Calculate" onClick={() => { /* calculate handler */ }}>
                  <img src={calcIcon} alt="Calculate" />
                </button>
                <button className="img-btn primary" title="Send Quote" onClick={() => { /* send handler */ }}>
                  <img src={sendIcon} alt="Send Quote" />
                </button>
              </div>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-header">Contact Details</div>
            <div className="contact-row">
              <div className="contact-field">
                <label>Extension No <span className="required">*</span></label>
                <input value={extensionNo} onChange={e => setExtensionNo(e.target.value)} />
              </div>

              <div className="contact-field">
                <label>Mobile No <span className="required">*</span></label>
                <input value={mobileNo} onChange={e => setMobileNo(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="attachment-section">
            <div className="attachment-header">
              <img src={attachmentIcon} alt="Attachment" className="attachment-icon" />
              <div className="attachment-title">Attachment</div>
            </div>
            <div className="pdf-wrapper">
              <img src={onlyPdf} alt="PDF" className="only-pdf-image" />
              <div className="pdf-overlay">
                <div className="pdf-text-content">
                  <div className="pdf-filename">Quote details.pdf</div>
                  <div className="pdf-metadata">11 Sep, 2023  12:24pm • 13MB</div>
                </div>
                <button className="pdf-download-icon-btn">
                  <img src={downloadIcon} alt="Download" className="download-svg-icon" />
                </button>
              </div>
            </div>
            <div className="approval-row">
              <label className="approval-label">
                <div className="custom-checkbox" onClick={() => setIsApprovalChecked(!isApprovalChecked)}>
                  {isApprovalChecked && <img src={grayTick} alt="Checked" className="checkbox-tick" />}
                </div>
                <span className="approval-text">I Confirm My Single Approval</span>
              </label>
            </div>
          </div>
          {/* View Policies link/button aligned left-most below approval */}
          <div className="view-policies">
            <img src={poliIcon} alt="policies" className="view-policies-icon" />
            <button className="view-policies-btn">View Policies</button>
          </div>
        </div>

        <div className="booking-right">
          <div className="quote-card">
            <div className="quote-header">
              Quote Details 
              <img 
                src={infoIcon} 
                alt="info" 
                className="info-icon" 
                onClick={() => setIsInfoPopupOpen(true)}
              />
              
              {/* Info Popup */}
              {isInfoPopupOpen && (
                <>
                  <div className="info-popup-overlay" onClick={() => setIsInfoPopupOpen(false)}></div>
                  <div className="info-popup-container">
                    <div className="info-popup-header">
                      <h4 className="info-popup-title">Note:</h4>
                      <button className="info-popup-close-btn" onClick={() => setIsInfoPopupOpen(false)}>
                        <img src={CloseIcon} alt="close" width={20} height={20} />
                      </button>
                    </div>
                    <div className="info-popup-content">
                      <ul className="info-popup-list">
                        <li>
                          No show cost of 8/80 kms- as min billing will be applied, Toll, Parking and GST will be added based on the actual usage
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
            <table className="quote-table">
              <thead>
                <tr>
                  <th className='slab-cost'>Slab Cost</th>
                  <th>Rate</th>
                  <th>Usage</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kms</td>
                  <td>16200.00</td>
                  <td>2</td>
                  <td>32400</td>
                </tr>
                <tr>
                  <td>Extra Kms (As per actual)</td>
                  <td>50.00</td>
                  <td>380*2</td>
                  <td>38000</td>
                </tr>
                <tr>
                  <td>Driver Night Bata (After 10PM)</td>
                  <td>800</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Rate for 120 kms + 380*2 Extra Kms + Driver Night Bata</td>
                  <td></td>
                  <td></td>
                  <td>70400</td>
                </tr>
                <tr>
                  <td>Toll, Parking, Tax Extra (As per actual)</td>
                  <td></td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr className="total-row">
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td>70400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPage3;