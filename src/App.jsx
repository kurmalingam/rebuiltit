import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';

import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import Booking from './sections/Booking.jsx';
import Community from './sections/Community.jsx';
import CustomCursor from './sections/CustomCursor.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Apply theme to body
  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <CustomCursor />
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollProgress />
      <Hero />
      <Services />
      <Clients />
      <Projects />
      <Booking />
      <Community />
      <footer>© {new Date().getFullYear()} Techstack Tribe. All rights reserved.</footer>
      <BackToTop theme={theme} />
    </>
  );
}
