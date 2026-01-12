import React from "react";
import Section from "./Section.jsx";

const EMAIL = "info-contact@mftgworks.org";

export default function Pricing() {
  return (
    <Section
      id="pricing"
      kicker="Pricing"
      title="Transparent Options"
      subtitle="Exact pricing depends on scope. These are clean starting points — request a quote for accuracy."
    >
      <div className="cards">
        <div className="card">
          <h3 className="cardTitle">Remote Support</h3>
          <p className="cardText">Quick fixes, setup, troubleshooting, guided support.</p>
          <div className="btnRow">
            <a className="btn" href={`mailto:${EMAIL}?subject=Remote%20Support%20-%20Request`}>Request Remote</a>
          </div>
        </div>
        <div className="card">
          <h3 className="cardTitle">On-Site Support</h3>
          <p className="cardText">PC repairs, network work, business setup, device hardening.</p>
          <div className="btnRow">
            <a className="btn" href={`mailto:${EMAIL}?subject=On-site%20Support%20-%20Request`}>Request On-Site</a>
          </div>
        </div>
        <div className="card">
          <h3 className="cardTitle">Website / Landing Page</h3>
          <p className="cardText">Modern design, fast load, mobile-first, clean structure.</p>
          <div className="btnRow">
            <a className="btn btnSecondary" href={`mailto:${EMAIL}?subject=Website%20-%20Request`}>Request Website</a>
          </div>
        </div>
        <div className="card">
          <h3 className="cardTitle">Security Baseline</h3>
          <p className="cardText">2FA, backups, device hardening, email safety basics.</p>
          <div className="btnRow">
            <a className="btn btnSecondary" href={`mailto:${EMAIL}?subject=Security%20Baseline%20-%20Request`}>Request Security</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
