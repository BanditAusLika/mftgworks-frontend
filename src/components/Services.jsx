import React from "react";
import Section from "./Section.jsx";

export default function Services() {
  return (
    <>
      <Section
        id="services"
        kicker="What I do"
        title="IT Services"
        subtitle="Clear scope, no nonsense. If it’s fixable, I’ll fix it. If it’s not worth it, I’ll tell you."
      >
        <div className="cards">
          <div className="card">
            <h3 className="cardTitle">PC & Laptop Repair</h3>
            <p className="cardText">Diagnostics, upgrades, OS issues, performance, backups, recovery, cleanup.</p>
          </div>
          <div className="card">
            <h3 className="cardTitle">IT Support (Home & Small Business)</h3>
            <p className="cardText">Setup, troubleshooting, printers, email, devices, user support, documentation.</p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Websites & Web Apps</h3>
            <p className="cardText">Modern websites, landing pages, performance + clean UX, maintenance.</p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Networking</h3>
            <p className="cardText">Wi-Fi, routers, mesh, cabling planning, stability and speed optimisation.</p>
          </div>
        </div>
      </Section>

      <Section
        id="security"
        kicker="Security"
        title="Practical Cybersecurity"
        subtitle="No fear marketing — just sensible protection that actually works for normal people and businesses."
      >
        <div className="cards">
          <div className="card">
            <h3 className="cardTitle">Account & Device Hardening</h3>
            <p className="cardText">2FA/MFA setup, password manager, secure recovery, updates, safe defaults.</p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Backup Strategy</h3>
            <p className="cardText">Simple, reliable backups (3-2-1 approach), tested restore, ransomware awareness.</p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Email Safety</h3>
            <p className="cardText">Phishing prevention, mailbox security basics, user training that makes sense.</p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Small Business Security Baseline</h3>
            <p className="cardText">Basic policies, device control, access rules, clean documentation.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
