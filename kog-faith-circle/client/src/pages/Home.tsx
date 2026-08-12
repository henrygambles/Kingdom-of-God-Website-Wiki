// Sacred Modernism: image-led editorial chapters, oversized serif type, cobalt route-line accents, and tactile motion.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, MoveUpRight, X } from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=85",
  gathering: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=82",
  prayer: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82",
  service: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=82",
};

const practices = [
  { number: "01", title: "Gather", copy: "Make room at the table. KOG begins with people who choose presence over performance." },
  { number: "02", title: "Practice", copy: "Turn a good intention into a daily rhythm — prayer, hospitality, justice, and honest attention." },
  { number: "03", title: "Build", copy: "Carry the life of the Kingdom into neighborhoods, workplaces, and the places that need it most." },
];

const stories = [
  { eyebrow: "Field note / 01", title: "A table in the middle of the city", copy: "What changes when a community makes dinner its first act of discipleship?", image: images.gathering },
  { eyebrow: "Practice / 02", title: "Learning to stay", copy: "A quiet guide to presence, prayer, and the work of not rushing past one another.", image: images.prayer },
  { eyebrow: "Common good / 03", title: "Faith with its sleeves rolled up", copy: "Small acts of repair that become a public witness over time.", image: images.service },
];

function AnchorLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className="nav-link group">{children}<ArrowRight className="nav-link-arrow" size={15} strokeWidth={1.8} /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="kog-page">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#top" className="brand-lockup" aria-label="KOG home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-name">KOG</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <AnchorLink href="#mission">Mission</AnchorLink>
          <AnchorLink href="#practices">Practices</AnchorLink>
          <AnchorLink href="#stories">Stories</AnchorLink>
          <a href="#connect" className="header-cta">Find your people <MoveUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <AnchorLink href="#mission" onClick={() => setMenuOpen(false)}>Mission</AnchorLink>
        <AnchorLink href="#practices" onClick={() => setMenuOpen(false)}>Practices</AnchorLink>
        <AnchorLink href="#stories" onClick={() => setMenuOpen(false)}>Stories</AnchorLink>
        <a href="#connect" onClick={() => setMenuOpen(false)} className="button button-blue">Find your people <ArrowRight size={17} /></a>
      </div>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
          <div className="hero-overlay" />
          <div className="hero-rings" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-content reveal-up">
            <p className="eyebrow light"><span className="eyebrow-dot" /> A movement for the common good</p>
            <h1>A different kind<br />of kingdom is<br /><em>already here.</em></h1>
            <a href="#mission" className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={19} /></a>
          </div>
          <div className="hero-footer"><span>Kingdom of God</span><span>Est. in the way of Jesus</span><span>01 / 04</span></div>
        </section>

        <section className="intro section-pad" id="mission">
          <div className="section-kicker">01 <span /> Mission</div>
          <div className="intro-grid">
            <h2>What if faith<br />looked like <em>this?</em></h2>
            <div className="intro-copy">
              <p className="lead">KOG is a growing family of people learning to live the way of Jesus in the ordinary places of life.</p>
              <p>We believe the Kingdom of God is not somewhere else or some time later. It is a way of being here — now. A table pulled wider. A neighborhood tended. A life reoriented toward love.</p>
              <a href="#practices" className="text-link">See how we practice <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="image-band">
          <div className="image-band-copy"><p className="eyebrow"><span className="eyebrow-dot blue" /> A lived theology</p><h2>Make the<br /><em>invisible</em> visible.</h2></div>
          <div className="image-band-image" style={{ backgroundImage: `url(${images.gathering})` }}><span className="image-caption">Community is the first miracle.</span></div>
        </section>

        <section className="practices section-pad" id="practices">
          <div className="section-kicker">02 <span /> Practices</div>
          <div className="practices-heading"><h2>The shape of<br /><em>a faithful life.</em></h2><p>Not a checklist. A set of invitations we return to, together.</p></div>
          <div className="practice-list">
            {practices.map((practice) => <article className="practice-row" key={practice.number}><span className="practice-number">{practice.number}</span><h3>{practice.title}</h3><p>{practice.copy}</p><ArrowDownRight className="practice-arrow" size={22} /></article>)}
          </div>
        </section>

        <section className="statement"><div className="statement-mark">KOG</div><p>“The Kingdom is like a seed — small enough to miss, alive enough to change everything.”</p><span>— A community saying</span></section>

        <section className="stories section-pad" id="stories">
          <div className="stories-top"><div className="section-kicker">03 <span /> Stories</div><a href="#connect" className="text-link">Read all stories <ArrowRight size={16} /></a></div>
          <h2>Small stories.<br /><em>Wide ripples.</em></h2>
          <div className="story-grid">{stories.map((story) => <a href="#connect" className="story-card" key={story.title}><div className="story-image-wrap"><div className="story-image" style={{ backgroundImage: `url(${story.image})` }} /><span className="story-arrow"><ArrowUpRight size={17} /></span></div><p className="story-eyebrow">{story.eyebrow}</p><h3>{story.title}</h3><p>{story.copy}</p><span className="story-read">Read story <ArrowRight size={14} /></span></a>)}</div>
        </section>

        <section className="join" id="connect"><div className="join-content"><p className="eyebrow light"><span className="eyebrow-dot" /> Come as you are</p><h2>There is a place<br />for you <em>here.</em></h2><p>Find a community, a practice, or a next step that feels honest to where you are right now.</p><a href="mailto:hello@kog.community" className="button button-light">Start a conversation <ArrowRight size={17} /></a></div><div className="join-side"><span>04</span><span>Live the life<br />you were made for.</span></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark dark" aria-hidden="true"><span /><span /><span /></span><span className="brand-name">KOG</span><p>A people learning<br />the way of love.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span><a href="#mission">Mission</a><a href="#practices">Practices</a><a href="#stories">Stories</a></div><div><span className="footer-label">Connect</span><a href="mailto:hello@kog.community">Email us</a><a href="#connect">Find a community</a><a href="#connect">Instagram <MoveUpRight size={13} /></a></div></div><div className="footer-bottom"><span>© 2026 KOG</span><span>Made for the common good</span><span>Privacy</span></div></footer>
    </div>
  );
}
