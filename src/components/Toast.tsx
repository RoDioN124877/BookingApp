import React, { useEffect } from "react";

interface Props {
  show: boolean;
  text: string;
  onClose: () => void;
}

export const Toast: React.FC<Props> = ({ show, text, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, 2300);
    return () => clearTimeout(t);
  }, [show]);

  if (!show) return null;
  return <div className="toast">{text}</div>;
};
