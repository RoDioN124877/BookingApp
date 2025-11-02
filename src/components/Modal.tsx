import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{textAlign:"right"}}>
          <button onClick={onClose} className="btn btn-ghost" style={{padding:"6px 8px", borderRadius:8}}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};
