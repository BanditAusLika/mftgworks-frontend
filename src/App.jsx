import { useEffect, useState } from "react";
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
  Radio,
  ServerCog,
  Zap,
  Wrench,
  X,
} from "lucide-react";
import { seoPageByPath, serviceAreas, servicePageLinks } from "./seoPages.js";

const phoneDisplay = "0402 940 099";
const phoneLink = "+61402940099";
const businessEmail = "info-contact@mftgworks.org";
const whatsappLink = `https://wa.me/${phoneLink.replace("+", "")}?text=${encodeURIComponent("Hi Alex, I found MFTG IT Solutions online and need help with: ")}`;

const services = [
  {
    icon: BriefcaseBusiness,
    eyebrow: "FOR SMALL BUSINESS",
    title: "Business IT Support",
    slug: "business-it-support-melbourne",
    text: "On-site and remote support for workstations, Microsoft 365, email, printers, users and day-to-day technology issues.",
    points: ["New PC and user setup", "Microsoft 365 support", "On-call troubleshooting"],
  },
  {
    icon: Laptop,
    eyebrow: "DIAGNOSE & REPAIR",
    title: "PC & Laptop Repairs",
    slug: "computer-repairs-melbourne",
    text: "Hands-on fault diagnosis and repair for computers that are slow, unstable, damaged or no longer starting correctly.",
    points: ["Hardware diagnostics", "Laptop and desktop repairs", "Post-repair testing"],
  },
  {
    icon: Wrench,
    eyebrow: "INSTALL & MAINTAIN",
    title: "Installations & Upgrades",
    slug: "hardware-installations-upgrades-melbourne",
    text: "New computer installations, workstation rollouts, component upgrades, peripherals and preventative maintenance for homes and workplaces.",
    points: ["Workstation installation", "SSD, RAM and batteries", "Maintenance and health checks"],
  },
  {
    icon: MonitorCog,
    eyebrow: "SOFTWARE SUPPORT",
    title: "Software Setup & Recovery",
    slug: "software-support-melbourne",
    text: "Windows, drivers, applications, Microsoft 365, updates and system recovery configured cleanly and tested before handover.",
    points: ["Windows and software installs", "Microsoft 365 and email", "Troubleshooting and recovery"],
  },
  {
    icon: Network,
    eyebrow: "CONNECTIVITY",
    title: "Wi-Fi & Networking",
    slug: "network-troubleshooting-melbourne",
    text: "Troubleshooting and setup for routers, coverage problems, shared devices, connectivity and secure home or office networks.",
    points: ["Wi-Fi optimisation", "Router and device setup", "Network fault finding"],
  },
  {
    icon: Cpu,
    eyebrow: "CUSTOM SYSTEMS",
    title: "Custom PC Builds",
    slug: "custom-pc-builds-melbourne",
    text: "Balanced systems designed around your workload, from gaming and content creation to reliable business desktops.",
    points: ["Component selection", "Clean assembly", "Testing and optimisation"],
  },
  {
    icon: MonitorCog,
    eyebrow: "WEB ENGINEERING",
    title: "Custom Websites, Booking Systems & Business Automation",
    slug: "web-development-business-automation-melbourne",
    text: "Give customers a quicker way to book, request a quote or place an enquiry. Connect the details to the tools your team already uses.",
    points: ["React and Node.js websites", "Booking and quote systems", "Python workflow automation"],
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
    q: "Can you install software and maintain our computers?",
    a: "Yes. MFTG can install and configure Windows applications, Microsoft 365, drivers, updates and peripherals, then provide scheduled health checks and practical ongoing maintenance.",
  },
];

function Logo({ onOpen }) {
  return (
    <button className="brand logoTrigger" type="button" onClick={onOpen} aria-label="Enlarge the MFTG IT Solutions logo">
      <img
        className="brandLogo"
        src="/brand/mftg-logo.webp"
        width="768"
        height="768"
        alt=""
        aria-hidden="true"
      />
      <span className="brandWords">
        <strong>MFTG</strong>
        <small>IT SOLUTIONS</small>
      </span>
    </button>
  );
}

function LogoLightbox({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="logoLightbox" role="dialog" aria-modal="true" aria-label="MFTG IT Solutions logo viewer" onClick={onClose}>
      <button className="logoLightboxClose" type="button" onClick={onClose} aria-label="Close logo viewer" autoFocus>
        <X size={28} />
      </button>
      <button className="logoLightboxStage" type="button" onClick={onClose} aria-label="Close enlarged logo">
        <img src="/brand/mftg-logo.webp" width="768" height="768" alt="MFTG IT Solutions" />
        <span>Click the logo or background to close</span>
      </button>
    </div>
  );
}

