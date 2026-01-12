import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerInner">
          <div>© {year} MFTG Works | ABN 99 186 061 741</div>
          <div>
            <a href="https://mftgworks.org" target="_blank" rel="noreferrer">mftgworks.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
