import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Cpu,
  Globe2,
  HardDrive,
  Headphones,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  MonitorCog,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const phoneDisplay = "0401 276 781";
const phoneLink = "+61401276781";
const businessEmail = "info-contact@mftgworks.org";
const secondEmail = "ai.de.f2020@gmail.com";

const services = [
  {
    icon: BriefcaseBusiness,
    eyebrow: "FOR SMALL BUSINESS",
    title: "Business IT Support",
    text: "On-site and remote support for workstations, Microsoft 365, email, printers, users and day-to-day technology issues.",
    points: ["New PC and user setup", "Microsoft 365 support", "On-call troubleshooting"],
  },
  {
    icon: Laptop,
    eyebrow: "FOR HOME",
    title: "Home IT Support",
    text: "Clear, patient help with slow computers, new devices, Wi-Fi, printers, software and technology that simply refuses to cooperate.",
    points: ["PC and laptop help", "Wi-Fi and printers", "Setup and data transfer"],
  },
  {
    icon: Wrench,
    eyebrow: "HARDWARE",
    title: "Repairs & Upgrades",
    text: "Commercial hardware experience applied to practical diagnosis, component replacement, upgrades and post-repair testing.",
    points: ["SSD, RAM and batteries", "Hardware diagnostics", "Performance upgrades"],
  },
  {
    icon: Cpu,
    eyebrow: "CUSTOM SYSTEMS",
    title: "Custom PC Builds",
    text: "Balanced systems designed around your actual workload, from gaming and content creation to reliable business desktops.",
    points: ["Component selection", "Clean assembly", "Testing and optimisation"],
  },
  {
    icon: Network,
    eyebrow: "CONNECTIVITY",
    title: "Wi-Fi & Networking",
    text: "Troubleshooting and setup for routers, coverage problems, shared devices, connectivity and secure home or office networks.",
    points: ["Wi-Fi optimisation", "Router and device setup", "Network fault finding"],
  },
  {
    icon: Code2,
    eyebrow: "DIGITAL PRESENCE",
    title: "Websites & Maintenance",
    text: "Fast, responsive websites for Melbourne businesses, with domains, hosting, SSL, updates and ongoing maintenance handled properly.",
    points: ["Business websites", "Hosting and SSL", "Repairs and maintenance"],
  },
];

const experience = [
  {
    label: "Dell field service",
    title: "Commercial hardware support",
    text: "On-site diagnosis, component replacement, testing, service documentation and customer sign-off across government, healthcare, education, banking, council, retail and industrial environments.",
  },
  {
    label: "Allied deployments",
    title: "Enterprise rollout experience",
    text: "Workstation deployments, technology refresh projects, office relocations, hardware installation, cabling and validation in large corporate and university environments.",
  },
  {
    label: "MFTG IT Solutions",
    title: "One accountable local technician",
    text: "Direct support from the person doing the work—combining hands-on IT support, hardware expertise and full-stack development capability.",
  },
];

