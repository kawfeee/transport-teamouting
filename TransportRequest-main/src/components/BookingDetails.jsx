import React, { useState } from 'react';
import '../styles/BookingDetails.css';
import UploadComponent from './UploadComponent';
import calcIcon from '../assets/calculator.svg';
import sendIcon from '../assets/sendQuote.svg';
import attachmentIcon from '../assets/attachment.svg';
import poliIcon from '../assets/poli.svg';
import clockIcon from '../assets/clock.svg';
import speedIcon from '../assets/speed.svg';
import arrowDown from '../assets/arrow-down.svg';
import uploadIcon from '../assets/upload.svg';
import cancelIcon from '../assets/cancel.svg';
import submitIcon from '../assets/submit.svg';
import infoIcon from '../assets/info.svg';

const BookingDetails = () => {
  const [numberOfVehicles, setNumberOfVehicles] = useState('2');
  const [seatingCapacity, setSeatingCapacity] = useState('25');
  const [vehicleType, setVehicleType] = useState('AC');
  const [distance, setDistance] = useState('25 KM');
  const [endTime, setEndTime] = useState('12:00 PM');
  const [startTime, setStartTime] = useState('12:00 PM');
  const [extensionNo, setExtensionNo] = useState('2-03-719');
  const [mobileNo, setMobileNo] = useState('+91 7550142047');
  const [comment, setComment] = useState('');

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
          {/* Contact Details section - placed immediately under actions-row and aligned to the left-most side */}
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
          {/* Attachment section placed below Contact Details */}
          <div className="attachment-section">
            <div className="attachment-header">
              <img src={attachmentIcon} alt="Attachment" className="attachment-icon" />
              <div className="attachment-title">Attachment</div>
            </div>

            <UploadComponent 
              fileName="Departure flight ticket.pdf"
              fileMeta="11 Sep, 2023 • 12:24pm • 13MB"
              onFileSelect={() => { /* file select handler */ }}
              onFileDelete={() => { /* file delete handler */ }}
            />

          </div>
          
          {/* Approval checkbox below attachment */}
          <div className="approval-row">
            <label className="approval-label">
              <input type="checkbox" className="approval-checkbox" />
              <span>I Confirm My Single Approval</span>
            </label>
          </div>

          {/* Comment area with Cancel and Submit buttons */}
          <div className="comment-section">
            <label className="comment-label">Comment (Max 500 Chars)</label>
            <textarea
              className="comment-input"
              value={comment}
              maxLength={500}
              onChange={e => setComment(e.target.value)}
              placeholder="xxx-xx-xxx-xx-xxx"
            />

            <div className="comment-actions">
              <div className="btn cancel" onClick={() => setComment('')}>
                <img src={cancelIcon} alt="Cancel" className="btn-icon" />
              </div>
              <div className="btn submit" onClick={() => { /* submit handler */ alert('Submitted: ' + comment); }}>
                <img src={submitIcon} alt="Submit" className="btn-icon" />
              </div>
            </div>
          </div>
          {/* View Policies link/button aligned left-most below comment */}
          <div className="view-policies">
            <img src={poliIcon} alt="policies" className="view-policies-icon" />
            <button className="view-policies-btn">View Policies</button>
          </div>
        </div>

        <div className="booking-right">
          <div className="quote-card">
            <div className="quote-header">Quote Details <img src={infoIcon} alt="info" className="info-icon" /></div>
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

export default BookingDetails;
