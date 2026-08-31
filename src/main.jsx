import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { PRODUCT } from "./config";
import "./styles.css";

const lessonGroups = [
  {
    title: "FOCUS & DISCIPLINE",
    items: [
      "Focus on Your Work, Not the Outcome", "Action Beats Waiting for Motivation", "Master Your Mind Before It Masters You",
      "Show Up Even When You Don't Feel Like It", "Discipline Is Built, Not Found", "Protect Your Attention", "Practice Before You Expect Mastery",
    ],
  },
  {
    title: "CONFIDENCE & EMOTIONAL STRENGTH",
    items: [
      "You Are Not Every Mood You're In", "Don't Let Comparison Steal Your Peace", "Stop Performing for Everyone's Approval",
      "Fear Is Not a Stop Sign", "Failure Is Not Your Identity", "Learn to Handle Success", "Don't Let Anger Write Your Decisions",
      "Don't Become a Slave to Your Emotions", "Build Quiet, Unshakable Confidence",
    ],
  },
  {
    title: "PURPOSE & CLARITY",
    items: [
      "Detachment Doesn't Mean Giving Up", "Control Desire Before Desire Controls You", "Choose Purpose Over Pleasure",
      "Stop Overthinking Every Decision", "Accept What You Cannot Control", "Stay Balanced When Life Tilts Either Way",
      "Find Your Dharma", "Stop Copying Someone Else's Path", "Your Actions Are Shaping Who You Become",
      "Let Go Without Becoming Careless", "Act With Courage During Uncertainty", "Create Inner Peace in a Noisy World",
      "Become the Person Your Life Requires",
    ],
  },
];

const applications = [
  ["STUDENTS", "Exams, procrastination, career decisions, failure and focus."],
  ["CREATORS", "Comparison, views, likes, creative burnout and consistency."],
  ["ENTREPRENEURS", "Uncertainty, outcomes, pressure, decision-making and purpose."],
  ["RELATIONSHIPS", "Expectations, attachment, emotional reactions and control."],
  ["DIGITAL LIFE", "Distraction, attention, social media, comparison and digital noise."],
];

const tools = [
  "Daily Gita Reflection", "Morning & Night Reflection", "Weekly Self-Check", "Focus & Discipline Trackers",
  "Digital Detox Checklist", "What Can I Control? Worksheet", "Purpose Discovery Worksheet",
  "Fear & Self-Doubt Worksheet", "Failure Reflection Worksheet",
];

const faqs = [
  ["Is this book only for religious people?", "No. The book is designed around practical and timeless principles from the Bhagavad Gita and is written for modern everyday life."],
  ["Do I need to know the Bhagavad Gita before reading this?", "No. The book is designed to be accessible even if you have never studied the Gita before."],
  ["Is this a complete translation of the Bhagavad Gita?", "No. It is a modern interpretation of selected timeless lessons and principles, with chapter and verse references."],
  ["What exactly am I purchasing?", "A digital eBook containing the 30 lessons, modern-life applications, practical tools, reflection worksheets and 30-day practice challenge described on this page."],
  ["Is this a physical book?", "No. It is a digital eBook."],
  ["Can I read it on my phone?", "Yes. It is designed for reading on phones, tablets and laptops."],
  ["What language is the book in?", "English."],
  ["How will I receive the book?", "After purchase through SuperProfile, delivery/access will follow the configuration set up in your SuperProfile product."],
];

