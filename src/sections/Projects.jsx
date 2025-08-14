import React, { useState } from 'react';
import Modal from '../components/Modal';

const data = [
  {title:'DryPandaFoods', tag:'Full Stack', desc:'Headless e‑commerce with server‑side rendering, payments and admin tools.'},
  {title:'Weather Forecast App', tag:'Full Stack', desc:'Real‑time weather dashboards with geolocation, alerts and offline cache.'},
  {title:'Digit Sucking Monitor', tag:'IoT', desc:'Low‑power wearable with BLE + cloud analytics and caregiver app.'},
  {title:'Interior Weight System', tag:'IoT', desc:'Industrial sensors + gateway + MQTT with Grafana dashboards.'},
  {title:'UHF Antenna v1', tag:'RF', desc:'Compact, tuned antenna with simulated and measured gain plots.'},
];

export default function Projects(){
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  return (
    <section id="projects">
      <h2>Showcase Projects</h2>
      <div className="grid projects-grid">
        {data.map((p,i)=>(
          <div key={i} className="glass project-card" onClick={()=>{ setCurrent(p); setOpen(true); }}>
            <span className="badge">{p.tag}</span>
            <div className="project-title">{p.title}</div>
            <p className="muted">{p.desc.slice(0, 80)}...</p>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title={current?.title}>
        <p style={{color:'#a7b0c2'}}>{current?.desc}</p>
        <ul className="inline" style={{marginTop:12}}>
          <li>⚙️ Tech deep‑dive</li>
          <li>🧪 QA & testing</li>
          <li>🚀 Deployment</li>
        </ul>
      </Modal>
    </section>
  )
}
