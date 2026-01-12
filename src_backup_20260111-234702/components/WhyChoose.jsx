import React from "react";

const REASONS = [
  { t: "Professional and documented", d: "You get clear notes on what was done and why — useful later." },
  { t: "Maintainable work", d: "No brittle hacks. Clean structure, sensible defaults, and predictable behaviour." },
  { t: "Security-minded", d: "Practical steps: updates, backups, access control, and basic hardening." },
  { t: "Honest scope", d: "If something is a waste of money, you’ll hear it." },
];

export default function WhyChoose() {
  return (
    <section className="section" id="why">
      <div className="container">
        <h2 className="sectionTitle">Why MFTG Works</h2>
        <p className="sectionLead">No fluff — just competent work, delivered reliably.</p>

        <div className="grid grid2">
          {REASONS.map((r) => (
            <div className="card" key={r.t}>
              <h3 className="cardTitle">{r.t}</h3>
              <p className="cardText">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
