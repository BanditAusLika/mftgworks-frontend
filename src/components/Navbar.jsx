import React from "react";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <div className="brand" role="button" tabIndex={0} onClick={() => scrollToId("top")}>
          <div className="brandTop">MFTG Works</div>
          <div className="brandBottom">IT Services • Cybersecurity • Web</div>
        </div>

        <nav className="navLinks" aria-label="Primary">
          <button className="navLink" onClick={() => scrollToId("services")}>Services</button>
          <button className="navLink" onClick={() => scrollToId("security")}>Security</button>
          <button className="navLink" onClick={() => scrollToId("credentials")}>Credentials</button>
          <button className="navLink" onClick={() => scrollToId("pricing")}>Pricing</button>
          <button className="navLink" onClick={() => scrollToId("process")}>Process</button>
          <button className="navLink" onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
