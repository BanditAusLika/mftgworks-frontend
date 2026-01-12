import React from "react";

const SERVICES = [
  {
    t: "Websites & Landing Pages",
    d: "Modern, fast sites that load quickly, look professional, and are easy to update.",
  },
  {
    t: "PC / Device Setup & Fixes",
    d: "Installs, upgrades, troubleshooting, backups, clean re-builds, and performance tuning.",
  },
  {
    t: "Small Business Tech Support",
    d: "Email/domain setup, basic security hygiene, Wi‑Fi/network checks, and ongoing support.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="sectionTitle">Services</h2>
        <p className="sectionLead">
          Straightforward services that solve real problems. If you need something not listed, ask — odds are I can help.
        </p>

        <div className="grid grid3">
          {SERVICES.map((s) => (
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
