import React from "react";

export default function Section({ id, kicker, title, subtitle, children }) {
  return (
    <section id={id} className="container section">
      <div className="sectionHeader">
        <div>
          {kicker ? <div className="kicker">{kicker}</div> : null}
          {title ? <h2 className="title">{title}</h2> : null}
          {subtitle ? <p className="subtitle">{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
