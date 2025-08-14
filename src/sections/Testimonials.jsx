import React from 'react';

export default function Testimonials(){
  return (
    <section id="testimonials">
      <h2>What Clients Say</h2>
      <div className="carousel">
        <div className="track">
          <div className="slide">
            <h3>“Fast, thoughtful, production‑ready.”</h3>
            <p className="muted">— Founder, DPF</p>
          </div>
          <div className="slide">
            <h3>“They solved our IoT edge issues elegantly.”</h3>
            <p className="muted">— Ops Lead</p>
          </div>
          <div className="slide">
            <h3>“RF expertise that translates to real results.”</h3>
            <p className="muted">— Hardware Manager</p>
          </div>
          <div className="slide">
            <h3>“Clear communication & on‑time delivery.”</h3>
            <p className="muted">— Product Owner</p>
          </div>
        </div>
      </div>
    </section>
  )
}
