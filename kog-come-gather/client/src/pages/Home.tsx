/* KOG style reminder: hot-pink editorial brutalism; oversized condensed typography, black contrast, full-bleed imagery, edge-aligned navigation, and tactile page-turn motion. */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Gather", href: "#gather" },
  { label: "Practice", href: "#practice" },
  { label: "Find us", href: "#find-us" },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-mark">✳</span>{children}</p>;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 85) {
          window.clearInterval(timer);
          window.setTimeout(() => setLoading(false), 380);
          return 85;
        }
        return current + 5;
      });
    }, 48);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="kog-site">
      <div className={`loader-screen ${loading ? "is-visible" : "is-hidden"}`} aria-hidden={!loading}>
        <span>{progress}%</span>
      </div>

      <div className={`site-content ${loading ? "is-loading" : "is-ready"}`}>
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="KOG home"><span className="wordmark-symbol">✳</span><span>KOG</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-cta" href="#gather">Come as you are <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>

        {menuOpen && <div className="mobile-menu"><div className="mobile-menu-inner">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={18} /></a>)}<a href="#gather" onClick={() => setMenuOpen(false)}>Come as you are<ArrowUpRight size={18} /></a></div></div>}

        <main id="top">
          <section className="hero-section">
            <div className="hero-media" role="img" aria-label="A joyful KOG community gathering"></div>
            <div className="hero-overlay"></div>
            <div className="hero-copy">
              <SectionEyebrow>Kingdom of God / Dublin + everywhere</SectionEyebrow>
              <h1>Make room<br /><em>for the</em><br />kingdom.</h1>
              <a className="round-arrow" href="#vision" aria-label="Scroll to vision"><ArrowDownRight size={31} strokeWidth={1.6} /></a>
            </div>
            <p className="hero-side-note">A people learning<br />the way of love<br />in public.</p>
          </section>

          <section className="statement-section pink-section" id="vision">
            <div className="section-number">01 / 04</div>
            <div className="statement-copy"><SectionEyebrow>Our vision</SectionEyebrow><h2>Not a building.<br /><span>A way of life.</span></h2></div>
            <p className="statement-body">KOG is a growing family of ordinary people practicing the upside-down way of Jesus. We make space for questions, meals, beauty, justice, and the kind of hope that can be shared.</p>
          </section>

          <section className="image-story" id="gather">
            <div className="story-image story-image-gather"></div>
            <div className="story-panel black-panel"><div className="section-number">02 / 04</div><SectionEyebrow>We gather</SectionEyebrow><h2>Come<br /><em>correct.</em></h2><p>Every week, around tables and in living rooms, we make room for God and one another. No polish required.</p><a className="text-link" href="#find-us">Find your people <ArrowUpRight size={16} /></a></div>
          </section>

          <section className="practice-section pink-section" id="practice">
            <div className="practice-image story-image-practice"></div>
            <div className="practice-copy"><div className="section-number">03 / 04</div><SectionEyebrow>We practice</SectionEyebrow><h2>Love is<br /><span>the method.</span></h2><p>Prayer, hospitality, courage, and a stubborn belief that the world can be made new. Small acts. Real presence. A different kind of power.</p><a className="button-link" href="#find-us">See the rhythm <ArrowUpRight size={17} /></a></div>
          </section>

          <section className="manifesto-section black-panel"><div className="section-number">04 / 04</div><div className="manifesto-line"><span>We believe</span><strong>the kingdom<br /><em>is near.</em></strong></div><div className="manifesto-line"><span>So we make</span><strong>room<br /><em>for more.</em></strong></div><p className="manifesto-foot">KOG / Kingdom of God / A community for the curious</p></section>

          <section className="find-section pink-section" id="find-us"><div className="section-number">Find us</div><div className="find-layout"><div><SectionEyebrow>Come through</SectionEyebrow><h2>Start<br /><span>here.</span></h2></div><div className="find-details"><p>We meet in homes, cafes, parks, and wherever people are ready to slow down and pay attention.</p><div className="location-row"><div><strong>Sunday gathering</strong><span>Every Sunday · 11:00</span></div><a href="#gather" aria-label="View Sunday gathering details"><ArrowUpRight size={22} /></a></div><div className="location-row"><div><strong>Midweek table</strong><span>Wednesdays · 19:00</span></div><a href="#gather" aria-label="View midweek table details"><ArrowUpRight size={22} /></a></div><a className="button-link dark-button" href="mailto:hello@kog.community">Say hello <ArrowUpRight size={17} /></a></div></div></section>
        </main>

        <footer className="site-footer black-panel"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-symbol">✳</span><span>KOG</span></a><div className="footer-links"><a href="#vision">Vision</a><a href="#gather">Gather</a><a href="#practice">Practice</a><a href="mailto:hello@kog.community">Email</a></div><p>Kingdom of God<br />made visible.</p><small>© 2026 KOG community</small></footer>
      </div>
    </div>
  );
}
