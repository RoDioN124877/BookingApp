import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const loc = useLocation();
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-logo">B</div>
          <div>
            <div className="brand-title">BookingApp</div>
            <div className="brand-sub">MVP бронирования</div>
          </div>
        </div>

        <nav className="nav-links">
          <Link to="/" className={loc.pathname === "/" ? "active" : ""}>Главная</Link>
          <Link to="/admin" className={loc.pathname === "/admin" ? "active" : ""}>Админ</Link>
        </nav>
      </div>
    </header>
  );
};

