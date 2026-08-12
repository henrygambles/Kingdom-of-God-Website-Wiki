/* KOG style reminder: Cinematic Editorial / Sacred Modernism. Use scale contrast, purposeful asymmetry, ink-blue + vermilion accents, and calm reveal motion. */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, MoveDown, X } from "lucide-react";

const images = {
  hero: "https://www.datocms-assets.com/133654/1718027632-home-hero-1.jpg?crop=focalpoint&fit=crop&fp-x=0.97&fp-y=0.04&h=2020&q=85&w=3200",
  work: "https://www.datocms-assets.com/133654/1739806287-ulu-cliffhouse-img_2145.jpg?fit=crop&h=2020&q=85&w=3200",
  space: "https://www.datocms-assets.com/133654/1739807954-image-54.jpg?fit=crop&h=2020&q=85&w=3200",
  portrait: "https://www.datocms-assets.com/133654/1718027632-home-hero-1.jpg?crop=focalpoint&fit=crop&fp-x=0.97&fp-y=0.04&h=2020&q=85&w=3200",
};

const projects = [
  { number: "01", title: "The Gathering", type: "Community / Place", image: images.work },
  { number: "02", title: "A New Eden", type: "Culture / Story", image: images.space },
  { number: "03", title: "Open Heaven", type: "Brand / World", image: images.portrait },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="kog-site">
      <div className="grain" aria-hidden="true" />
      <div className="scroll-rail" aria-hidden="true"><span style={{ transform: `scaleY(${Math.min(scrollY / 3400, 1)})` }} /></div>

      <header className={`site-header ${scrollY > 80 ? "is-scrolled" : ""}`}>
        <button className="brand" onClick={() => jumpTo("top")} aria-label="KOG home">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span>KOG</span>
        </button>
        <div className="header-meta">Kingdom of God <span>—</span> Est. 2026</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={18} /><span>Menu</span></button>
      </header>

      {menuOpen && (
        <div className="menu-panel">
          <div className="menu-top"><span>KOG / Navigation</span><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={22} /></button></div>
          <nav>
            {[['Manifesto', 'manifesto'], ['The work', 'work'], ['People', 'people'], ['Contact', 'contact']].map(([label, id], index) => (
              <button key={id} onClick={() => jumpTo(id)}><span>0{index + 1}</span>{label}<ArrowUpRight size={26} /></button>
            ))}
          </nav>
          <div className="menu-footer"><span>For the curious, the committed, and the becoming.</span><span>© KOG / 2026</span></div>
        </div>
      )}

      <section id="top" className="hero-section">
        <div className="hero-kicker"><span>01</span><span>Make the invisible feel close.</span></div>
        <div className="hero-empty" />
        <div className="hero-stamp" style={{ transform: `translate(-50%, ${scrollY * 0.12}px) scale(${1 + Math.min(scrollY / 1800, 0.18)})` }}>
          <span className="stamp-top">A living studio for</span>
          <strong>KOG</strong>
          <span className="stamp-bottom">Kingdom of God</span>
        </div>
        <div className="hero-caption"><span>Scroll to enter</span><MoveDown size={16} /></div>
      </section>

      <section id="manifesto" className="manifesto-section chapter">
        <div className="chapter-index"><span className="chapter-mark" aria-hidden="true" />02 / Manifesto</div>
        <div className="manifesto-copy"><p className="eyebrow">We are not waiting for a better world.</p><h1>We are<br /><em>building</em><br />one.</h1></div>
        <div className="manifesto-side"><p>KOG is a living studio for the people, places, and practices shaping a more generous future. We bring belief out of the abstract and into the world — through design, gathering, and action.</p><button className="text-link" onClick={() => jumpTo("work")}>Read the manifesto <ArrowDownRight size={18} /></button></div>
      </section>

      <section className="image-break" aria-label="KOG visual statement">
        <div className="image-break-media" style={{ backgroundImage: `url(${images.hero})`, transform: `translateY(${scrollY * -0.06}px) scale(1.05)` }} />
        <div className="image-break-label"><span>Field note / 001</span><span>Light finds us</span></div>
        <div className="image-break-word">BECOMING</div>
      </section>

      <section id="work" className="work-section chapter">
        <div className="chapter-index"><span className="chapter-mark" aria-hidden="true" />03 / The work</div>
        <div className="work-intro"><p className="eyebrow">What we make together</p><h2>Ideas with<br /><span>somewhere</span><br />to go.</h2><p className="work-note">From the first mark to the final gathering, we shape systems that make people feel more connected to what matters.</p></div>
        <div className="project-list">
          {projects.map((project) => <article className="project-row" key={project.number}><div className="project-number">{project.number}</div><div className="project-image"><img src={project.image} alt="" loading="lazy" /></div><div className="project-title"><span>{project.type}</span><h3>{project.title}</h3></div><ArrowUpRight className="project-arrow" size={22} /></article>)}
        </div>
      </section>

      <section id="people" className="people-section">
        <div className="people-image" style={{ backgroundImage: `url(${images.portrait})` }} />
        <div className="people-copy"><div className="chapter-index"><span className="chapter-mark" aria-hidden="true" />04 / People</div><h2>Built by<br /><em>believers.</em></h2><p>A loose collective of designers, strategists, makers, and friends. Different disciplines, one direction: to make room for what is next.</p><button className="round-cta" onClick={() => jumpTo("contact")}><span>Meet the people</span><ArrowUpRight size={20} /></button></div>
      </section>

      <section id="contact" className="contact-section"><div className="contact-sun" aria-hidden="true" /><div className="chapter-index"><span className="chapter-mark" aria-hidden="true" />05 / Contact</div><div className="contact-heading"><span>Come as you are.</span><h2>Let’s make<br /><em>something</em><br />matter.</h2></div><a className="contact-link" href="mailto:hello@kog.studio">hello@kog.studio <ArrowUpRight size={28} /></a><footer><span>KOG / Kingdom of God</span><span>London · Everywhere</span><span>© 2026 KOG Studio</span></footer></section>
    </main>
  );
}
