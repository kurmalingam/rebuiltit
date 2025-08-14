import React from "react";
import './Clients.css';

const clientsData = [
  {
    name: "DryPandaFoods",
    role: "Full‑Stack Development",
    feedback: "E‑commerce platform focused on performance and conversion."
  },
  {
    name: "TechNova",
    role: "UI/UX Design & Web App",
    feedback: "Modernized design for better user engagement and retention."
  }
];

export default function Clients() {
  // Duplicate slides for seamless continuous scroll
  const slides = [...clientsData, ...clientsData];

  return (
    <section id="clients" className="top-space">
      <h2 className="section-title">Our Clients</h2>
      <div className="carousel">
        <div className="track">
          {slides.map((client, index) => (
            <div className="slide glass" key={index}>
              <h3>{client.name}</h3>
              <p className="muted">{client.role}</p>
              <p>{client.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
