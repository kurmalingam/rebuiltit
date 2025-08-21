import React, { useState } from "react";
import Modal from "../components/Modal";
import "./Projects.css";

const data = [
  {
    title: "DryPandaFoods",
    category: "Full Stack",
    desc: "E-commerce platform for dry food products, featuring a headless CMS, Stripe payments, and inventory management."
  },
  {
    title: "Weather Forecast App",
    category: "Full Stack",
    desc: "Real-time weather dashboards with geolocation, Displaying weather data from OpenWeatherMap API."
  },
  {
    title: "Smart Digit Sucking Monitor",
    category: "Embedded System & IoT",
    desc: "Wearable device to monitor digit sucking habits in children, featuring low-power design, and cloud analytics."
  },
  {
    title: "Design and Development of Interior Weight Measuring System in an Indirect Solar Dehydrator",
    category: "Embedded System & IoT",
    desc: "IoT system for monitoring interior weights in solar dehydrator, including load cells and HX711 amplifier."
  },
  {
    title: "UHF/HF Antenna",
    category: "Antenna",
    desc: "UHF/HF antenna design with simulated and measured gain plots, suitable for various applications."
  },
  {
    title: "MIMO Antenna",
    category: "Antenna",
    desc: "4x4 MIMO antenna design with simulation results, demonstrating high efficiency and low mutual coupling."
  }
];

const categories = [
  { key: "Full Stack", label: "Full Stack Development Work" },
  { key: "Embedded System & IoT", label: "Embedded System & IoT" }, // ✅ fixed
  { key: "Antenna", label: "Antenna Design" }
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  // 🔹 Function to render unique modal content
  const renderModalContent = (project) => {
    if (!project) return null;

    switch (project.title) {
      case "DryPandaFoods":
        return (
          <>
            <p>{project.desc}</p>
            <ul className="inline" style={{ marginTop: 12 }}>
              <li>🛒 Headless CMS</li>
              <li>💳 Stripe payments</li>
              <li>📦 Inventory management</li>
            </ul>
          </>
        );

      case "Weather Forecast App":
        return (
          <>
            <p>{project.desc}</p>
            <ul className="inline" style={{ marginTop: 12 }}>
              <li>🌍 Geolocation</li>
              <li>⚡ Real-time APIs</li>
            </ul>
          </>
        );

      case "Smart Digit Sucking Monitor": // ✅ exact match
        return (
          <>
            <p>{project.desc}</p>
            <ul className="inline" style={{ marginTop: 12 }}>
              <li>🔋 Low-power wearable</li>
              <li>☁️ Cloud analytics</li>
            </ul>
          </>
        );

      case "Design and Development of Interior Weight Measuring System": // ✅ exact match
        return (
          <>
            <p>{project.desc}</p>
            <ul className="inline" style={{ marginTop: 12 }}>
              <li>⚖️ Load monitoring</li>
            </ul>
          </>
        );

      case "UHF/HF Antenna":
        return (
          <>
            <p>{project.desc}</p>
            <div style={{ marginTop: 12 }}>📡 Gain plot graphs here</div>
          </>
        );

      case "MIMO Antenna":
        return (
          <>
            <p>{project.desc}</p>
            <div style={{ marginTop: 12 }}>📡 4x4 MIMO simulation results</div>
          </>
        );

      default:
        return <p>{project.desc}</p>;
    }
  };

  return (
    <section id="projects" className="top-space">
      <h2 className="section-title">Our Work</h2>

      {categories.map((cat) => {
        const projects = data.filter((p) => p.category === cat.key);
        if (projects.length === 0) return null;

        return (
          <div key={cat.key} className="category-section">
            <h3 className="category-title">{cat.label}</h3>
            <div className="grid projects-grid">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="glass project-card"
                  onClick={() => {
                    setCurrent(p);
                    setOpen(true);
                  }}
                >
                  <span className="badge">{p.category}</span>
                  <div className="project-title">{p.title}</div>
                  <p className="muted">{p.desc.slice(0, 80)}...</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Modal with dynamic content */}
      <Modal open={open} onClose={() => setOpen(false)} title={current?.title}>
        {renderModalContent(current)}
      </Modal>
    </section>
  );
}
