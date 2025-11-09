import React from 'react';
import './Community.css';
import { FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';

export default function Community(){
  return (
    <section id="community">
      <h2>Join Our Community</h2>
      <p className="muted">Builders, researchers, founders—our tribe is open. Learn, share and ship together.</p>

      <div className="social-links">
        <a
          href="https://discord.gg/your-server"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaDiscord className="social-icon" />
          <h3>Discord</h3>
          <p>Join our active community for real-time discussions and collaborations.</p>
        </a>

        <a
          href="https://t.me/your-channel"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaTelegram className="social-icon" />
          <h3>Telegram</h3>
          <p>Stay updated with announcements and connect with fellow builders.</p>
        </a>

        <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="social-icon" />
          <h3>Instagram</h3>
          <p>Follow us for behind-the-scenes content and project showcases.</p>
        </a>
      </div>
    </section>
  )
}
