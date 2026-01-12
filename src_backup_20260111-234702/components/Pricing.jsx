import React from "react";

const PRICING = [
  { t: "One-off fixes", d: "Best for small problems and quick repairs. Price depends on scope." },
  { t: "Website builds", d: "Landing pages and small business sites. Fixed quote after requirements are clear." },
  { t: "Ongoing support", d: "Monthly support option for businesses that want fast response and continuity." },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <h2 className="sectionTitle">Pricing</h2>
        <p className="sectionLead">
          I keep pricing simple: clear scope first, then a quote that matches reality. No surprises, no sneaky add-ons.
        </p>

        <div className="grid grid3">
          {PRICING.map((p) => (
            <div className="card" key={p.t}>
              <h3 className="cardTitle">{p.t}</h3>
              <p className="cardText">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
