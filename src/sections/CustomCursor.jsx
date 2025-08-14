import React, { useEffect, useState } from "react";
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoverEls = document.querySelectorAll("a, button, .btn");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
    return () => {
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${hovered ? "grow" : ""}`}
      style={{
        left: position.x + "px",
        top: position.y + "px",
      }}
    />
  );
}