function CheckoutLink({ children, className = "button button-gold", dataCta, onClick }) {
  const configured = PRODUCT.checkoutUrl.startsWith("http");
  const handleClick = (event) => {
    if (!configured) {
      event.preventDefault();
      document.querySelector("#purchase")?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.(event);
  };
  return <a className={className} data-cta={dataCta} href={configured ? PRODUCT.checkoutUrl : "#purchase"} onClick={handleClick}>{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <a className="brand" href="#top" onClick={close}><span>THE GITA</span><small>FOR MODERN LIFE</small></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span /><span /></button>
    <nav className={open ? "nav open" : "nav"}>
      <a href="#inside" onClick={close}>What's inside</a>
      <a href="#how-it-works" onClick={close}>How it works</a>
      <a href="#faq" onClick={close}>FAQ</a>
      <CheckoutLink className="button button-small" dataCta="navbar" onClick={close}>GET THE EBOOK · {PRODUCT.price}</CheckoutLink>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-orbit" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy reveal">
        <div className="offer-ribbon"><span>✦</span>{PRODUCT.offerLabel}<span>✦</span></div>
        <p className="eyebrow">ANCIENT WISDOM. MODERN LIFE.</p>
        <h1>The wisdom you need for the life you're actually living.</h1>
        <p className="hero-subtitle">{PRODUCT.subtitle}</p>
        <p className="hero-description">A practical modern guide to timeless Gita wisdom — built for distraction, pressure, uncertainty and the everyday battles of modern life.</p>
        <div className="hero-price"><span>Digital eBook</span><strong>{PRODUCT.price}</strong><del>{PRODUCT.originalPrice}</del><b>{PRODUCT.discount}</b></div>
          <div className="hero-actions">
            <CheckoutLink dataCta="hero">GET THE EBOOK — {PRODUCT.price} <span>↗</span></CheckoutLink>
            <p><strong>Instant Digital Access</strong><br />Read on your phone, tablet or laptop.</p>
          </div>
          <div className="hero-reassurance"><span>No prior knowledge required</span><i>·</i><span>Beginner-friendly</span><i>·</i><span>English eBook</span></div>
          <div className="hero-proof" aria-label="What's included in the eBook"><div><strong>102</strong><span>pages</span></div><div><strong>30</strong><span>lessons</span></div><div><strong>09</strong><span>practical tools</span></div><div><strong>30</strong><span>day challenge</span></div></div>
        </div>
      <div className="hero-art reveal delay" aria-label="The Gita for Modern Life eBook cover">
        <div className="cover-glow" />
        <img src={PRODUCT.coverImage} alt="The Gita for Modern Life eBook cover" fetchPriority="high" />
        <span className="cover-note">30 LESSONS<br />FOR THE MODERN MIND</span>
      </div>
    </div>
    <div className="scroll-cue" aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
  </section>;
}

function Problems() {
  const problems = [
    ["OVERTHINKING", "Stuck in endless decisions and scenarios."], ["DISTRACTION", "Trying to focus while everything competes for your attention."],
    ["COMPARISON", "Someone else's timeline making your own feel behind."], ["PROCRASTINATION", "Waiting for motivation before taking action."],
    ["FEAR", "Knowing what you want to do but being afraid of what happens if you fail."], ["PURPOSE", "Trying to figure out which path is actually yours."],
  ];
  return <section className="section light problems" data-reveal><div className="container">
    <p className="eyebrow">THE MODERN BATTLEFIELD</p><h2>Your battlefield doesn't<br /><em>need a sword to be real.</em></h2>
    <p className="lead">It can be an exam, a career decision, a breakup, a deadline, a difficult conversation, or simply the version of yourself you're struggling to become.</p>
    <div className="problem-grid">{problems.map(([title, copy], i) => <article className="problem-item" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </div></section>;
}

function BigIdea() {
  return <section className="section dark idea" data-reveal><div className="container idea-grid">
    <div><p className="eyebrow">THE BIG IDEA</p><h2>The questions are modern.<br /><em>The wisdom isn't.</em></h2></div>
    <div className="idea-copy"><p>The Bhagavad Gita explores action, fear, attention, discipline, attachment, purpose and steadiness through the conversation between Arjuna and Krishna.</p><div className="gold-rule" /><p>This book brings those timeless ideas into the context of modern life.</p></div>
  </div><div className="container trust-statement"><strong>This is interpretation, not scripture.</strong><p>It is not a replacement for reading the Bhagavad Gita itself. It is a modern interpretation designed to make selected timeless principles easier to understand and apply.</p></div></section>;
}

function HowItWorks() {
  const steps = [["01", "WHAT THE GITA SAYS", "The underlying teaching, with a chapter and verse reference you can look up for yourself."], ["02", "WHAT IT MEANS TODAY", "A modern reading of that teaching — clearly framed as interpretation, not scripture."], ["03", "WHAT YOU CAN ACTUALLY DO", "One practical action you can try in everyday life." ]];
  return <section className="section light how-it-works" id="how-it-works" data-reveal><div className="container"><p className="eyebrow">A SIMPLE READING FRAMEWORK</p><h2>Every lesson follows the same<br /><em>three-part framework.</em></h2><div className="framework-grid">{steps.map(([number, title, copy]) => <article className="framework-item" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="closing-line">Insight only matters when it touches real life.</p></div></section>;
}

function Lessons() {
  return <section className="section dark lessons" data-reveal><div className="container"><p className="eyebrow">PART TWO · 30 TIMELESS LESSONS</p><h2>30 timeless lessons<br /><em>for the modern mind.</em></h2><p className="section-intro">A clean, structured way to revisit the principles that matter when life gets noisy.</p><div className="lesson-groups">{lessonGroups.map((group) => <div className="lesson-group" key={group.title}><h3>{group.title}</h3><ol>{group.items.map((item) => <li key={item}>{item}</li>)}</ol></div>)}</div></div></section>;
}

function Applications() {
  return <section className="section light applications" data-reveal><div className="container"><p className="eyebrow">PART THREE · APPLYING THE GITA TO MODERN LIFE</p><h2>The same wisdom.<br /><em>Five different rooms of life.</em></h2><div className="application-grid">{applications.map(([title, copy], i) => <article className="application-item" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function Tools() {
  return <section className="section dark tools" data-reveal><div className="container tools-grid"><div><p className="eyebrow">PART FOUR · PRACTICAL TOOLS</p><h2>This isn't just a book.<br /><em>It's something you can use.</em></h2><p className="section-intro">Reflection pages and worksheets help the ideas move from the page into the way you actually live.</p><CheckoutLink dataCta="tools" className="button button-outline">GET THE EBOOK — {PRODUCT.price} <span>↘</span></CheckoutLink></div><div className="tool-list">{tools.map((tool, i) => <div className="tool-row" key={tool}><span>{String(i + 1).padStart(2, "0")}</span><strong>{tool}</strong></div>)}</div></div></section>;
}

function Challenge() {
  return <section className="section light challenge" data-reveal><div className="container"><p className="eyebrow">PART FIVE · THE 30-DAY PRACTICE CHALLENGE</p><h2>30 days.<br /><em>One small practice at a time.</em></h2><div className="challenge-grid"><div><p className="lead">The 30-Day Gita Practice Challenge turns the book's ideas into small, doable daily practices.</p><p className="challenge-copy"><strong>5–10 minutes a day.</strong><br />No 4 a.m. wake-ups. No extreme routine. Missed a day? Just pick back up.</p><CheckoutLink dataCta="challenge" className="button button-dark">GET THE EBOOK — {PRODUCT.price} <span>↗</span></CheckoutLink></div><div className="week-grid">{[["WEEK 1", "FOUNDATION"], ["WEEK 2", "FOCUS"], ["WEEK 3", "EMOTION"], ["WEEK 4", "PURPOSE"]].map(([week, title]) => <div key={week}><span>{week}</span><strong>{title}</strong></div>)}</div></div></div></section>;
}

function Preview() {
  const previews = [["A NOTE TO THE READER", "/assets/previews/reader-note.png"], ["TABLE OF CONTENTS", "/assets/previews/table-of-contents.png"], ["DAILY GITA REFLECTION", "/assets/previews/daily-reflection.png"], ["WHAT CAN I CONTROL?", "/assets/previews/control-worksheet.png"], ["HOW THIS CHALLENGE WORKS", "/assets/previews/challenge.png"]];
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [selected]);
  return <section className="section dark preview" id="inside" data-reveal><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow">A QUIET LOOK INSIDE</p><h2>Take a look<br /><em>inside.</em></h2></div><p className="section-intro">These are real pages from the eBook — not invented mockups. Click any page to view it clearly.</p></div><div className="real-preview-grid">{previews.map(([label, src]) => <figure className="real-preview" key={label}><button className="preview-open" type="button" onClick={() => setSelected({ label, src })} aria-label={`Open ${label} preview`}><img src={src} alt={`${label} page preview`} loading="lazy" /></button><figcaption><span>{label}</span><small>OPEN PREVIEW ↗</small></figcaption></figure>)}</div><div className="preview-cta"><p>See the pages. Then start reading.</p><CheckoutLink dataCta="preview">GET THE EBOOK — {PRODUCT.price} <span>↗</span></CheckoutLink></div></div>{selected && <div className="preview-lightbox" role="dialog" aria-modal="true" aria-label={`${selected.label} enlarged preview`} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><div className="lightbox-panel"><button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close preview">×</button><img src={selected.src} alt={`${selected.label} enlarged page preview`} /></div></div>}</section>;
}

function Audience() {
  const audience = [["STUDENTS", "Exams, focus, procrastination, pressure and career uncertainty."], ["CREATORS", "Comparison, consistency, views, approval and creative burnout."], ["ENTREPRENEURS", "Uncertainty, outcomes, pressure and difficult decisions."], ["YOUNG ADULTS", "Purpose, identity, confidence and the feeling of being behind."], ["ANYONE FEELING STUCK", "A calmer and clearer way to approach everyday problems."]];
  return <section className="section light audience" data-reveal><div className="container"><p className="eyebrow">WHO THIS IS FOR</p><h2>You don't need to be a scholar<br /><em>of the Gita.</em></h2><p className="lead small-lead">You just need to be dealing with real life.</p><div className="audience-grid audience-five">{audience.map(([title, copy], i) => <div className="audience-item" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div><p className="audience-note">You do not need to be religious, spiritual or Hindu to get something meaningful from this book.</p></div></section>;
}

function Objections() {
  return <section className="section dark objections" data-reveal><div className="container"><p className="eyebrow">BEFORE YOU DECIDE</p><h2>Here's what this book is —<br /><em>and isn't.</em></h2><div className="objection-grid"><div><h3>THIS BOOK IS</h3>{["A modern interpretation of timeless Gita principles", "Written for everyday life", "Practical and beginner-friendly", "Structured around 30 lessons", "Designed to be used, not simply read once"].map(item => <p key={item}><span>+</span>{item}</p>)}</div><div><h3>THIS BOOK IS NOT</h3>{["A complete translation of the Bhagavad Gita", "A substitute for reading the original text", "A religious conversion guide", "A promise of guaranteed transformation"].map(item => <p key={item}><span>—</span>{item}</p>)}</div></div></div></section>;
}

function Product() {
  const included = ["30 Timeless Lessons", "Modern applications", "Chapter & verse references", "Practical action steps", "Reflection prompts", "Student / Creator / Entrepreneur / Relationship / Digital Life applications", "Practical worksheets & trackers", "30-Day Gita Practice Challenge", "Quick-reference index", "Digital eBook access"];
  return <section className="section dark product" id="purchase" data-reveal><div className="container product-grid"><div className="product-copy"><p className="eyebrow">{PRODUCT.offerLabel}</p><h2>Everything included<br /><em>for {PRODUCT.price}.</em></h2><p className="lead">A digital book built to be read, used and returned to.</p><ul className="check-list">{included.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul></div><div className="purchase-card"><div className="purchase-offer">{PRODUCT.offerLabel}</div><img className="purchase-cover" src={PRODUCT.coverImage} alt="The Gita for Modern Life eBook cover" loading="lazy" /><div className="card-kicker">THE GITA FOR MODERN LIFE</div><h3>{PRODUCT.subtitle}</h3><div className="price-row"><div className="price">{PRODUCT.price}</div><div className="price-meta"><span className="price-original">{PRODUCT.originalPrice}</span><span className="discount-badge">{PRODUCT.discount}</span></div></div><p className="saving-note">{PRODUCT.savings} <span>·</span> Digital product · English</p><CheckoutLink dataCta="pricing" className="button button-gold button-wide">GET THE EBOOK <span>↗</span></CheckoutLink><p className="secure">You'll be redirected to SuperProfile to complete your purchase.<br />Checkout powered by SuperProfile.</p></div></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="section light faq" id="faq" data-reveal><div className="container faq-grid"><div><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Before you<br /><em>begin.</em></h2><p className="section-intro">Clear answers, so you know exactly what you're getting.</p></div><div className="accordion">{faqs.map(([question, answer], i) => <div className={open === i ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{question}</span><b>{open === i ? "−" : "+"}</b></button>{open === i && <p>{answer}</p>}</div>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta" data-reveal><div className="container final-grid"><div><p className="eyebrow">COME BACK TO WHAT MATTERS</p><h2>You don't need more noise.<br /><em>You need clearer principles.</em></h2><p>Explore 30 timeless lessons from the Bhagavad Gita, translated for the life you're actually living.</p><CheckoutLink dataCta="final">GET THE EBOOK — {PRODUCT.price} <span>↗</span></CheckoutLink><small>Instant Digital Access</small></div><div className="final-cover"><img src={PRODUCT.coverImage} alt="The Gita for Modern Life eBook cover" loading="lazy" /></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-top"><a className="brand" href="#top"><span>THE GITA</span><small>FOR MODERN LIFE</small></a><div className="footer-links"><a href="#top">Home</a><a href="#inside">What's Inside</a><a href="#faq">FAQ</a><a href="mailto:harshpateln2009@gmail.com">Contact</a><a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; Conditions</a><a href="#refunds">Refund Policy</a></div></div><div className="container footer-bottom"><span>© 2026 The Gita for Modern Life. All rights reserved.</span><span>ANCIENT WISDOM · MODERN LIFE</span></div></footer>;
}

function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const hero = document.querySelector(".hero"); const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.1 }); if (hero) observer.observe(hero); return () => observer.disconnect(); }, []);
  return <div className={visible ? "mobile-sticky visible" : "mobile-sticky"}><span>THE GITA FOR MODERN LIFE <b>{PRODUCT.price}</b></span><CheckoutLink dataCta="mobile-sticky" className="button button-small">GET THE EBOOK</CheckoutLink></div>;
}

function ScrollReveal() {
  useEffect(() => { const items = document.querySelectorAll(".reveal, [data-reveal]"); const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches; if (reduced) { items.forEach((item) => item.classList.add("is-visible")); return undefined; } const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -48px" }); items.forEach((item) => observer.observe(item)); return () => observer.disconnect(); }, []);
  return null;
}

function App() {
  return <><div className="offer-ticker" role="status" aria-label="Janmashtami special offer"><div className="ticker-track"><span>✦ JANMASHTAMI SPECIAL OFFER · <del>{PRODUCT.originalPrice}</del> <strong>{PRODUCT.price}</strong> · {PRODUCT.savings} ✦</span><span aria-hidden="true">✦ JANMASHTAMI SPECIAL OFFER · <del>{PRODUCT.originalPrice}</del> <strong>{PRODUCT.price}</strong> · {PRODUCT.savings} ✦</span></div></div><Header /><main><Hero /><Problems /><BigIdea /><HowItWorks /><Preview /><Lessons /><Applications /><Tools /><Challenge /><Audience /><Objections /><Product /><FAQ /><FinalCTA /></main><Footer /><MobileStickyCTA /><ScrollReveal /></>;
}

createRoot(document.getElementById("root")).render(<App />);
