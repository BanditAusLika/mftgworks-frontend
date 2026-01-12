import React from "react";

const STEPS = [
  { t: "1) Quick call / message", d: "You tell me what you need. I ask the right questions so we don’t waste time." },
  { t: "2) Scope & quote", d: "Short scope, clear deliverables, and a realistic quote." },
  { t: "3) Work & updates", d: "I do the work and keep you updated. If something changes, you hear it immediately." },
  { t: "4) Handover", d: "You get the result plus notes/documentation so you’re not locked-in." },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <h2 className="sectionTitle">Process</h2>
        <p className="sectionLead">Old-school rule: do it properly once, so you don’t pay twice.</p>

        <div className="grid grid2">
          {STEPS.map((s) => (
            <div className="card" key={s.t}>
              <h3 className="cardTitle">{s.t}</h3>
              <p className="cardText">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
