import { useEffect, useState } from 'react';

export function useActiveSection(ids){
  const [active, setActive] = useState(ids[0] || '');
  useEffect(() => {
    const observers = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if(!el) return;
      const obs = new IntersectionObserver(entries => {
        entries.forEach(ent => {
          if(ent.isIntersecting) setActive(id);
        })
      }, {threshold: 0.6});
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [ids]);
  return active;
}
