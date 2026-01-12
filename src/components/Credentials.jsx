import React from "react";
import Section from "./Section.jsx";

export default function Credentials() {
  return (
    <Section
      id="credentials"
      title="Credentials"
      subtitle="Professional, clean, and accurate. No grades. No nonsense."
    >
      <div className="grid2">
        <div className="card">
          <h3 className="h3">Certificates / Training</h3>
          <ul className="list">
            <li><strong>Institut für Lernsysteme (ILS), Hamburg</strong> — Python Programmer</li>
            <li><strong>WBS Coding School (Berlin-based)</strong> — Full-Stack Web & App Development</li>
            <li><strong>Google Professional Certificates</strong> — IT Support; Cybersecurity</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="h3">What this means in practice</h3>
          <ul className="list">
            <li>Hands-on troubleshooting + structured problem solving</li>
            <li>Security-first mindset: reduce risk, harden systems</li>
            <li>Modern web dev: build, ship, maintain</li>
            <li>Clear communication and direct delivery</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
