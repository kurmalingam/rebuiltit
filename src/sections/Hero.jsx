import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content glass-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Welcome to <span>TechStack Tribe</span></h1>
        <h2 className="hero-subtitle">
          <Typewriter
            options={{
              strings: [
                "Full Stack Development",
                "Embedded Systems & IoT",
                "Antenna Design",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h2>
        <p className="hero-tagline">
          🚀 We build innovative solutions in software, hardware & beyond.
        </p>
      </motion.div>
    </section>
  );
}
