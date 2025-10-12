import React, { useState } from 'react';
import '../styles/LocationDetails.css';
import arrowDown from '../assets/arrow-down.svg';

const TransportTypeSelector = () => {
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

  return (
    <div className="transport-type-container">
      {/* Cab Type Section */}
      <div className="transport-type-left">
        <div className="cab-type-heading">Cab Type</div>
        <div className="radio-group" role="radiogroup" aria-label="Cab Type">
          <label className="radio-label">
            <input type="radio" name="cabType" defaultChecked className="radio-input" />
            <span className="radio-text">Team Outing</span>
          </label>
          <label className="radio-label">
            <input type="radio" name="cabType" className="radio-input" />
            <span className="radio-text">Team Lunch</span>
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
                <span className="dropdown-arrow">▾</span>
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
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="date-field-input"
                placeholder="DD-MMM-YYYY"
              />
              <span className="date-field-calendar">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M2 6H14" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M5 2V4" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M11 2V4" stroke="#6B7280" strokeWidth="1.5"/>
                </svg>
              </span>
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