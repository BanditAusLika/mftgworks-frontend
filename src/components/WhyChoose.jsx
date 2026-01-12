import React from "react";
import Section from "./Section.jsx";

export default function WhyChoose() {
  return (
    <Section
      id="why"
      kicker="Why MFTG"
      title="Why Choose MFTG Works"
      subtitle="Professional, direct, and built for real-world conditions — different devices, different users, no drama."
    >
      <div className="cards">
        <div className="card">
          <h3 className="cardTitle">Fast Diagnosis</h3>
          <p className="cardText">You get a clear answer quickly: what’s wrong, what it costs, what’s worth doing.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">Cross-Platform</h3>
          <p className="cardText">Windows / macOS / Linux. I’m not locked into one ecosystem.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">Security-First</h3>
          <p className="cardText">Hardening and backup habits are part of the job — not an upsell.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">Clean Communication</h3>
          <p className="cardText">No tech theatre. You’ll understand exactly what was done and why.</p>
        </div>
      </div>
    </Section>
  );
}
