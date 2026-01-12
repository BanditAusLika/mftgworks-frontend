import React from "react";
import Section from "./Section";

const CONTACT_EMAIL = "info-contact@mftgworks.org";
const PHONE_DISPLAY = "+61 401 216 781";
const PHONE_TEL = "+61401216781";

function buildMailto({ name, service, message }) {
  const subject = `MFTG Works enquiry – ${service || "Service"}`;
  const body = [
    `Name: ${name || ""}`,
    `Service: ${service || ""}`,
    "",
    "Message:",
    message || "",
    "",
    "—",
    "Sent via mftgworks.org contact form",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [name, setName] = React.useState("");
  const [service, setService] = React.useState("IT Support");
  const [message, setMessage] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Static site: we trigger a real email draft via mailto, no server required.
    const href = buildMailto({ name, service, message });
    window.location.href = href;
  };

  return (
    <Section id="contact" title="Contact" subtitle="Send the goal/problem and your timeframe. I’ll reply with the next step and a scoped quote.">
      <div className="grid2">
        {/* LEFT: direct + form */}
        <div className="card">
          <div className="kicker">DIRECT</div>

          <div className="list" style={{ marginTop: 6 }}>
            <div className="row">
              <div className="label">Email</div>
              <div className="val">
                <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
            <div className="row">
              <div className="label">Phone</div>
              <div className="val">
                <a className="link" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="row">
              <div className="label">Call hours</div>
              <div className="val">9:00–18:00 (Mon–Fri)</div>
            </div>
            <div className="row">
              <div className="label">Service area</div>
              <div className="val">Primarily Melbourne • all suburbs, plus Geelong — available across Victoria (on‑site or remote depending on the job).</div>
            </div>
          </div>

          <div className="sep" style={{ margin: "18px 0" }} />

          <div className="kicker">FAST INTAKE</div>

          <form onSubmit={onSubmit} className="form" style={{ marginTop: 10 }}>
            <label className="field">
              <span className="fieldLabel">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                type="text"
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span className="fieldLabel">Service</span>
              <select value={service} onChange={(e) => setService(e.target.value)} className="input">
                <option>IT Support</option>
                <option>Web Development</option>
                <option>Cybersecurity (Practical)</option>
                <option>Automation / Scripting</option>
                <option>Other</option>
              </select>
            </label>

            <label className="field">
              <span className="fieldLabel">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
                rows={5}
                placeholder="What’s the problem / goal? Any deadline? On‑site or remote preference?"
              />
            </label>

            <div className="actions">
              <button className="btn primary" type="submit">Send email</button>
              <a className="btn" href={`tel:${PHONE_TEL}`}>Call</a>
            </div>
          </form>
        </div>

        {/* RIGHT: small info cards */}
        <div className="stack">
          <div className="card">
            <div className="kicker">WHAT YOU GET</div>
            <div style={{ fontWeight: 800, marginTop: 6 }}>Scope → quote → clean execution</div>
            <div className="muted" style={{ marginTop: 6 }}>Clear deliverables. Clear pricing. Professional communication.</div>
          </div>

          <div className="card">
            <div className="kicker">ABN</div>
            <div style={{ fontWeight: 900, letterSpacing: 0.2, marginTop: 6 }}>ABN 99 186 061 741</div>
            <div className="muted" style={{ marginTop: 6 }}>Professional invoices and standard business practice.</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
