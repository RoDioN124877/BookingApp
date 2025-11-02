import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005))",
        borderTop: "1px solid var(--glass-border)",
        padding: "28px 0",
        marginTop: 40,
      }}
    >
      <div className="container" style={{ display: "flex", gap: 20, alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 220 }}>
          <div className="brand-logo" style={{ width: 56, height: 56, borderRadius: 12, fontSize: 18 }}>
            B
          </div>
          <div>
            <div className="brand-title" style={{ fontSize: 16 }}>BookingApp</div>
            <div className="brand-sub small" style={{ marginTop: 4 }}>Найди и забронируй номер быстро</div>
          </div>
        </div>

        <nav aria-label="footer-navigation" style={{ display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Разделы</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><a href="/" className="text-sm" style={{ color: "var(--muted)", textDecoration: "none" }}>Главная</a></li>
              <li><a href="/venues" className="text-sm" style={{ color: "var(--muted)", textDecoration: "none" }}>Заведения</a></li>
              <li><a href="/admin" className="text-sm" style={{ color: "var(--muted)", textDecoration: "none" }}>Админ</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Поддержка</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><a href="mailto:support@bookingapp.local" className="text-sm" style={{ color: "var(--muted)", textDecoration: "none" }}>support@bookingapp.local</a></li>
              <li className="text-sm" style={{ color: "var(--muted)" }}>+7 (900) 000-00-00</li>
            </ul>
          </div>
        </nav>

        <div style={{ minWidth: 220, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>Подписаться</div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 8 }}>
            <input aria-label="email" placeholder="Ваш email" className="input" style={{ flex: 1 }} />
            <button className="btn btn-primary" type="submit" style={{ padding: "8px 12px" }}>Подписаться</button>
          </form>

          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <a href="#" aria-label="twitter" style={{ color: "var(--muted)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M23 4.5c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.9-2.6 1.1C18.6 3 17.3 2.5 16 2.5c-2 0-3.5 1.7-3.5 3.8 0 .3 0 .5.1.7C9.3 6.7 6.2 5 4 2.7c-.4.7-.6 1.6-.6 2.6 0 1.4.7 2.6 1.8 3.4-.6 0-1.2-.2-1.7-.5v.1c0 2.1 1.4 3.9 3.2 4.3-.3.1-.7.1-1 .1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.5-1.2.9-2.7 1.4-4.3 1.4H4c1.6 1 3.5 1.6 5.6 1.6 6.7 0 10.4-5.8 10.4-10.8v-.5c.7-.5 1.3-1.2 1.8-2z" fill="currentColor" /></svg>
            </a>
            <a href="#" aria-label="instagram" style={{ color: "var(--muted)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2" fill="none"/><circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
            </a>
            <a href="#" aria-label="facebook" style={{ color: "var(--muted)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2h3v4h-3v2h3v4h-3v8h-4v-8H7v-4h3V6a3 3 0 0 1 3-4z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.03)", marginTop: 20, paddingTop: 18 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div className="small text-muted">© {new Date().getFullYear()} BookingApp. Все права защищены.</div>
          <div className="small text-muted">Сделано с ❤️ — небольшое демо</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;