import React from "react";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 78; // sticky nav offset
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navbar() {
  return (
    <div className="navWrap">
      <div className="container">
        <nav className="nav" aria-label="Primary navigation">
          <button className="brand" onClick={() => scrollToId("top")} type="button" aria-label="Go to top">
            <span className="brandDot" aria-hidden="true" />
            <span>MFTG Works</span>
          </button>

          <div className="navLinks">
            {LINKS.map((l) => (
              <button key={l.id} className="navLink" onClick={() => scrollToId(l.id)} type="button">
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
