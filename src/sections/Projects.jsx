import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Projects.css';

const data = [
  { title: 'DryPandaFoods', category: 'Full Stack', desc: 'Headless e‑commerce with server‑side rendering, payments and admin tools.' },
  { title: 'Weather Forecast App', category: 'Full Stack', desc: 'Real‑time weather dashboards with geolocation, alerts and offline cache.' },
  { title: 'Digit Sucking Monitor', category: 'IoT', desc: 'Low‑power wearable with BLE + cloud analytics and caregiver app.' },
  { title: 'Interior Weight System', category: 'IoT', desc: 'Industrial sensors + gateway + MQTT with Grafana dashboards.' },
  { title: 'UHF/HF Antenna', category: 'Antenna', desc: 'Compact, tuned antenna with simulated and measured gain plots.' },
  { title: 'MIMO Antenna', category: 'Antenna', desc: 'Compact, tuned antenna with simulated and measured gain plots.' },
];

// Categories order
const categories = [
  { key: 'Full Stack', label: 'Full Stack Development Work' },
  { key: 'IoT', label: 'Embedded System & IoT' },
  { key: 'Antenna', label: 'Antenna Design' },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  return (
    <section id="projects" className="top-space">
      <h2 className="section-title">Our Work</h2>

      {categories.map(cat => {
        const projects = data.filter(p => p.category === cat.key);
        if (projects.length === 0) return null;

        return (
          <div key={cat.key} className="category-section">
            <h3 className="category-title">{cat.label}</h3>
            <div className="grid projects-grid">
              {projects.map((p, i) => (
                <div key={i} className="glass project-card" onClick={() => { setCurrent(p); setOpen(true); }}>
                  <span className="badge">{p.category}</span>
                  <div className="project-title">{p.title}</div>
                  <p className="muted">{p.desc.slice(0, 80)}...</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <Modal open={open} onClose={() => setOpen(false)} title={current?.title}>
        <p style={{ color: '#a7b0c2' }}>{current?.desc}</p>
        <ul className="inline" style={{ marginTop: 12 }}>
          <li>⚙️ Tech deep‑dive</li>
          <li>🧪 QA & testing</li>
          <li>🚀 Deployment</li>
        </ul>
      </Modal>
    </section>
  );
}
