import React, { useEffect, useState } from 'react';

export default function BackToTop(){
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', f);
    f();
    return () => window.removeEventListener('scroll', f);
  }, []);
  if(!show) return null;
  return <div className="back-to-top" onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>↑</div>
}
