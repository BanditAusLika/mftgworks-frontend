import React from "react";
import Section from "./Section.jsx";

export default function Process() {
  return (
    <Section
      id="process"
      kicker="Process"
      title="How It Works"
      subtitle="Simple. Efficient. Documented."
    >
      <div className="cards">
        <div className="card">
          <h3 className="cardTitle">1) Request</h3>
          <p className="cardText">Tell me what you need (remote or on-site). Photos/screenshots help.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">2) Diagnose</h3>
          <p className="cardText">Clear diagnosis and options. If replacement is smarter than repair, I say it.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">3) Fix / Deliver</h3>
          <p className="cardText">Fix, test, confirm. No “half-done” work.</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">4) Secure & Document</h3>
          <p className="cardText">Basic security baseline + written summary of what was changed.</p>
        </div>
      </div>
    </Section>
  );
}
