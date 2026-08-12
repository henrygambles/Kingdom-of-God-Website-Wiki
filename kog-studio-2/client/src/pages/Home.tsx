/* KOG visual direction: contemporary editorial brutalism crossed with surreal devotional art direction; black space, condensed display type, Kingdom Lime accents, asymmetric scroll narrative, and motion as reveal. */
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const works = [
  { no: "01", title: "The Living Word", tag: "Identity / Experience", image: "https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a101bf4026551468ed05521_coeur-bulle-nb.webp" },
  { no: "02", title: "Light in Form", tag: "Campaign / Film", image: "https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a101bf3288a762026817436_papier-froisse.webp" },
  { no: "03", title: "A Wider Table", tag: "Space / Culture", image: "https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a3a708485f3984771b5bfc0_sac-plastic.webp" },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -90]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="kog-site">
      <motion.div className="loading-screen" initial={{ opacity: 1 }} animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "auto" : "none" }} transition={{ duration: 0.65, delay: loading ? 0 : 0.15 }}>
        <div className="loading-mark"><span>000</span><i /></div>
        <div className="loading-rule"><span /></div>
        <p>Making room for the unseen.</p>
      </motion.div>

      <header className={`site-nav ${menuOpen ? "is-open" : ""}`}>
        <button className="brand-lockup" onClick={() => jump("top")} aria-label="KOG home">
          <span className="brand-mark"><img src="/manus-storage/kog-mark_a3518c63.png" alt="" /></span>
          <span>KOG</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => jump("works")}>Works</button>
          <button onClick={() => jump("studio")}>Studio</button>
          <button onClick={() => jump("contact")}>Contact</button>
        </nav>
        <div className="nav-meta"><span>Creative studio</span><span>EN</span></div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        {menuOpen && <div className="mobile-nav"><button onClick={() => jump("works")}>Works</button><button onClick={() => jump("studio")}>Studio</button><button onClick={() => jump("contact")}>Contact</button><span>Paris / Everywhere</span></div>}
      </header>

      <main>
        <section id="top" className="hero-section">
          <motion.div className="hero-art-wrap" style={{ y: heroY }}><img src="https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a3a7084cbb4dfa4268c289f_smiley.webp" alt="A luminous abstract halo sculpture floating in darkness" className="hero-art" /></motion.div>
          <div className="hero-index">( 01 — 05 )</div>
          <div className="hero-copy">
            <Reveal><p className="eyebrow lime">Kingdom of God / Creative studio</p></Reveal>
            <Reveal delay={0.08}><h1>Make room<br /><em>for more.</em></h1></Reveal>
            <Reveal delay={0.16}><p className="hero-intro">We turn conviction into culture — identities, spaces, and experiences that help people see the world differently.</p></Reveal>
          </div>
          <div className="hero-footer"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="manifesto-section section-pad" id="studio">
          <div className="section-label"><span>( 02 )</span><span>The studio</span></div>
          <div className="manifesto-grid">
            <Reveal className="manifesto-title"><h2>Not a style.<br /><span>A perspective.</span></h2></Reveal>
            <Reveal delay={0.12} className="manifesto-body"><p className="lead">In a world full of noise, the rare thing is clarity.</p><p>KOG is a creative studio for people building a more generous world. We believe the unseen can be given shape — in a name, a campaign, a space, a system, a gathering.</p><button className="text-link" onClick={() => jump("contact")}>Bring the unseen into form <ArrowUpRight size={15} /></button></Reveal>
          </div>
          <div className="manifesto-statement"><span>Because</span><strong>faith is a<br /><i>creative force.</i></strong></div>
        </section>

        <section className="works-section section-pad" id="works">
          <div className="section-label"><span>( 03 )</span><span>Selected works</span><span className="section-note">Ideas over output.</span></div>
          <div className="works-list">{works.map((work, index) => <Reveal key={work.no} delay={index * 0.08}><article className="work-row"><div className="work-number">{work.no}</div><div className="work-title"><h3>{work.title}</h3><p>{work.tag}</p></div><div className="work-image"><img src={work.image} alt="" /></div><ArrowUpRight className="work-arrow" size={20} /></article></Reveal>)}</div>
          <div className="works-bottom"><span>More is on the way.</span><button className="round-link" onClick={() => jump("contact")}><ArrowUpRight size={19} /></button></div>
        </section>

        <section className="interlude-section">
          <div className="interlude-orbit"><img src="https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a101bf3288a762026817436_papier-froisse.webp" alt="A folded metallic halo" /></div>
          <p className="interlude-text">We design what<br /><i>could be.</i></p>
          <span className="interlude-caption">Form follows perspective.</span>
        </section>

        <section className="services-section section-pad">
          <div className="section-label"><span>( 04 )</span><span>What we do</span></div>
          <div className="services-layout"><Reveal><h2>Ideas are<br /><em>how we serve.</em></h2></Reveal><div className="service-list">{["Brand identities", "Campaigns & films", "Digital experiences", "Places & gatherings", "Visual systems"].map((item, i) => <Reveal key={item} delay={i * 0.05}><div className="service-item"><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></div></Reveal>)}</div></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-art"><img src="https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a3a708485f3984771b5bfc0_sac-plastic.webp" alt="A translucent hand-like sculpture holding a small light" /></div>
          <div className="section-label"><span>( 05 )</span><span>Contact</span></div>
          <div className="contact-copy"><p className="eyebrow lime">Have something in mind?</p><h2>Let's make<br /><em>space for it.</em></h2><button className="contact-button" onClick={() => window.location.href = "mailto:hello@kog.studio"}>hello@kog.studio <ArrowUpRight size={20} /></button></div>
          <div className="contact-meta"><span>Paris / Everywhere</span><span>Instagram / LinkedIn</span><span>© 2026 KOG</span></div>
        </section>
      </main>
    </div>
  );
}
