import React from "react";

const items = [
  { t: "Hardening & Updates", d: "Secure baseline configuration, updates, browser hardening, safe defaults, minimal attack surface." },
  { t: "Account Protection", d: "Password manager setup, MFA rollout, recovery options, and clean access control." },
  { t: "Privacy & Hygiene", d: "Remove junkware, reduce tracking, improve device hygiene, and explain what matters vs. what doesn’t." },
  { t: "Backup & Recovery", d: "Backups that actually work when everything goes sideways. Test restore paths, not wishful thinking." },
  { t: "Small Business Security", d: "Email security basics, device rules, staff guidance, and practical policy without corporate nonsense." },
  { t: "Incident Triage", d: "If you think something is compromised: isolate, assess, contain, and recover with evidence-friendly steps." },
];

export default function Security(){
  return (
    <div className="grid">
      {items.map((x) => (
        <div key={x.t} className="col4 panel">
          <div className="panelBody">
            <h3 className="itemTitle">{x.t}</h3>
            <p className="p">{x.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
