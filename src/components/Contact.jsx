import React, { useState } from "react";
import Section from "./Section.jsx";

const NAME = "S. Alex Radenovic";
const PHONE = "+61402940099";
const PHONE_DISPLAY = "+61 402 940 099";
const EMAIL = "info-contact@mftgworks.org";
const ABN = "99186061741";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "IT Support", message: "" });

  const openMail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`MFTG Works — ${form.service} request`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}\n\n— Sent via MFTG Works website`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Get In Touch"
      subtitle="Call, email, or use the form — it opens your email app with the full request pre-filled."
    >
      <div className="cards">
        <div className="card">
          <h3 className="cardTitle">{NAME}</h3>
          <p className="cardText">
            ABN: <span style={{ color: "rgba(234,246,255,.92)" }}>{ABN}</span>
            <br />
            Email: <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>{EMAIL}</a>
            <br />
            Phone: <a href={`tel:${PHONE}`} style={{ textDecoration: "underline" }}>{PHONE_DISPLAY}</a>
          </p>
          <div className="btnRow">
            <a className="btn" href={`tel:${PHONE}`}>Call Now</a>
            <a className="btn btnSecondary" href={`mailto:${EMAIL}?subject=MFTG%20Works%20-%20Request`}>Email Now</a>
          </div>
        </div>

        <div className="card">
          <h3 className="cardTitle">Request Form</h3>
          <form className="form" onSubmit={openMail}>
            <div className="field">
              <label className="label">Your Name</label>
              <input className="input" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
            </div>
            <div className="field">
              <label className="label">Phone (optional)</label>
              <input className="input" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
            </div>
            <div className="field fieldFull">
              <label className="label">Service</label>
              <select className="input" value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}>
                <option>IT Support</option>
                <option>PC / Laptop Repair</option>
                <option>Website / Web App</option>
                <option>Cybersecurity Baseline</option>
                <option>Networking / Wi-Fi</option>
              </select>
            </div>
            <div className="field fieldFull">
              <label className="label">Message</label>
              <textarea className="textarea" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
            </div>
            <div className="btnRow">
              <button className="btn" type="submit">Send Email</button>
              <a className="btn btnSecondary" href={`mailto:${EMAIL}`}>Open Mail App</a>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
