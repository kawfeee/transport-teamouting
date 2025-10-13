import React, { useState } from 'react';
import '../styles/BookingDetails.css';
import calcIcon from '../assets/calculator.svg';
import sendIcon from '../assets/sendQuote.svg';
import attachmentIcon from '../assets/attachment.svg';
import poliIcon from '../assets/poli.svg';

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
                <select value={numberOfVehicles} onChange={e => setNumberOfVehicles(e.target.value)}>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Seating Capacity</label>
              <div className="select-wrap">
                <select value={seatingCapacity} onChange={e => setSeatingCapacity(e.target.value)}>
                  <option>25</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Vehicle Type</label>
              <div className="select-wrap">
                <select value={vehicleType} onChange={e => setVehicleType(e.target.value)}>
                  <option>AC</option>
                  <option>Non-AC</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>One way Distance from Office to Venue</label>
              <div className="input-with-icon">
                <input value={distance} onChange={e => setDistance(e.target.value)} />
                <button className="icon-btn">📍</button>
              </div>
            </div>
          </div>

          <div className="form-row form-row-with-actions">
            <div className="field">
              <label>End Time at Office</label>
              <div className="input-with-icon">
                <input value={endTime} onChange={e => setEndTime(e.target.value)} />
                <button className="icon-btn">⏱️</button>
              </div>
            </div>

            <div className="field field-with-actions">
              <label>Start Time from Office</label>
              <div className="input-with-icon">
                <input value={startTime} onChange={e => setStartTime(e.target.value)} />
                <button className="icon-btn">⏱️</button>
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

            <div className="attachment-drop">
              <div className="attachment-left">
                <div className="upload-left">
                  <div className="choose">Choose a File</div>
                  <div className="meta">PDF format • Max. 3MB</div>
                </div>
                <button className="attach-btn">Attach</button>
              </div>

              <div className="attachment-right">
                <div className="attached-file">
                  <div className="file-label">Quote details.pdf</div>
                  <div className="file-meta">11 Sep, 2023 • 13MB</div>
                  <button className="download-btn">⬇︎</button>
                </div>
              </div>
            </div>
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
              placeholder=""
            />

            <div className="comment-actions">
              <button className="btn cancel" onClick={() => setComment('')}>Cancel</button>
              <button className="btn submit" onClick={() => { /* submit handler */ alert('Submitted: ' + comment); }}>Submit</button>
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
            <div className="quote-header">Quote Details <span className="info">i</span></div>
            <div className="quote-table">
              <div className="row header"><div>Slab Cost</div><div>Rate</div><div>Usage</div><div>Total</div></div>
              <div className="rows-wrapper">
                <div className="row"><div>Kms</div><div>16200.00</div><div>2</div><div>32400</div></div>
                <div className="row"><div>Extra Kms (As per actual)</div><div>50.00</div><div>380*2</div><div>38000</div></div>
                <div className="row"><div>Driver Night Bata (After 10PM)</div><div>800</div><div>0</div><div>0</div></div>
                <div className="row"><div>Rate for 120 kms + 380*2 Extra Kms + Driver Night Bata</div><div>70400</div><div></div><div></div></div>
                <div className="row"><div>Toll, Parking, Tax Extra (As per actual)</div><div>0</div><div></div><div></div></div>
                <div className="row total"><div>Total</div><div></div><div></div><div>70400</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
