import React from 'react';

export default function Booking(){
  return (
    <section id="booking">
      <h2>Book Your Services</h2>
      <p className="muted">Premium work at founder‑friendly pricing. Tell us your idea—let’s scope it fast.</p>
      <div style={{marginTop:16, display:'flex', gap:12, flexWrap:'wrap'}}>
        <a className="btn" href="#community">Get a Quote</a>
        <a className="btn btn-ghost" href="#profiles">See Profiles</a>
      </div>
    </section>
  )
}
