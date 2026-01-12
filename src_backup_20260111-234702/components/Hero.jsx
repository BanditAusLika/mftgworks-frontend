import React from "react";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="heroInner">
          <div>
            <div className="kicker">IT Services • Web • Automation</div>
            <h1 className="heroTitle">Practical IT, clean builds, and reliable support.</h1>
            <p className="heroSub">
              MFTG Works helps small businesses and individuals with websites, troubleshooting, setup, security basics, and
              ongoing tech support — done properly, documented, and delivered on time.
            </p>

            <div className="heroCtas">
              <a className="btn btnPrimary" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Contact
              </a>
              <a className="btn" href="#services" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}>
                See services
              </a>
            </div>
          </div>

          <aside className="heroSide">
            <div className="card">
              <div className="cardTitle">What you get</div>
              <p className="cardText">Clear scope, clear pricing, and work that stays maintainable — no mystery spaghetti.</p>
              <hr className="hr" />
              <div className="badge">Fast response • Plain English • No drama</div>
            </div>

            <div className="card">
              <div className="cardTitle">Availability</div>
              <p className="cardText">Remote-first. On-site possible depending on location and job size.</p>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