const faqs = [
  {
    q: "Do you service all of Melbourne?",
    a: "Yes. MFTG provides mobile support across metropolitan Melbourne. Travel and timing are confirmed before the booking so there are no surprises.",
  },
  {
    q: "Can you help remotely?",
    a: "Yes. Many software, email, Microsoft 365 and general support issues can be handled remotely. If the problem needs hands-on work, an on-site visit can be arranged.",
  },
  {
    q: "Do you repair Dell computers?",
    a: "Yes. The owner has commercial Dell field-service experience. MFTG is an independent business and does not claim to be an authorised Dell warranty repair centre.",
  },
  {
    q: "Do you support small businesses without a contract?",
    a: "Yes. One-off help, project work and ongoing support are all available. The right option depends on the number of users, devices and the type of support required.",
  },
  {
    q: "Can you build or fix my business website?",
    a: "Yes. MFTG builds responsive small-business websites and can help with hosting, domains, SSL, website repairs, maintenance and contact forms.",
  },
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="MFTG IT Solutions home">
      <span className="brandMark">M</span>
      <span className="brandWords">
        <strong>MFTG</strong>
        <small>IT SOLUTIONS</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");

  const submitForm = async (event) => {
    event.preventDefault();
    setFormState("sending");
    const body = new URLSearchParams(new FormData(event.currentTarget)).toString();
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error("Submission failed");
      event.currentTarget.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="siteShell" id="top">
      <a className="skipLink" href="#main">Skip to content</a>

      <header className="siteHeader">
        <div className="container headerInner">
          <Logo />
          <button
            className="menuButton"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="navCta" href="#contact" onClick={() => setMenuOpen(false)}>Get support <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="heroGlow" aria-hidden="true" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow"><span /> Mobile IT support across Melbourne</div>
              <h1>Technology fixed.<br /><em>Business moving.</em></h1>
              <p className="heroLead">
                Practical IT support, computer repairs and business websites—delivered by a technician with commercial Dell field-service and enterprise deployment experience.
              </p>
              <div className="heroActions">
                <a className="button primary" href={`tel:${phoneLink}`}><Phone size={18} /> Call {phoneDisplay}</a>
                <a className="button secondary" href="#contact">Request a quote <ArrowRight size={18} /></a>
              </div>
              <div className="heroProof" aria-label="Business highlights">
                <span><BadgeCheck size={18} /> ABN registered</span>
                <span><MapPin size={18} /> Melbourne-wide</span>
                <span><Headphones size={18} /> On-site & remote</span>
              </div>
            </div>

            <div className="heroVisual" aria-label="MFTG service overview">
              <div className="signalCard mainSignal">
                <div className="signalTop"><span className="liveDot" /> SUPPORT AVAILABLE</div>
                <div className="signalIcon"><MonitorCog /></div>
                <h2>One technician.<br />Complete support.</h2>
                <p>Hardware, software, networks and websites—without being passed between departments.</p>
              </div>
              <div className="floatingChip chipOne"><ShieldCheck /> Practical security</div>
              <div className="floatingChip chipTwo"><Code2 /> Web solutions</div>
              <div className="floatingChip chipThree"><HardDrive /> Hardware repairs</div>
              <div className="orbitalLine" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="trustStrip" aria-label="Experience summary">
          <div className="container trustGrid">
            <div><strong>Dell</strong><span>Field-service experience</span></div>
            <div><strong>Allied</strong><span>Enterprise deployments</span></div>
            <div><strong>Google</strong><span>IT & cybersecurity certified</span></div>
            <div><strong>Melbourne</strong><span>Local mobile support</span></div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionIntro splitIntro">
              <div>
                <span className="sectionNumber">01 / SERVICES</span>
                <h2>IT help that solves the whole problem.</h2>
              </div>
              <p>From one frustrating laptop to a small office rollout, MFTG delivers clear advice, careful work and support matched to what you actually need.</p>
            </div>
            <div className="serviceGrid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="serviceCard" key={service.title}>
                    <div className="serviceIndex">0{index + 1}</div>
                    <div className="serviceIcon"><Icon /></div>
                    <span className="cardEyebrow">{service.eyebrow}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ul>
                      {service.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}
                    </ul>
                    <a href="#contact">Discuss this service <ArrowRight size={16} /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section experienceSection" id="experience">
          <div className="container">
            <div className="sectionIntro splitIntro lightIntro">
              <div>
                <span className="sectionNumber">02 / EXPERIENCE</span>
                <h2>Enterprise standards.<br />Personal service.</h2>
              </div>
              <p>MFTG brings commercial field-service discipline to local homes and small businesses: diagnose carefully, document clearly, test thoroughly and leave the system working.</p>
            </div>
            <div className="experienceGrid">
              {experience.map((item, index) => (
                <article className="experienceCard" key={item.label}>
                  <span>0{index + 1}</span>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="industryLine">
              <span>Experience across</span>
              <div>Government</div><div>Healthcare</div><div>Banking</div><div>Education</div><div>Retail</div><div>Industrial</div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container aboutGrid">
            <div className="aboutVisual">
              <div className="techFrame">
                <div className="frameLabel">MFTG / MELBOURNE</div>
                <div className="coreMark"><span>M</span></div>
                <div className="techReadout"><Sparkles size={16} /> BUILT AROUND PRACTICAL SOLUTIONS</div>
              </div>
            </div>
            <div className="aboutCopy">
              <span className="sectionNumber">03 / ABOUT MFTG</span>
              <h2>Technical depth, explained in plain English.</h2>
              <p>MFTG IT Solutions is operated by Srđan (Alex) Rađenović, a Melbourne-based commercial IT technician and developer.</p>
              <p>Alex’s background combines hands-on Dell hardware field service, enterprise deployment work with Allied, and formal training across IT support, cybersecurity, Python and full-stack development.</p>
              <div className="credentialGrid">
                <div><ShieldCheck /><span><strong>Google certified</strong>IT Support & Cybersecurity</span></div>
                <div><Code2 /><span><strong>Full-stack trained</strong>React, Node.js & Python</span></div>
                <div><Wrench /><span><strong>Dell trained</strong>Commercial hardware field service</span></div>
                <div><Globe2 /><span><strong>Multilingual</strong>English, German & Serbian</span></div>
              </div>
              <a className="textLink" href="#contact">Talk directly with Alex <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="section processSection">
          <div className="container">
            <div className="sectionIntro centeredIntro">
              <span className="sectionNumber">04 / HOW IT WORKS</span>
              <h2>Simple from first message to final test.</h2>
            </div>
            <div className="processGrid">
              <article><span>1</span><MessageSquareText /><h3>Tell me what’s wrong</h3><p>Send the issue, device details and your Melbourne suburb.</p></article>
              <article><span>2</span><Clock3 /><h3>Get a clear next step</h3><p>I’ll confirm whether remote or on-site support makes sense.</p></article>
              <article><span>3</span><MonitorCog /><h3>Repair & verify</h3><p>The work is completed carefully and tested before handover.</p></article>
              <article><span>4</span><BadgeCheck /><h3>Know what was done</h3><p>You receive a clear explanation and practical recommendations.</p></article>
            </div>
          </div>
        </section>

        <section className="section proofSection">
          <div className="container proofGrid">
            <div>
              <span className="sectionNumber">WHY MFTG</span>
              <h2>Support built on real commercial experience.</h2>
            </div>
            <div className="proofList">
              <div><Check /><span><strong>Direct accountability</strong>No call-centre handoffs—you deal with the technician doing the work.</span></div>
              <div><Check /><span><strong>Commercial discipline</strong>Careful diagnostics, testing, documentation and customer confirmation.</span></div>
              <div><Check /><span><strong>Broad capability</strong>Hardware, software, networking and websites handled together.</span></div>
              <div><Check /><span><strong>Local and flexible</strong>On-site across Melbourne, with remote help where practical.</span></div>
            </div>
          </div>
        </section>

        <section className="section faqSection" id="faq">
          <div className="container faqGrid">
            <div className="faqIntro">
              <span className="sectionNumber">05 / FAQ</span>
              <h2>Useful answers before you book.</h2>
              <p>Still unsure? Call or send the problem in plain language. You do not need to diagnose it first.</p>
              <a className="button secondary" href={`tel:${phoneLink}`}><Phone size={18} /> Call now</a>
            </div>
            <div className="accordion">
              {faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{faq.q}<ChevronDown /></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contactSection" id="contact">
          <div className="container contactGrid">
            <div className="contactCopy">
              <span className="sectionNumber">06 / CONTACT</span>
              <h2>Let’s get your technology working.</h2>
              <p>Describe the issue, the device or service you need, and your suburb. MFTG will reply with the best next step.</p>
              <div className="contactMethods">
                <a href={`tel:${phoneLink}`}><Phone /><span><small>CALL OR TEXT</small><strong>{phoneDisplay}</strong></span></a>
                <a href={`mailto:${businessEmail}`}><Mail /><span><small>BUSINESS EMAIL</small><strong>{businessEmail}</strong></span></a>
                <a href={`mailto:${secondEmail}`}><Mail /><span><small>SECONDARY EMAIL</small><strong>{secondEmail}</strong></span></a>
                <div><MapPin /><span><small>SERVICE AREA</small><strong>Melbourne, Victoria</strong></span></div>
              </div>
              <p className="businessMeta">MFTG IT Solutions · ABN 99 186 061 741</p>
            </div>

            <div className="formPanel">
              <div className="formHeading"><div><small>REQUEST SUPPORT</small><h3>Tell me what you need</h3></div><Send /></div>
              <form name="mftg-enquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitForm}>
                <input type="hidden" name="form-name" value="mftg-enquiry" />
                <p className="hiddenField"><label>Do not fill this out: <input name="bot-field" /></label></p>
                <div className="fieldRow">
                  <label><span>Your name *</span><input name="name" autoComplete="name" required /></label>
                  <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" /></label>
                </div>
                <label><span>Email address *</span><input name="email" type="email" autoComplete="email" required /></label>
                <label>
                  <span>What can I help with? *</span>
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Business IT Support</option>
                    <option>Home IT Support</option>
                    <option>Computer Repair or Upgrade</option>
                    <option>Custom PC Build</option>
                    <option>Wi-Fi or Networking</option>
                    <option>Website or Maintenance</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label><span>Message *</span><textarea name="message" rows="5" placeholder="Device, problem, suburb and when you need help..." required /></label>
                <button className="button primary submitButton" type="submit" disabled={formState === "sending"}>
                  {formState === "sending" ? "Sending..." : "Send enquiry"} <ArrowRight size={18} />
                </button>
                <div className={`formStatus ${formState}`} aria-live="polite">
                  {formState === "success" && "Thanks—your enquiry has been sent. MFTG will be in touch."}
                  {formState === "error" && <>The form could not send. Please email <a href={`mailto:${businessEmail}`}>{businessEmail}</a>.</>}
                </div>
                <p className="formNote"><ShieldCheck size={14} /> Your details are used only to respond to your enquiry.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerTop">
          <div><Logo /><p>Mobile IT support, computer repairs and business websites across Melbourne.</p></div>
          <div><strong>Services</strong><a href="#services">Business IT</a><a href="#services">Home IT</a><a href="#services">Repairs & upgrades</a><a href="#services">Websites</a></div>
          <div><strong>Contact</strong><a href={`tel:${phoneLink}`}>{phoneDisplay}</a><a href={`mailto:${businessEmail}`}>{businessEmail}</a><a href={`mailto:${secondEmail}`}>{secondEmail}</a></div>
        </div>
        <div className="container footerBottom"><span>© {new Date().getFullYear()} MFTG IT Solutions. All rights reserved.</span><span>Melbourne, Victoria · ABN 99 186 061 741</span></div>
      </footer>
    </div>
  );
}

export default App;
