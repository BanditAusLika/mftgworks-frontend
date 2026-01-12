import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import Certs from "./components/Certs.jsx";
import Pricing from "./components/Pricing.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <div className="bgFX" aria-hidden="true" />
      <Navbar />
      <main className="main">
        <Hero />
        <Services />
        <WhyChoose />
        <Certs />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
