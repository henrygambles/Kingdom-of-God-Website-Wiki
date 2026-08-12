import { useEffect, useState } from "react";

/**
 * KOG visual reminder: keep the pink field ceremonial, the typography editorial,
 * and the character original, sculptural, and clearly distinct from existing IP.
 */
export default function Home() {
  const [progress, setProgress] = useState(98);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setProgress(99), 520),
      window.setTimeout(() => setProgress(100), 1040),
      window.setTimeout(() => setIsLoaded(true), 1280),
    ];
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  if (!isLoaded) {
    return (
      <main className="kog-screen" aria-label="KOG — Kingdom of God">
        <div className="kog-grain" aria-hidden="true" />
        <header className="kog-status" aria-label={progress === 100 ? "Loaded" : `Loading: ${progress}%`}>
          <span>{progress}</span>
          <span aria-hidden="true">%</span>
        </header>
        <div className="kog-loader-crown" aria-hidden="true">
          <svg viewBox="0 0 42 24">
            <path d="M3 5.5 11 12l6-8 5 8 7-6 7 12H6L3 5.5Z" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
            <path d="M8 18h25M14 21h14" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
          </svg>
        </div>
        <footer className="kog-disclaimer">This website is a non-commercial project created solely for informational purposes. All information and photos used on this website are the property of their respective owners and are used with their copyright</footer>
      </main>
    );
  }

  return (
    <div className="kog-site">
      <header className="kog-nav">
        <a className="kog-wordmark" href="#top" aria-label="KOG home"><span className="kog-wordmark-mark">⌁</span>KOG</a>
        <nav aria-label="Primary navigation">
          <a href="#becoming">Becoming</a>
          <a href="#signals">Signals</a>
          <a href="#about">About</a>
        </nav>
        <a className="kog-nav-link" href="#about">Enter ↗</a>
      </header>

      <main id="top">
        <section className="kog-hero" aria-labelledby="hero-title">
          <div className="kog-hero-copy">
            <p className="kog-eyebrow">KOG / 001 — THE FIRST LIGHT</p>
            <h1 id="hero-title">The kingdom<br /><em>is already here.</em></h1>
            <p className="kog-hero-intro">An original digital world for becoming more awake, more generous, and more fully yourself.</p>
            <a className="kog-pill" href="#becoming">Discover the signal <span>↓</span></a>
          </div>
          <div className="kog-character-stage" aria-label="Original KOG character illustration" role="img">
            <div className="kog-halo" />
            <div className="kog-character-shadow" />
            <div className="kog-character">
              <div className="kog-crown-3d"><i /><i /><i /></div>
              <div className="kog-head"><div className="kog-hair" /><div className="kog-face"><span className="kog-eye left" /><span className="kog-eye right" /><span className="kog-mouth" /></div></div>
              <div className="kog-neck" />
              <div className="kog-robe"><span className="kog-collar" /><span className="kog-seam" /><span className="kog-emblem">⌁</span></div>
              <div className="kog-arm left" /><div className="kog-arm right" />
            </div>
            <p className="kog-character-caption">KOG / A STUDY IN LIGHT<br /><span>original character, 2026</span></p>
          </div>
          <p className="kog-scroll-cue">Scroll to enter <span>↘</span></p>
        </section>

        <section id="becoming" className="kog-section kog-section-light">
          <p className="kog-section-index">01 / BECOMING</p>
          <div className="kog-section-grid">
            <h2>What you carry<br /><em>can become light.</em></h2>
            <div className="kog-section-copy"><p>KOG is a living collection of ideas, images, and invitations for the person you are still becoming.</p><p>Not a perfect world. A more honest one — made in small, luminous choices.</p><a className="kog-text-link" href="#signals">Read the first signal →</a></div>
          </div>
        </section>

        <section id="signals" className="kog-section kog-section-pink">
          <p className="kog-section-index">02 / SIGNALS</p>
          <div className="kog-section-grid kog-signals-grid">
            <h2>Three ways<br /><em>to look again.</em></h2>
            <div className="kog-signal-list"><article><span>01</span><h3>Presence</h3><p>Stay long enough for the ordinary to become sacred.</p></article><article><span>02</span><h3>Wonder</h3><p>Make room for the impossible without rushing to name it.</p></article><article><span>03</span><h3>Generosity</h3><p>Let what you have seen change how you show up.</p></article></div>
          </div>
        </section>

        <section id="about" className="kog-section kog-section-dark">
          <p className="kog-section-index">03 / ABOUT</p>
          <div className="kog-about-wrap"><h2>KOG is a threshold,<br /><em>not a destination.</em></h2><p>Created as a non-commercial digital project, KOG explores a contemporary visual language for faith, imagination, and belonging.</p><a className="kog-pill kog-pill-light" href="#top">Back to the beginning ↑</a></div>
        </section>
      </main>

      <footer className="kog-footer"><span>KOG — Kingdom of God</span><span>Made to be entered slowly.</span><span>© 2026</span></footer>
    </div>
  );
}
