import React, { useState, useRef } from 'react';
import '../styles/LocationDetails.css';
import arrowDown from '../assets/arrow-down.svg';
import calendarIcon from '../assets/calendar.svg';
import checkIcon from '../assets/check.svg';
import checkGrayIcon from '../assets/check-gray.svg';
import uncheckIcon from '../assets/uncheck.svg';

const TransportTypeSelector = ({ pageNumber = 1 }) => {
  // Use check.svg for page 1, check-gray.svg for pages 2 and 3
  const selectedIcon = pageNumber === 1 ? checkIcon : checkGrayIcon;
  const [reportingBuilding, setReportingBuilding] = useState('Phoenix');
  const [date, setDate] = useState('15-Oct-2025');
  const [venue, setVenue] = useState('');
  const [buildingDropdownOpen, setBuildingDropdownOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('IoT_Advanced_Features_(SRI_B)_Y2025');

  const buildings = ['Phoenix', 'Building A', 'Building B', 'Building C'];
  const projects = [
    'IoT_Advanced_Features_(SRI_B)_Y2025',
    'Project B',
    'Project C',
    'Project D'
  ];

  const [selectedCabType, setSelectedCabType] = useState('teamOuting');

  const handleCabTypeChange = (type) => {
    setSelectedCabType(type);
  };

  return (
    <div className="transport-type-container">
      {/* Cab Type Section */}
      <div className="transport-type-left">
        <div className="cab-type-heading">Cab Type</div>
        <div className="radio-group" role="radiogroup" aria-label="Cab Type">
          <label className="radio-label">
            <input 
              type="radio" 
              name="cabType" 
              checked={selectedCabType === 'teamOuting'} 
              onChange={() => handleCabTypeChange('teamOuting')} 
              className="radio-input" 
            />
            <img src={selectedIcon} alt="" className="radio-icon checked" />
            <img src={uncheckIcon} alt="" className="radio-icon unchecked" />
            <span className={`radio-text ${selectedCabType === 'teamOuting' ? 'checked' : ''}`}>Team Outing</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="cabType" 
              checked={selectedCabType === 'teamLunch'} 
              onChange={() => handleCabTypeChange('teamLunch')} 
              className="radio-input" 
            />
            <img src={selectedIcon} alt="" className="radio-icon checked" />
            <img src={uncheckIcon} alt="" className="radio-icon unchecked" />
            <span className={`radio-text ${selectedCabType === 'teamLunch' ? 'checked' : ''}`}>Team Lunch</span>
          </label>
        </div>
      </div>

      {/* Project Section */}
      <div className="transport-type-right">
        <div className="project-details-heading">Project Details</div>
        <div className="project-label">Project</div>
        <div className="field-dropdown-container">
          <button
            className="project-select"
            onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
            type="button"
            aria-label="Project select"
          >
            {selectedProject}
            <img src={arrowDown} alt="arrow" className="dropdown-arrow" />
          </button>
          {projectDropdownOpen && (
            <div className="dropdown-menu">
              {projects.map((project) => (
                <div
                  key={project}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedProject(project);
                    setProjectDropdownOpen(false);
                  }}
                >
                  {project}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Location Details Section */}
      <div className="location-section">
        <div className="location-heading">Location Details</div>
        <div className="location-grid">
          {/* Reporting Building Dropdown */}
          <div className="location-field">
            <label className="field-label">Reporting Building</label>
            <div className="field-dropdown-container">
              <button
                className="field-dropdown-button"
                onClick={() => setBuildingDropdownOpen(!buildingDropdownOpen)}
                type="button"
              >
                {reportingBuilding}
                <img src={arrowDown} alt="arrow" className="dropdown-arrow" />
              </button>
              {buildingDropdownOpen && (
                <div className="dropdown-menu">
                  {buildings.map((building) => (
                    <div
                      key={building}
                      className="dropdown-item"
                      onClick={() => {
                        setReportingBuilding(building);
                        setBuildingDropdownOpen(false);
                      }}
                    >
                      {building}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Required Date Field */}
          <div className="location-field">
            <label className="field-label">Required Date</label>
              <div className="date-field-container">
                {/* hidden native date input to open browser date picker */}
                <input
                  ref={(el) => { /* placeholder for ref set in effect below if needed */ }}
                  type="date"
                  onChange={(e) => {
                    if (!e.target.value) return;
                    const selectedDate = new Date(e.target.value);
                    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    }).replace(/ /g, '-');
                    setDate(formattedDate);
                  }}
                  className="date-field-input-hidden"
                  aria-label="Select date"
                />

                <div className="date-field-display" onClick={(ev) => {
                  // when user clicks the display or calendar icon, trigger the native date input click
                  const native = ev.currentTarget.parentNode.querySelector('.date-field-input-hidden');
                  if (native) native.showPicker ? native.showPicker() : native.click();
                }}>
                  <span className="date-field-text">{date}</span>
                  <img src={calendarIcon} alt="calendar" className="date-field-calendar" />
                </div>
              </div>
          </div>

          {/* Venue/Resort Details Field */}
          <div className="location-field">
            <label className="field-label">Venue / Resort Details</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="xxx-xxx-xxx-xxx-xx"
              className="venue-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportTypeSelector;