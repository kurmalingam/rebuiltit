import React, { useEffect, useState } from 'react';

export default function ScrollProgress(){
  const [w, setW] = useState('0%');  // state to store width of progress bar

  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY; // how far the user has scrolled
      const h = document.body.scrollHeight - window.innerHeight; // total scrollable height
      setW(`${(sc / h) * 100}%`); // percentage scrolled
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // call immediately to set initial value
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="progress-bar" style={{width:w}} />;
}
