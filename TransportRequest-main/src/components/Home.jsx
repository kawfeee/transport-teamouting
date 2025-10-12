import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="home-title">Transport Request</h1>

      <div className="home-actions">
        <button className="home-button primary" onClick={() => navigate('/1')}>
          Create transport request
        </button>
      </div>
    </div>
  );
};

export default Home;