function SiteHeader({ menuOpen, setMenuOpen, onLogoOpen, isHome = false }) {
  const homePrefix = isHome ? "" : "/";
  return (
    <header className="siteHeader" data-testid="site-header">
      <div className="container headerInner">
        <Logo onOpen={onLogoOpen} />
        <button
          className="menuButton"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation" data-testid="main-navigation">
          <a href={`${homePrefix}#services`} onClick={() => setMenuOpen(false)}>Services</a>
          <a href={`${homePrefix}#experience`} onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="/service-areas-melbourne/" onClick={() => setMenuOpen(false)}>Service areas</a>
          <a href={`${homePrefix}#faq`} onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="navCta" href={`${homePrefix}#contact`} onClick={() => setMenuOpen(false)}>Get support <ArrowRight size={16} /></a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ onLogoOpen }) {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div><Logo onOpen={onLogoOpen} /><p>Computer repairs, installations, software support and IT maintenance across Melbourne.</p></div>
        <div>
          <strong>Services</strong>
          {servicePageLinks.slice(0, 6).map((page) => <a href={`/${page.slug}/`} key={page.slug}>{page.eyebrow.replace(" Melbourne", "")}</a>)}
          <a href="/service-areas-melbourne/">Melbourne service areas</a>
        </div>
        <div><strong>Contact</strong><a href={`tel:${phoneLink}`}>{phoneDisplay}</a><a href={`mailto:${businessEmail}`}>{businessEmail}</a><span>Mobile service · No public shopfront</span></div>
      </div>
      <div className="container footerBottom"><span>© {new Date().getFullYear()} MFTG IT Solutions. All rights reserved.</span><span>Melbourne, Victoria · ABN 99 186 061 741</span></div>
    </footer>
  );
}

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

function updatePageMetadata(page) {
  const url = `https://mftgworks.org/${page.slug}/`;
  document.title = page.seoTitle;
  setMeta('meta[name="description"]', page.description);
  setMeta('meta[name="robots"]', "index, follow");
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:title"]', page.seoTitle);
  setMeta('meta[property="og:description"]', page.description);
  setMeta('meta[name="twitter:title"]', page.seoTitle);
  setMeta('meta[name="twitter:description"]', page.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);

  document.getElementById("page-structured-data")?.remove();
  const schema = document.createElement("script");
  schema.id = "page-structured-data";
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.type === "areas" ? "WebPage" : "Service",
        "@id": `${url}#${page.type === "areas" ? "webpage" : "service"}`,
        name: page.eyebrow,
        description: page.description,
        url,
        provider: { "@id": "https://mftgworks.org/#business" },
        areaServed: { "@type": "City", name: "Melbourne" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mftgworks.org/" },
          { "@type": "ListItem", position: 2, name: page.eyebrow, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  });
  document.head.appendChild(schema);
}

