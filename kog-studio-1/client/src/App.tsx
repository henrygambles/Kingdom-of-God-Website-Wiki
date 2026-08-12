import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import brandMark from "./assets/brand-mark.svg";
import Home from "./pages/Home";

/** Sacred Modernism reminder: the shell is a quiet black frame; utility labels stay small while navigation opens as a full-screen ritual. */
function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading, menuOpen]);

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="kog-app">
      {loading && (
        <div className="loader" aria-label="Loading KOG">
          <div className="loader-mark">K</div>
          <div className="loader-bottom"><span>KOG / KINGDOM OF GOD</span><span>00 — 100</span></div>
          <div className="loader-line"><span /></div>
        </div>
      )}

      <header className="site-header">
        <button className="brand-lockup" onClick={() => jump("top")} aria-label="Back to top">
          <img className="brand-mark-image" src={brandMark} alt="" />
          <span className="brand-name">KOG</span>
        </button>
        <div className="header-right">
          <span className="header-note">KINGDOM OF GOD / 2026</span>
          <button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu"><span>MENU</span><Menu size={17} strokeWidth={1.5} /></button>
        </div>
      </header>

      <div className={`menu-panel ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-panel-top"><span>THE DOOR IS OPEN</span><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={24} strokeWidth={1.25} /></button></div>
        <nav className="menu-links">
          <button onClick={() => jump("works")}><span>01</span>WORKS<ArrowUpRight size={32} strokeWidth={1} /></button>
          <button onClick={() => jump("studio")}><span>02</span>STUDIO<ArrowUpRight size={32} strokeWidth={1} /></button>
          <button onClick={() => jump("contact")}><span>03</span>CONTACT<ArrowUpRight size={32} strokeWidth={1} /></button>
        </nav>
        <div className="menu-footer"><span>PARIS / LONDON / EVERYWHERE</span><span>INSTAGRAM&nbsp;&nbsp;&nbsp;LINKEDIN</span><span>EN / FR</span></div>
      </div>

      <Home />
    </div>
  );
}

export default App;
