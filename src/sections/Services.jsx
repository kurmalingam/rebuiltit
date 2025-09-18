import React from 'react';
import './Services.css';

const items = [
  {title:'Full Stack Development', front:'💻', back:'Modern web apps, APIs, dashboards, and e‑commerce with robust CI/CD.'},
  {
  title: 'Cross-Platform Mobile Apps',
  front: '📱',
  back: 'iOS & Android apps with one codebase. Fast, reliable, user-friendly design with secure APIs, real-time features & deployment support.',
},
  {title:'Embedded Systems & IoT', front:'🤖', back:'Wearables, sensors, and connected devices with cloud integration and firmware development.'},
  {title:'Antenna Design', front:'📡', back:'High‑performance RF designs tuned for your band and constraints.'},
  
];

export default function Services(){
  return (
    <section id="services">
      <h2>Services We Offer</h2>
      <div className="grid grid-3">
        {items.map((it,i)=>(
          <div key={i} className="glass flip">
            <div className="flip-inner">
              <div className="flip-face flip-front">
                <div>
                  <div style={{fontSize:'40px'}}>{it.front}</div>
                  <h3 style={{marginTop:8}}>{it.title}</h3>
                </div>
              </div>
              <div className="flip-face flip-back">
                <p>{it.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
