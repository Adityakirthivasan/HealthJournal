import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="subtext">We're here to help you anytime</p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon"><FaEnvelope /></div>
          <h4>Email</h4>
          <p>support@healthjournal.com</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><FaPhoneAlt /></div>
          <h4>Phone</h4>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><FaMapMarkerAlt /></div>
          <h4>Address</h4>
          <p>123 Health St, Wellness City</p>
        </div>
      </div>

      <div className="contact-description">
        Reach out to us for any support regarding symptom tracking, public journals, or profile updates.
        We’ll respond as soon as possible!
      </div>
    </div>
  );
};

export default Contact;
