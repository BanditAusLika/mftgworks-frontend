import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <span className="footerStrong">MFTG Works</span> —  IT Solutions
        </div>
        <div>
          ABN: <span className="footerStrong">99186061741</span> · Email:{" "}
          <a className="footerStrong" href="mailto:info-contact@mftgworks.org">info-contact@mftgworks.org</a>
        </div>
      </div>
    </footer>
  );
}
