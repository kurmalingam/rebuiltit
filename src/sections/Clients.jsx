import React from "react";
import "./Clients.css";

const clientsData = [
  {
    name: "DryPandaFoods",
    role: "Full-Stack Development",
    feedback:
      "The e-commerce platform boosted our sales and made operations seamless. Customers now have a smooth experience purchasing dry food products and machines.",
  },
  {
    name: "Smart Digit Sucking Monitoring System",
    role: "Embedded & IoT Development",
    feedback:
      "This solution has been a game changer. The real-time alerts helped us address thumb-sucking issues early and support children’s healthier habits.",
  },
];

// 🔑 duplicate 4–5 times for seamless loop
const slides = [...clientsData, ...clientsData, ...clientsData, ...clientsData];

export default function Clients() {
  return (
    <section id="clients" className="top-space">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="carousel">
        <div className="track">
          {slides.map((client, index) => (
            <div className="review-card glass" key={index}>
              <p className="review-text">“{client.feedback}”</p>
              <div className="reviewer">
                <div className="avatar">{client.name.charAt(0)}</div>
                <div>
                  <h3>{client.name}</h3>
                  <p className="muted">{client.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
