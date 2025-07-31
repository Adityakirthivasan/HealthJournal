import React from "react";
import { FaUsers, FaMobileAlt, FaNotesMedical } from "react-icons/fa";

const About = () => {
  return (
    <div className="info-container">
      <h2>About Health Journal</h2>
      <p className="subtext">Our Mission is to Empower Personal Wellness</p>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-icon"><FaUsers /></div>
          <h4>Community Focused</h4>
          <p>Connect with others by viewing public symptom entries shared by real users.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><FaMobileAlt /></div>
          <h4>Easy to Use</h4>
          <p>Simple design makes it easy to log symptoms from your phone or desktop.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><FaNotesMedical /></div>
          <h4>Health Insights</h4>
          <p>Maintain a digital journal of your health — secure, searchable, and personal.</p>
        </div>
      </div>

      <div className="info-description">
        Health Journal helps users maintain digital health records for better tracking, support, and peace of mind.
      </div>
    </div>
  );
};

export default About;
