import React from 'react';
import './Profiles.css';

export default function Profiles(){
  return (
    <section id="profiles">
      <h2>Profiles</h2>
      <p className="muted">Connect with Techstack Tribe:</p>
      <ul className="inline" style={{marginTop:12}}>
        <li>🐙 GitHub</li><li>💼 LinkedIn</li><li>🐦 Twitter</li>
      </ul>
    </section>
  )
}
