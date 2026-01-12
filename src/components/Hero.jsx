import React from "react";

export default function Hero() {
  return (
    <div id="top" className="container hero">
      <div className="heroPanel">
        <h1 className="h1">IT services that actually get finished.</h1>
        <p className="heroText">
          I deliver hands-on support for PCs, laptops, networks and small business setups,
          plus clean websites and practical security hardening. You get a clear scope, fast diagnosis,
          and a documented result — not vague advice.
        </p>

        <div className="pills" aria-label="Highlights">
          <span className="pill">Windows • macOS • Linux</span>
          <span className="pill">Remote & On-site</span>
          <span className="pill">Small business ready</span>
          <span className="pill">Hardening + backups</span>
        </div>

        <div className="btnRow">
          <a className="btn" href="#contact">Request a quote</a>
          <a className="btn btnSecondary" href="mailto:info-contact@mftgworks.org?subject=MFTG%20Works%20-%20Request">
            Email now
          </a>
        </div>
      </div>
    </div>
  );
}
