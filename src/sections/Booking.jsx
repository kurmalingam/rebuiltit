import React from 'react';
import './Bookings.css';
import { FaLinkedin } from 'react-icons/fa';

export default function Booking() {
  return (
    <section id="booking">
      <h2>Get In Touch</h2>
      <p className="muted">
        We help businesses with premium services—and we’re also building a strong community. 
        Choose how you’d like to connect with us.
      </p>

      <div className="booking-options">
        {/* Service Card */}
        <div className="booking-card">
          <h3>Need Our Services?</h3>
          <p>Tell us your idea and we’ll scope it fast at founder-friendly pricing.</p>
          <a
            href="https://www.linkedin.com/company/rebuilt-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            <FaLinkedin size={20} style={{ marginRight: '8px' }} />
            Connect on LinkedIn
          </a>
        </div>

        {/* Community Card */}
        <div className="booking-card">
          <h3>Join Our Community</h3>
          <p>Passionate about our mission? Join the community and grow with us.</p>
          <a className="btn btn-ghost" href="#community">Join Community</a>
        </div>
      </div>
    </section>
  );
}
