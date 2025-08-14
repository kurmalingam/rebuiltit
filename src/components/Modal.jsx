import React from 'react';
import './Modal.css';

export default function Modal({open, onClose, title, children}){
  if(!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close" onClick={onClose}>Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