function SeoLandingPage({ page, menuOpen, setMenuOpen, onLogoOpen, logoOpen, onLogoClose }) {
  useEffect(() => {
    updatePageMetadata(page);
    window.scrollTo(0, 0);
  }, [page]);

  const relatedPages = servicePageLinks.filter((candidate) => candidate.slug !== page.slug).slice(0, 3);
  return (
    <div className="siteShell servicePageShell" id="top">
      <a className="skipLink" href="#main">Skip to content</a>
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} onLogoOpen={onLogoOpen} />
      <main id="main">
        <section className="serviceHero">
          <div className="scanBeam" aria-hidden="true" />
          <div className="container serviceHeroGrid">
            <div>
              <div className="eyebrow"><span /> {page.eyebrow}</div>
              <h1>{page.title}</h1>
              <p>{page.lead}</p>
              <div className="heroActions">
                <a className="button primary" href={`tel:${phoneLink}`}><Phone size={18} /> Call {phoneDisplay}</a>
                <a className="button secondary" href="/#contact">Request a quote <ArrowRight size={18} /></a>
              </div>
            </div>
            <aside className="serviceHeroPanel" aria-label="Service information">
              <small>MFTG // SERVICE PROFILE</small>
              <strong>On-site across Melbourne</strong>
              <span>Remote support where practical</span>
              <span>Direct contact with the technician</span>
              <span>Scope confirmed before work begins</span>
              <div><BadgeCheck /> ABN 99 186 061 741</div>
            </aside>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container"><a href="/">Home</a><span>/</span><span aria-current="page">{page.eyebrow}</span></div>
        </nav>

        <section className="section serviceDetailSection">
          <div className="container detailIntroGrid">
            <div><span className="sectionNumber">THE SERVICE</span><h2>Support matched to the problem—not a generic package.</h2></div>
            <div className="longCopy">{page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        <section className="section serviceScopeSection">
          <div className="container scopeGrid">
            <div>
              <span className="sectionNumber">WHAT IS COVERED</span>
              <h2>Practical help from diagnosis through verification.</h2>
              <p>{page.proof}</p>
            </div>
            <ul>{page.scope.map((item) => <li key={item}><Check size={17} /> <span>{item}</span></li>)}</ul>
          </div>
        </section>

        <section className="section audienceSection">
          <div className="container">
            <div className="sectionIntro splitIntro">
              <div><span className="sectionNumber">WHO & WHERE</span><h2>{page.type === "areas" ? "Areas currently covered." : "Built for real Melbourne customers."}</h2></div>
              <p>{page.type === "areas" ? "These locations describe the practical metropolitan coverage area; availability and travel are confirmed for every booking." : "The service is suitable for customers who want direct, accountable technical support and a clear explanation of the result."}</p>
            </div>
            <div className="audienceChips">{page.audiences.map((audience) => <span key={audience}><MapPin size={15} /> {audience}</span>)}</div>
          </div>
        </section>

        <section className="section processSection serviceProcessSection">
          <div className="container">
            <div className="sectionIntro centeredIntro"><span className="sectionNumber">THE PROCESS</span><h2>Clear steps before chargeable work begins.</h2></div>
            <div className="serviceProcessGrid">
              {page.process.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="container faqGrid">
            <div className="faqIntro"><span className="sectionNumber">SERVICE FAQ</span><h2>Useful details before booking.</h2><p>Send the problem in plain language. You do not need to diagnose it first.</p></div>
            <div className="accordion">{page.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="section relatedSection">
          <div className="container">
            <div className="sectionIntro splitIntro"><div><span className="sectionNumber">RELATED SUPPORT</span><h2>More ways MFTG can help.</h2></div><p>Services can be combined when a problem involves hardware, software and connectivity.</p></div>
            <div className="relatedGrid">{relatedPages.map((related) => <a href={`/${related.slug}/`} key={related.slug}><small>{related.eyebrow}</small><strong>{related.title}</strong><ArrowRight /></a>)}</div>
          </div>
        </section>

        <section className="serviceCta">
          <div className="container serviceCtaInner"><div><small>MFTG // MELBOURNE</small><h2>Tell me what needs to work.</h2><p>Include the device or site, the problem, your suburb and when you need assistance.</p></div><div><a className="button primary" href="/#contact">Request support <ArrowRight size={18} /></a><a className="button secondary" href={`mailto:${businessEmail}`}><Mail size={18} /> Email MFTG</a></div></div>
        </section>
      </main>
      <SiteFooter onLogoOpen={onLogoOpen} />
      <LogoLightbox open={logoOpen} onClose={onLogoClose} />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [serviceChoice, setServiceChoice] = useState("");
  const [formReference, setFormReference] = useState("");
  const [formError, setFormError] = useState("");
  const [logoOpen, setLogoOpen] = useState(false);

  useEffect(() => {
    if (!logoOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setLogoOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [logoOpen]);

  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const activeSeoPage = seoPageByPath[normalizedPath];

  if (activeSeoPage) {
    return (
      <SeoLandingPage
        page={activeSeoPage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onLogoOpen={() => setLogoOpen(true)}
        logoOpen={logoOpen}
        onLogoClose={() => setLogoOpen(false)}
      />
    );
  }

  const requestService = (service) => {
    setServiceChoice(service);
    setFormState("idle");
    setFormReference("");
    setFormError("");
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector('input[name="name"]')?.focus({ preventScroll: true });
    }, 250);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setFormState("sending");
    setFormReference("");
    setFormError("");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "Submission failed");
      form.reset();
      setServiceChoice("");
      setFormReference(result.reference || "");
      setFormState("success");
      window.setTimeout(() => {
        document.querySelector('[data-testid="enquiry-success"]')?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "The enquiry could not be sent.");
      setFormState("error");
    }
  };

  const startAnotherEnquiry = () => {
    setFormState("idle");
    setFormReference("");
    setFormError("");
    window.setTimeout(() => document.querySelector('input[name="name"]')?.focus(), 50);
  };

  return (
    <div className="siteShell" id="top">
      <a className="skipLink" href="#main">Skip to content</a>

      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} onLogoOpen={() => setLogoOpen(true)} isHome />

      <main id="main">
        <section className="hero">
          <div className="heroGlow" aria-hidden="true" />
          <div className="scanBeam" aria-hidden="true" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow"><span /> MFTG // Melbourne service network</div>
              <h1>Technology fixed.<br /><em>Systems online.</em></h1>
              <p className="heroLead">
                Computer repairs, workstation rollouts and Microsoft 365 support across Melbourne. I also build websites, booking systems and Python automations for local businesses.
              </p>
              <div className="heroActions">
                <a className="button primary" href={`tel:${phoneLink}`}><Phone size={18} /> Call {phoneDisplay}</a>
                <button className="button secondary" type="button" onClick={() => requestService("")}>Request a quote <ArrowRight size={18} /></button>
              </div>
              <div className="heroProof" aria-label="Business highlights">
                <span><BadgeCheck size={18} /> ABN registered</span>
                <span><MapPin size={18} /> Melbourne-wide</span>
                <span><Headphones size={18} /> On-site & remote</span>
              </div>
            </div>

            <div className="heroVisual" aria-label="MFTG service overview">
              <button className="heroBadgeLogo logoTrigger" type="button" onClick={() => setLogoOpen(true)} aria-label="Enlarge the MFTG IT Solutions logo">
                <img src="/brand/mftg-logo.webp" width="768" height="768" alt="MFTG IT Solutions" />
              </button>
              <div className="signalCard mainSignal">
                <div className="signalTop"><span className="liveDot" /> SUPPORT NODE ONLINE</div>
                <div className="signalIcon"><MonitorCog /></div>
                <h2>One technician.<br />Complete support.</h2>
                <p>Hardware, software, installations and networks—without being passed between departments.</p>
                <div className="systemReadout">
                  <span><Radio /> STATUS</span><strong>READY</strong>
                  <span><ServerCog /> COVERAGE</span><strong>MELBOURNE</strong>
                  <span><Zap /> RESPONSE</span><strong>DIRECT</strong>
                </div>
                <div className="signalTags" aria-label="Support capabilities">
                  <span><ShieldCheck /> Security</span>
                  <span><MonitorCog /> Software</span>
                  <span><HardDrive /> Hardware</span>
                </div>
              </div>
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
              <p>From one frustrating laptop to a small office rollout, MFTG diagnoses, installs, repairs and maintains the technology you depend on.</p>
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
                    <div className="serviceActions">
                      <a className="serviceAction" href={`/${service.slug}/`}>Explore this service <ArrowRight size={16} /></a>
                      <button className="serviceQuote" type="button" onClick={() => requestService(service.title)}>Request support</button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2>Melbourne client portfolio</h2>
            <div className="portfolioGrid">
              <article className="serviceCard"><img loading="lazy" src="/brand/mba.jpg" alt="MBA Cleaning Services website homepage" /><h3>MBA Cleaning Services</h3>
                <p>A React website for a Deer Park cleaning team. Customers can inspect completed work and send the property details MBA needs to quote.</p>
                <a className="serviceAction" href="https://mbacleaningservice.com/">Visit MBA Cleaning Services <ArrowRight size={16} /></a></article>
              <article className="serviceCard"><img loading="lazy" src="/brand/ramonda.jpg" alt="Ramonda Natalie catering website homepage" /><h3>Ramonda Natalie</h3>
                <p>A handmade Yugoslav pastry catalogue with occasion enquiries routed through Netlify Forms to Natalija’s Melbourne kitchen.</p>
                <a className="serviceAction" href="https://ramondanatalie.com/">Visit Ramonda Natalie <ArrowRight size={16} /></a></article>
            </div>
          </div>
        </section>
        <section className="section" id="business-care"><div className="container">
          <h2>MFTG Complete Business Care</h2><p><strong>A$299 per month</strong></p>
          <p>Website maintenance, Microsoft 365 email and account security, and priority access to on-site hardware support across Melbourne’s west.</p>
          <div className="heroActions"><button className="button primary" onClick={() => requestService("MFTG Complete Business Care")}>Discuss business care</button>
          <a className="button secondary" href="/managed-it-support-melbourne-west/">View service details</a></div>
        </div></section>

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
                <button className="coreMark logoTrigger" type="button" onClick={() => setLogoOpen(true)} aria-label="Enlarge the MFTG IT Solutions logo">
                  <img src="/brand/mftg-logo.webp" width="768" height="768" alt="MFTG IT Solutions" />
                </button>
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
              <button className="textLink" type="button" onClick={() => requestService("")}>Talk directly with Alex <ArrowRight size={17} /></button>
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
              <div><Check /><span><strong>Broad capability</strong>Hardware, software, installations and networking handled together.</span></div>
              <div><Check /><span><strong>Local and flexible</strong>On-site across Melbourne, with remote help where practical.</span></div>
            </div>
          </div>
        </section>

        <section className="section homeAreasSection" id="service-areas">
          <div className="container homeAreasGrid">
            <div>
              <span className="sectionNumber">MELBOURNE SERVICE AREA</span>
              <h2>Mobile support where Melbourne works and lives.</h2>
              <p>MFTG provides on-site support across metropolitan Melbourne, with remote assistance Australia-wide for suitable software and configuration issues. Travel and timing are confirmed before booking.</p>
              <a className="button secondary" href="/service-areas-melbourne/">View service-area details <ArrowRight size={18} /></a>
            </div>
            <div className="areaList" aria-label="Representative Melbourne service areas">
              {serviceAreas.slice(0, 9).map((area) => <span key={area}><MapPin size={15} /> {area}</span>)}
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
                <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageSquareText /><span><small>WHATSAPP</small><strong>Start a direct chat</strong></span></a>
                <a href={`mailto:${businessEmail}`}><Mail /><span><small>BUSINESS EMAIL</small><strong>{businessEmail}</strong></span></a>
                <div><MapPin /><span><small>SERVICE AREA</small><strong>Melbourne, Victoria</strong></span></div>
              </div>
              <p className="businessMeta">MFTG IT Solutions · ABN 99 186 061 741</p>
              <button className="contactLogo logoTrigger" type="button" onClick={() => setLogoOpen(true)} aria-label="Enlarge the MFTG IT Solutions logo">
                <img src="/brand/mftg-logo.webp" width="768" height="768" alt="MFTG IT Solutions" />
                <span>Click to view the full emblem</span>
              </button>
            </div>

            <div className="formPanel">
              {formState === "success" ? (
                <div className="formSuccess" role="status" aria-live="polite" data-testid="enquiry-success">
                  <BadgeCheck size={54} />
                  <small>ENQUIRY SECURED</small>
                  <h3>Request received</h3>
                  <p>Your details have been recorded successfully. MFTG will review the request and contact you directly.</p>
                  {formReference && <strong>REFERENCE · {formReference}</strong>}
                  <button className="button secondary" type="button" onClick={startAnotherEnquiry}>Send another enquiry</button>
                </div>
              ) : (
                <>
                  <div className="formHeading"><div><small>REQUEST SUPPORT</small><h3>Tell me what you need</h3></div><Send /></div>
                  <form name="mftg-enquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitForm} onChange={() => { if (formState !== "idle") setFormState("idle"); if (formError) setFormError(""); }} data-testid="enquiry-form">
                    <input type="hidden" name="form-name" value="mftg-enquiry" />
                    <input type="hidden" name="subject" value="New MFTG support enquiry" />
                    <p className="hiddenField"><label>Do not fill this out: <input name="bot-field" /></label></p>
                    <div className="fieldRow">
                      <label><span>Your name *</span><input name="name" autoComplete="name" required /></label>
                      <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" /></label>
                    </div>
                    <label><span>Email address *</span><input name="email" type="email" autoComplete="email" required /></label>
                    <label>
                      <span>What can I help with? *</span>
                      <select name="service" required value={serviceChoice} onChange={(event) => setServiceChoice(event.target.value)}>
                        <option value="" disabled>Select a service</option>
                        {services.map(({ title }) => <option key={title}>{title}</option>)}
                        <option>MFTG Complete Business Care</option>
                        <option>Something else</option>
                      </select>
                    </label>
                    <label><span>Message *</span><textarea name="message" rows="5" minLength="3" placeholder="Device, problem, suburb and when you need help..." required /></label>
                    <button className="button primary submitButton" type="submit" disabled={formState === "sending"}>
                      {formState === "sending" ? "Sending..." : "Send enquiry"} <ArrowRight size={18} />
                    </button>
                    <div className={`formStatus ${formState}`} aria-live="polite">
                      {formState === "error" && <>{formError || "The form could not send."} Please email <a href={`mailto:${businessEmail}`}>{businessEmail}</a>.</>}
                    </div>
                    <p className="formNote"><ShieldCheck size={14} /> Your details are used only to respond to your enquiry.</p>
                  </form>
                </>
              )}
              <div className="formFallback">
                <span>Prefer direct contact?</span>
                <a href={`tel:${phoneLink}`}>Call now</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onLogoOpen={() => setLogoOpen(true)} />
      <LogoLightbox open={logoOpen} onClose={() => setLogoOpen(false)} />
    </div>
  );
}

export default App;
