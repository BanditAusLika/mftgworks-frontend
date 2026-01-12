import React from "react";
import Section from "./Section.jsx";

export default function Certs() {
  return (
    <Section
      id="credentials"
      kicker="Credentials"
      title="Certificates & Training"
      subtitle="Professional and verifiable training. No fake fluff, no random claims."
    >
      <div className="cards">
        <div className="card">
          <h3 className="cardTitle">Institut für Lernsysteme (ILS), Hamburg</h3>
          <p className="cardText">Python Programmer (Certificate)</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">WBS Coding School (Berlin-based)</h3>
          <p className="cardText">Full-Stack Web & App Development (Training)</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">Google Professional Certificates</h3>
          <p className="cardText">IT Support + Cybersecurity (Certificates)</p>
        </div>
        <div className="card">
          <h3 className="cardTitle">TAFE (Australia)</h3>
          <p className="cardText">Enrolment / continued training (as applicable)</p>
        </div>
      </div>
    </Section>
  );
}
