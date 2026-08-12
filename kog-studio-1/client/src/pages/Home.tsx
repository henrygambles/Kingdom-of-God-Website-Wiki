import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";

/** Sacred Modernism reminder: use asymmetry, black space, tactile relic imagery, and short declarative copy instead of centered marketing blocks. */
const works = [
  { no: "01", title: "The Table", desc: "A place to be seen, fed, and sent.", image: "/manus-storage/kog-flame_63e07008.jpg", tint: "lime" },
  { no: "02", title: "Open Hands", desc: "Practice over performance.", image: "/manus-storage/kog-studio_3b92103b.jpg", tint: "bone" },
  { no: "03", title: "The Veil", desc: "What is hidden is still becoming.", image: "/manus-storage/kog-veil_4a3ec80d.jpg", tint: "clay" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero-section">
        <div className="hero-orbit">KOG<span>✦</span></div><div className="scripture-marker hero-scripture">01:03 / LET THERE BE LIGHT</div>
        <div className="hero-copy">
          <Reveal><p className="eyebrow">A living movement / for the life of the world</p></Reveal>
          <Reveal className="hero-title-wrap"><h1>Make room<br /><em>for what</em><br />moves.</h1></Reveal>
          <Reveal><p className="hero-intro">Kingdom of God is a creative community making faith tangible — through art, table, story, and action.</p></Reveal>
          <a className="circle-link" href="#works" aria-label="Explore KOG works"><ArrowDownRight size={26} strokeWidth={1.2} /></a>
        </div>
        <div className="hero-art-wrap"><img src="/manus-storage/kog-hero_5b9f6036.jpg" alt="A stone doorway with a flame and chartreuse halo" className="hero-art" /><span className="art-caption">THE DOOR IS NOT A METAPHOR<br />IT IS A PRACTICE</span></div>
        <div className="hero-index"><span>SCROLL TO ENTER</span><span>01 / 05&nbsp;&nbsp;·&nbsp;&nbsp;LIGHT / LIFE / LOVE</span></div>
      </section>

      <section className="manifesto-section">
        <div className="section-marker">( THE MOVEMENT )</div>
        <div className="manifesto-copy">
          <Reveal><p className="manifesto-lead">Not a style.<br /><span>A way of seeing.</span></p></Reveal>
          <Reveal><p className="manifesto-body">In a world that asks for more noise, we make room for attention. KOG is a studio, a gathering, a set of open hands — a place where belief becomes visible and imagination becomes useful. Start with a seed, a table, a breath.</p></Reveal>
        </div>
        <div className="vertical-word">K&nbsp;I&nbsp;N&nbsp;G&nbsp;D&nbsp;O&nbsp;M</div>
      </section>

      <section id="works" className="works-section">
        <div className="works-head"><span className="section-marker">( SELECTED WORKS )</span><p>Good ideas communicate.<br /><strong>Great ideas make space.</strong></p><span className="scripture-marker works-scripture">05:09 / GATHERED HERE</span></div>
        <div className="works-list">
          {works.map((work) => (
            <a className={`work-card ${work.tint}`} key={work.no} href="#contact">
              <div className="work-meta"><span>{work.no}</span><span>{work.title}</span><ArrowUpRight size={18} strokeWidth={1.2} /></div>
              <div className="work-image-wrap"><img src={work.image} alt="" className="work-image" /><div className="work-overlay"><span>View story</span><MoveUpRight size={28} strokeWidth={1} /></div></div>
              <div className="work-bottom"><h2>{work.title}</h2><p>{work.desc}</p></div>
            </a>
          ))}
        </div>
        <div className="works-tail"><span>( 03 )</span><span>More is coming into view</span><ArrowDownRight size={22} strokeWidth={1.1} /></div>
      </section>

      <section id="studio" className="studio-section">
        <div className="section-marker">( THE STUDIO )</div>
        <div className="studio-grid">
          <div className="studio-statement"><Reveal><h2>Faith is<br /><em>not finished.</em></h2></Reveal><p>It keeps becoming. We build the spaces, images, and rituals that help people notice.</p></div>
          <div className="studio-image"><img src="/manus-storage/kog-studio_3b92103b.jpg" alt="A sculptural hand holding a glowing seed" /><span>01 — OPEN HANDS</span></div>
          <div className="studio-list"><p>We make room for :</p><span>Tables where strangers belong</span><span>Stories with a pulse</span><span>Digital places to gather</span><span>Rituals that leave a trace</span><span>Images that make belief visible</span></div>
        </div>
        <div className="studio-note"><span>Perspective is where strategy meets visual culture.</span><span>Built for the curious. Held by the generous.</span><span className="scripture-marker">07:12 / THE TABLE IS LONG</span></div>
      </section>

      <section className="relic-section"><div className="relic-copy"><img className="relic-seal" src="/manus-storage/kog-mark_46beafac.png" alt="" /><span className="section-marker">( A NOTE TO SELF )</span><h2>Stay<br /><em>available.</em></h2><p>The best things often arrive without a brief. Leave a little room for the small thing that becomes everything.</p></div><div className="relic-art"><img src="/manus-storage/kog-relic_6a63e132.jpg" alt="A folded fabric, basalt ring, and glowing bead arranged as an altar" /><span>THE UNEXPECTED IS A DOOR TOO</span></div></section>

      <footer id="contact" className="site-footer">
        <div className="footer-top"><span className="section-marker">( CONTACT )</span><span>© 26 KOG / ALL THINGS NEW</span><span className="scripture-marker">12:24 / COME AS YOU ARE</span></div>
        <div className="footer-main"><h2>Come<br /><em>as you are.</em></h2><a className="footer-link" href="mailto:hello@kog.world">DROP US A LINE <ArrowUpRight size={30} strokeWidth={1} /></a></div>
        <div className="footer-bottom"><span>PARIS / LONDON / EVERYWHERE</span><span>INSTAGRAM&nbsp;&nbsp; LINKEDIN</span><span>EN</span></div>
      </footer>
    </main>
  );
}
