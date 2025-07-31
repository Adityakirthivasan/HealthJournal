import React from "react";
import { FaHeartbeat, FaChartLine, FaLock } from "react-icons/fa";

const Home = () => {
  return (
    <div className="info-container">
      <h2>Welcome to Health Journal</h2>
      <p className="subtext">Your Personal Symptom Tracker & Medical History Hub</p>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-icon"><FaHeartbeat /></div>
          <h4>Track Symptoms</h4>
          <p>Record your daily health symptoms and monitor your well-being over time.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><FaChartLine /></div>
          <h4>View History</h4>
          <p>Get a clear view of your medical history with our smart tracker system.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><FaLock /></div>
          <h4>Privacy Options</h4>
          <p>Choose what you want to keep private or share publicly with the community.</p>
        </div>
      </div>

      <div className="info-description">
        Login or register to begin tracking your health the smart way!
      </div>
    </div>
  );
};

export default Home;
