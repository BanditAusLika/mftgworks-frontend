import React from "react";

const CERTS = [
  {
    t: "Python Programmer",
    d: "Institut für Lernsysteme (ILS), Hamburg — professional training certificate.",
  },
  {
    t: "Full‑Stack Web & App Development",
    d: "WBS Coding School — full‑stack program (frontend + backend).",
  },
  {
    t: "IT Support Professional Certificate",
    d: "Google — professional certificate (IT support fundamentals).",
  },
  {
    t: "Cybersecurity Professional Certificate",
    d: "Google — professional certificate (security foundations).",
  },
  {
    t: "TAFE (Australia) — Enrolled",
    d: "VU TAFE — ICT training (Cyber Security & Digital Tech stream).",
  },
];

export default function Certs() {
  return (
    <section className="section" id="credentials">
      <div className="container">
        <h2 className="sectionTitle">Credentials / Certificates</h2>
        <p className="sectionLead">
          Clean, business-appropriate list. No grades, no noise — just the institution and what the certificate covers.
        </p>

        <div className="grid grid2">
          {CERTS.map((c) => (
            <div className="card" key={c.t}>
              <h3 className="cardTitle">{c.t}</h3>
              <p className="cardText">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
