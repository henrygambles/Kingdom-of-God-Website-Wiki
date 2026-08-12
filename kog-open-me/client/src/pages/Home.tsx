import { useState } from "react";

/**
 * KOG style reminder: retro editorial poster composition, Kingdom Wheat typography,
 * dusky blue-violet field, black comic ink, sparse whitespace, and tactile motion.
 */
function PeekingMascot() {
  return (
    <svg
      className="mascot"
      viewBox="0 0 360 170"
      role="img"
      aria-label="A playful KOG mascot peeking over the headline"
    >
      <path className="mascot-body" d="M78 138c4-55 31-93 101-93s97 38 101 93H78Z" />
      <path className="mascot-eye" d="M124 93c8-28 31-39 49-10 19-29 42-18 49 10-2 20-18 34-49 34s-47-14-49-34Z" />
      <ellipse className="mascot-glint" cx="159" cy="86" rx="7" ry="11" />
      <ellipse className="mascot-glint" cx="201" cy="86" rx="7" ry="11" />
      <path className="mascot-hand" d="M64 143c8-16 19-24 32-18 8 4 13 13 12 24-1 9-8 14-17 11-4-1-6-6-6-11-5 9-13 10-18 5-4-3-5-7-3-11Z" />
      <path className="mascot-hand" d="M238 149c-1-11 4-20 12-24 13-6 24 2 32 18 2 4 1 8-3 11-5 5-13 4-18-5 0 5-2 10-6 11-9 3-16-2-17-11Z" />
      <path className="mascot-base" d="M45 147h270" />
    </svg>
  );
}

export default function Home() {
  const [status, setStatus] = useState<"idle" | "ready" | "slow">("idle");

  return (
    <main className="kog-page">
      <header className="kog-header" aria-label="KOG brand header">
        <a className="kog-wordmark" href="#main" aria-label="KOG home">
          KOG <span>Kingdom of God</span>
        </a>
        <div className="header-mark" aria-hidden="true">✦</div>
      </header>

      <section className="hero" id="main" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A little room for wonder</p>
          <div className="headline-wrap">
            <h1 id="hero-title">
              <span>HOW OPEN</span>
              <span>ARE YOU?</span>
            </h1>
            <PeekingMascot />
          </div>
          <p className="hero-note">There is more to discover than meets the eye.</p>

          <div className="cta-stack" aria-live="polite">
            <button
              className={`primary-cta ${status === "ready" ? "is-active" : ""}`}
              type="button"
              onClick={() => setStatus("ready")}
            >
              <span>{status === "ready" ? "WELCOME IN" : "I'M READY, LET ME IN"}</span>
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </button>
            <button
              className={`secondary-cta ${status === "slow" ? "is-active" : ""}`}
              type="button"
              onClick={() => setStatus("slow")}
            >
              {status === "slow" ? "TAKE YOUR TIME" : "I'M STILL LOOKING"}
            </button>
          </div>
        </div>
      </section>

      <section className="what-is-kog" aria-labelledby="what-is-kog-title">
        <div className="reveal-stamp" aria-hidden="true">✦</div>
        <div className="reveal-content">
          <p className="reveal-kicker">A doorway, not a finish line</p>
          <h2 id="what-is-kog-title">WHAT IS KOG?</h2>
          <p className="reveal-body">
            KOG is a curious, open-handed invitation to discover the Kingdom of God — not as a distant idea, but as a living way of seeing, loving, and belonging.
          </p>
          <a className="reveal-link" href="#main">COME A LITTLE CLOSER <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <footer className="kog-footer">
        <span>© KOG</span>
        <span>Keep looking up</span>
      </footer>
    </main>
  );
}
