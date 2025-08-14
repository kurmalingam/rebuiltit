import React from 'react';

export default function Clients(){
  return (
    <section id="clients">
      <h2>Our Clients</h2>
      <div className="grid grid-3">
        <div className="glass">
          <h3>DryPandaFoods</h3>
          <p className="muted">Full‑Stack Development</p>
          <p>E‑commerce platform focused on performance and conversion.</p>
        </div>
        <div className="glass">
          <h3>Weather Forecast App</h3>
          <p className="muted">Full‑Stack Development</p>
          <p>Real‑time weather with external APIs & caching.</p>
        </div>
        <div className="glass">
          <h3>Smart Digit Sucking Monitor</h3>
          <p className="muted">Embedded & IoT</p>
          <p>Wearable health tech for gentle habit tracking.</p>
        </div>
        <div className="glass">
          <h3>Interior Weight Measuring System</h3>
          <p className="muted">Embedded & IoT</p>
          <p>Precise load monitoring with secure telemetry.</p>
        </div>
        <div className="glass">
          <h3>Custom Antenna Design</h3>
          <p className="muted">Antenna Design</p>
          <p>Optimized RF performance for demanding comms.</p>
        </div>
      </div>
    </section>
  )
}
