import React, { useState, useEffect } from 'react';
import styles from './IncidentType.module.css';

export default function IncidentType({ value = 'IT', onChange = () => {} }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelect = (val) => {
    setSelected(val);
    onChange(val);
  };

  return (
    <div className={styles.incidentTypeBlock} role="group" aria-label="Transport Type">
      <div className={styles.label}>Transport Type</div>

      <div className={styles.options}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="incidentType"
            value="IT"
            checked={selected === 'IT'}
            onChange={() => handleSelect('IT')}
            className={styles.radioInput}
            aria-checked={selected === 'IT'}
          />
          <span className={`${styles.optionLabel} ${selected === 'IT' ? styles.blue : ''}`}>IT</span>
        </label>

        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="incidentType"
            value="Physical"
            checked={selected === 'Physical'}
            onChange={() => handleSelect('Physical')}
            className={styles.radioInput}
            aria-checked={selected === 'Physical'}
          />
          <span className={`${styles.optionLabel} ${selected === 'Physical' ? styles.blue : ''}`}>Physical</span>
        </label>
      </div>
    </div>
  );
}
