import React from "react";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const onNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#top" onClick={(e) => onNav(e, "#top")}>
          <span className="brandMark" />
          <span className="brandText">MFTG Works</span>
        </a>

        <nav className="nav">
          {nav.map((n) => (
            <a
              key={n.href}
              className="navLink"
              href={n.href}
              onClick={(e) => onNav(e, n.href)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a className="btn btnPrimary" href="#contact" onClick={(e) => onNav(e, "#contact")}>
          Get a quote
        </a>
      </div>
    </header>
  );
}
