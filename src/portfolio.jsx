import { useState, useEffect } from "react";

const css = `
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Satoshi', system-ui, sans-serif;
  background: #F5F3EE; color: #161412;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ─── HERO ─── */
.hero {
  position: relative; overflow: hidden;
  background: #161412;
  min-height: 100svh;
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 48px;
}
.hero-bg-monogram {
  position: absolute;
  right: -20px; top: 50%;
  transform: translateY(-52%);
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(120px, 38vw, 520px);
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.05);
  line-height: 0.85; letter-spacing: -0.05em;
  user-select: none; pointer-events: none; white-space: nowrap;
}

/* nav */
.hero-nav {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 20px; z-index: 10;
}
.hero-logo {
  font-family: 'Clash Display', sans-serif;
  font-size: 15px; font-weight: 600;
  color: #fff; letter-spacing: -0.02em;
}
.hero-nav-links { display: none; gap: 28px; }
.hero-nav-link {
  font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.4);
  text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase;
  transition: color 0.2s;
}
.hero-nav-link:hover { color: rgba(255,255,255,0.9); }

/* availability */
.hero-avail {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em; text-transform: uppercase;
  margin-left: 20px; margin-bottom: 24px;
}
.avail-dot {
  width: 7px; height: 7px; border-radius: 50%; background: #6EE7B7;
  box-shadow: 0 0 0 2px rgba(110,231,183,0.3); flex-shrink: 0;
  animation: breathe 2.5s ease-in-out infinite;
}
@keyframes breathe {
  0%,100% { box-shadow: 0 0 0 2px rgba(110,231,183,0.3); }
  50%      { box-shadow: 0 0 0 6px rgba(110,231,183,0.1); }
}

/* headline */
.hero-content { padding: 0 20px; position: relative; z-index: 2; }
.hero-headline {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(48px, 14vw, 130px);
  font-weight: 700; line-height: 0.88;
  letter-spacing: -0.04em; color: #F5F3EE;
  margin-bottom: 28px;
}
.hero-headline em {
  font-style: normal; color: transparent;
  -webkit-text-stroke: 1px rgba(245,243,238,0.28);
}

/* hero bottom */
.hero-bottom { display: flex; flex-direction: column; gap: 20px; }
.hero-desc {
  font-size: 14px; line-height: 1.7;
  color: rgba(245,243,238,0.42); font-weight: 400;
}
.hero-desc strong { color: rgba(245,243,238,0.8); font-weight: 500; }
.hero-ctas { display: flex; gap: 10px; flex-wrap: wrap; }

/* buttons */
.btn-primary {
  background: #F5F3EE; color: #161412;
  border: none; border-radius: 100px;
  padding: 12px 24px; font-family: 'Satoshi', sans-serif;
  font-size: 13px; font-weight: 700;
  cursor: pointer; text-decoration: none; display: inline-block;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap; letter-spacing: -0.01em;
}
.btn-primary:hover { background: #fff; transform: translateY(-2px); }
.btn-outline {
  background: transparent; color: rgba(245,243,238,0.6);
  border: 1px solid rgba(245,243,238,0.18); border-radius: 100px;
  padding: 12px 24px; font-family: 'Satoshi', sans-serif;
  font-size: 13px; font-weight: 500;
  cursor: pointer; text-decoration: none; display: inline-block;
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}
.btn-outline:hover { border-color: rgba(245,243,238,0.5); color: #F5F3EE; }

/* scroll hint */
.scroll-hint {
  display: flex; align-items: center; gap: 10px;
  font-size: 10px; color: rgba(255,255,255,0.2);
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0 20px; margin-top: 40px;
}
.scroll-line { width: 36px; height: 1px; background: rgba(255,255,255,0.1); }

/* ─── ABOUT ─── */
.about-wrap { background: #161412; }
.about-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 60px 20px;
  display: flex; flex-direction: column; gap: 36px;
}
.about-label {
  font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: rgba(255,255,255,0.28); margin-bottom: 14px;
}
.about-title {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(30px, 7vw, 52px);
  font-weight: 600; line-height: 1.05;
  letter-spacing: -0.03em; color: #F5F3EE;
}
.about-title span { color: rgba(245,243,238,0.25); }
.about-body { font-size: 15px; line-height: 1.75; color: rgba(245,243,238,0.48); }
.about-body p + p { margin-top: 14px; }
.about-body strong { color: rgba(245,243,238,0.85); font-weight: 500; }

/* ─── SECTION ─── */
.section { padding: 52px 20px; max-width: 1200px; margin: 0 auto; }
.eyebrow {
  display: flex; align-items: center; gap: 12px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #aaa; margin-bottom: 28px;
}
.eyebrow::after { content:''; flex:1; height:1px; background:#E4E0D8; }

/* ─── BENTO — mobile: single col ─── */
.bento { display: flex; flex-direction: column; gap: 12px; }
.card {
  background: #fff; border-radius: 18px;
  border: 1px solid rgba(0,0,0,0.06);
  padding: 22px; overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
.card-dark   { background: #1E1C19; border-color: rgba(255,255,255,0.05); }
.card-indigo { background: #1E1C19; border-color: transparent; }
.card-label {
  font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #aaa; margin-bottom: 16px;
}
.card-dark   .card-label { color: rgba(255,255,255,0.28); }
.card-indigo .card-label { color: rgba(255,255,255,0.45); }

/* stat */
.stat-num {
  font-family: 'Clash Display', sans-serif;
  font-size: 60px; font-weight: 700; line-height: 1;
  letter-spacing: -0.04em; color: rgba(255,255,255,0.92);
}
.stat-lbl { font-size: 13px; color: rgba(255,255,255,0.48); margin-top: 6px; font-weight: 500; }

/* projects */
.proj {
  display: flex; align-items: center; justify-content: space-between;
  padding: 13px 0; border-bottom: 1px solid #ECEAE4;
  text-decoration: none; color: inherit;
}
.proj:last-child { border-bottom: none; }
.proj:hover .proj-arrow { transform: translate(3px,-3px); }
.proj-name {
  font-family: 'Clash Display', sans-serif;
  font-size: 16px; font-weight: 600; letter-spacing: -0.02em; color: #161412;
}
.proj-desc { font-size: 12px; color: #999; margin-top: 2px; }
.proj-arrow { font-size: 17px; color: #ccc; transition: transform 0.2s; flex-shrink:0; margin-left:10px; }

/* stack */
.stack-row {
  display: flex; align-items: flex-start; flex-wrap: wrap; gap: 8px;
  padding: 9px 0; border-bottom: 1px solid rgba(0,0,0,0.06);
}
.stack-row:last-child { border-bottom: none; }
.stack-cat {
  font-size: 10px; font-weight: 700; color: #ccc;
  text-transform: uppercase; letter-spacing: 0.08em;
  min-width: 60px; padding-top: 3px; flex-shrink: 0;
}
.stack-tags { display: flex; gap: 5px; flex-wrap: wrap; }
.tag {
  font-size: 11px; font-weight: 600;
  background: rgba(0,0,0,0.05); color: #444;
  border-radius: 100px; padding: 3px 10px;
}

/* timeline */
.tl {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.tl:last-child { border-bottom: none; }
.tl-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: rgba(255,255,255,0.16); flex-shrink: 0; margin-top: 5px;
}
.tl-now { background: #6EE7B7; box-shadow: 0 0 0 3px rgba(110,231,183,0.18); }
.tl-role    { font-size: 13px; font-weight: 600; color: #F5F3EE; line-height: 1.3; }
.tl-company { font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 2px; }
.tl-yr      { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.2); margin-left: auto; flex-shrink:0; padding-top:2px; }

/* cert */
.cert {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 10px 0; border-bottom: 1px solid #ECEAE4; gap: 8px;
}
.cert:last-child { border-bottom: none; }
.cert-name   { font-size: 13px; font-weight: 500; color: #161412; }
.cert-issuer { font-size: 11px; color: #aaa; text-align: right; flex-shrink:0; }

/* testimonial */
.testi-q {
  font-family: 'Clash Display', sans-serif;
  font-size: 52px; color: rgba(255,255,255,0.06);
  line-height: 0.6; display: block; margin-bottom: 10px;
}
.testi-text  { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,0.82); margin-bottom: 18px; }
.testi-name  { font-size: 13px; font-weight: 700; color: #F5F3EE; }
.testi-role  { font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 2px; }
.testi-dots  { display: flex; gap: 6px; margin-top: 18px; }
.pip { height: 3px; border-radius: 2px; cursor: pointer; transition: all 0.3s; background: rgba(255,255,255,0.14); }
.pip-on { background: #fff; }

/* ─── CONTACT ─── */
.contact-wrap { background: #161412; }
.contact-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 60px 20px;
  display: flex; flex-direction: column; gap: 36px;
}
.contact-h {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(26px, 7vw, 48px); font-weight: 700;
  letter-spacing: -0.03em; color: #fff; line-height: 1.1; margin-bottom: 8px;
}
.contact-sub { font-size: 13px; color: rgba(255,255,255,0.35); margin-bottom: 22px; }
.clink {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 15px; border-radius: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  text-decoration: none; color: rgba(255,255,255,0.65);
  font-size: 13px; font-weight: 500; margin-bottom: 8px;
  transition: background 0.2s, color 0.2s;
}
.clink:hover { background: rgba(255,255,255,0.09); color: #fff; }
.clink:last-child { margin-bottom: 0; }

/* ─── FOOTER ─── */
.footer {
  background: #161412;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 24px 20px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 10px;
}
.footer-copy  { font-size: 11px; color: rgba(255,255,255,0.22); }
.footer-brand {
  font-family: 'Clash Display', sans-serif;
  font-size: 13px; font-weight: 600;
  color: rgba(255,255,255,0.35); letter-spacing: -0.02em;
}

/* ─────────────────────────────────────────
   TABLET  ≥ 600px
───────────────────────────────────────── */
@media (min-width: 600px) {
  .hero-nav   { padding: 24px 36px; }
  .hero-avail { margin-left: 36px; margin-bottom: 28px; font-size: 11px; }
  .hero-content, .scroll-hint { padding-left: 36px; padding-right: 36px; }
  .hero-bottom { flex-direction: row; align-items: flex-end; justify-content: space-between; gap: 28px; }
  .hero-desc  { max-width: 320px; font-size: 14px; }
  .scroll-hint { margin-top: 44px; }

  .about-inner  { padding: 68px 36px; flex-direction: row; gap: 56px; align-items: center; }
  .about-left   { flex: 1; flex-shrink: 0; }
  .about-right  { flex: 1.4; }

  .section { padding: 60px 36px; }
  .bento   { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .col2    { grid-column: span 2; }

  .contact-inner { padding: 68px 36px; flex-direction: row; gap: 56px; }
  .contact-left, .contact-right { flex: 1; }

  .footer { padding: 28px 36px; }
}

/* ─────────────────────────────────────────
   DESKTOP  ≥ 1024px
───────────────────────────────────────── */
@media (min-width: 1024px) {
  .hero-nav   { padding: 32px 60px; }
  .hero-nav-links { display: flex; }
  .hero-avail { margin-left: 60px; margin-bottom: 32px; font-size: 12px; }
  .hero-content { padding: 0 60px; }
  .scroll-hint  { padding: 0 60px; margin-top: 52px; font-size: 11px; }
  .scroll-line  { width: 48px; }

  .hero-headline { margin-bottom: 36px; font-size: clamp(64px, 9vw, 130px); }
  .hero-desc  { max-width: 360px; font-size: 15px; }
  .btn-primary, .btn-outline { padding: 14px 32px; font-size: 14px; }

  .about-inner  { padding: 88px 60px; gap: 80px; }
  .section      { padding: 88px 60px; }
  .eyebrow      { margin-bottom: 44px; font-size: 11px; }

  .bento  { grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  .card   { padding: 26px; }
  .col2   { grid-column: span 2; }

  .contact-inner { padding: 88px 60px; gap: 80px; }
  .footer        { padding: 36px 60px; }
}

/* ─────────────────────────────────────────
   WIDE  ≥ 1280px — projects tall card
───────────────────────────────────────── */
@media (min-width: 1280px) {
  .proj-tall { grid-row: span 2; }
}

/* ─────────────────────────────────────────
   ANIMATIONS & A11Y
───────────────────────────────────────── */
@keyframes fadeSlide {
  from { opacity:0; transform: translateX(10px); }
  to   { opacity:1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
`;

export default function Portfolio() {
  const [tIdx, setTIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  const testimonials = [
    { quote: "He's the kind of developer who doesn't just code — he finds better ways to build things. Reliable, curious, and always improving.", author: "Jun Jun Zaragosa", pos: "Engineer Lead · FullSuite" },
    { quote: "Working with him was a game-changer for our project. His attention to detail and problem-solving skills are exceptional.", author: "Angel Hamelton Yacapin", pos: "Software Engineer · FullSuite" },
    { quote: "A true professional who brings innovative solutions to complex challenges. His code is clean, efficient, and well-documented.", author: "Allen Alvaro", pos: "Software Engineer · FullSuite" },
    { quote: "Not only technically skilled but also great at communication. He made the entire development process smooth and collaborative.", author: "Neil Pascual", pos: "Co-Intern · FullSuite" },
  ];

  const experiences = [
    { role: "Documentation Associate / Outbound Processor", company: "Royale Cold Storage", year: "Now", now: true },
    { role: "Software Engineer Intern", company: "FullSuite", year: "2025" },
    { role: "Capstone Programmer", company: "Pangasinan State University", year: "2024" },
    { role: "BS Information Technology", company: "Pangasinan State University", year: "2020" },
    { role: "Hello World!", company: "Wrote my first line of code", year: "2019" },
  ];

  const projects = [
    { name: "CafeNova", desc: "Coffee Shop POS System", url: "https://coffee-shop-frontend.vercel.app" },
    { name: "Diego Dental", desc: "Dental Booking System", url: "https://diego-dental.vercel.app" },
    { name: "SuiteLifer", desc: "Full collaborative development", url: "https://suitelifer.com" },
    { name: "ATS · KriyaHR", desc: "Application Tracking System", url: "https://ats.kriyahr.com" },
  ];

  const stack = [
    { cat: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { cat: "Backend",  items: ["Node.js", "Laravel", "Firebase", "MySQL"] },
    { cat: "Cloud",    items: ["AWS", "Vercel", "GitHub Actions"] },
    { cat: "Other",    items: ["Python", "PHP", "Flutter"] },
  ];

  const certs = [
    { name: "React Basics",      issuer: "Meta / Coursera" },
    { name: "Web Accessibility", issuer: "Google" },
    { name: "Intro to Node.js",  issuer: "LinkedIn Learning" },
    { name: "SQL Fundamentals",  issuer: "SoloLearn" },
  ];

  const links = [
    { label: "Schedule a Call",     href: "https://calendly.com/jmillares0945/30min" },
    { label: "GitHub @jrmmllrs",    href: "https://github.com/jrmmllrs" },
    { label: "LinkedIn /jrmmllrs",  href: "https://linkedin.com/in/jrmmllrs" },
  ];

  useEffect(() => {
    setMounted(true);
    const iv = setInterval(() => setTIdx(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(iv);
  }, []);

  const fade = (d = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(16px)",
    transition: `opacity 0.75s ease ${d}s, transform 0.75s ease ${d}s`,
  });

  return (
    <div>
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-monogram" aria-hidden="true">JM</div>

        <nav className="hero-nav">
          <div className="hero-logo">Jerome Millares</div>
          <div className="hero-nav-links">
            <a href="#about"   className="hero-nav-link">About</a>
            <a href="#work"    className="hero-nav-link">Work</a>
            <a href="#contact" className="hero-nav-link">Contact</a>
          </div>
        </nav>

        <div className="hero-avail" style={fade(0.1)}>
          <span className="avail-dot" />
          Open to opportunities
        </div>

        <div className="hero-content">
          <h1 className="hero-headline" style={fade(0.2)}>
            Full-Stack<br />
            <em>Developer</em><br />
            &amp; Builder.
          </h1>
          <div className="hero-bottom" style={fade(0.35)}>
            <p className="hero-desc">
              <strong>React · Node.js · Python.</strong> I build clean, fast web
              applications that solve real problems. Based in Pangasinan, PH — working globally.
            </p>
            <div className="hero-ctas">
              <a href="https://calendly.com/jmillares0945/30min"
                 target="_blank" rel="noopener noreferrer" className="btn-primary">
                Schedule a Call
              </a>
              <a href="mailto:jeromemillares.dev@gmail.com" className="btn-outline">
                Send Email
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-hint" style={fade(0.5)}>
          <span className="scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-wrap">
        <div className="about-inner">
          <div className="about-left">
            <div className="about-label">About me</div>
            <h2 className="about-title">
              Code as a<br /><span>craft,</span><br />not just a job.
            </h2>
          </div>
          <div className="about-right about-body">
            <p>I'm a Full-Stack Developer with hands-on experience in <strong>React.js and Node.js</strong>,
               focused on building fast, maintainable web applications that solve real problems.</p>
            <p>I built my foundations at Pangasinan State University — Python, Flutter, PHP, Laravel, Tailwind
               — and sharpened them during my internship at <strong>FullSuite</strong>, where I contributed
               to production systems used by real teams.</p>
            <p>I care about clean code, thoughtful UX, and shipping things that actually work.
               Always learning, always improving.</p>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section id="work" className="section">
        <div className="eyebrow">Work &amp; Skills</div>
        <div className="bento">

          {/* Projects — 2-col wide, 2-row tall on large screens */}
          <div className="card col2 proj-tall">
            <div className="card-label">Projects</div>
            {projects.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="proj">
                <div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-desc">{p.desc}</div>
                </div>
                <span className="proj-arrow">↗</span>
              </a>
            ))}
          </div>

          {/* Stat */}
          <div className="card card-indigo" style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div className="stat-num">7+</div>
            <div className="stat-lbl">Years writing code</div>
          </div>

          {/* Tech stack */}
          <div className="card col2">
            <div className="card-label">Tech Stack</div>
            {stack.map(s => (
              <div key={s.cat} className="stack-row">
                <span className="stack-cat">{s.cat}</span>
                <div className="stack-tags">
                  {s.items.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="card">
            <div className="card-label">Certifications</div>
            {certs.map((c, i) => (
              <div key={i} className="cert">
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="card card-dark col2">
            <div className="card-label">Experience</div>
            {experiences.map((e, i) => (
              <div key={i} className="tl">
                <div className={`tl-dot ${e.now ? "tl-now" : ""}`} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company">{e.company}</div>
                </div>
                <div className="tl-yr">{e.year}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="card card-dark">
            <div className="card-label">Testimonials</div>
            <div key={tIdx} style={{ animation:"fadeSlide 0.4s ease" }}>
              <span className="testi-q">"</span>
              <div className="testi-text">{testimonials[tIdx].quote}</div>
              <div className="testi-name">{testimonials[tIdx].author}</div>
              <div className="testi-role">{testimonials[tIdx].pos}</div>
            </div>
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <div key={i}
                     className={`pip ${i === tIdx ? "pip-on" : ""}`}
                     style={{ width: i === tIdx ? 24 : 8 }}
                     onClick={() => setTIdx(i)} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-wrap">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="about-label">Get in touch</div>
            <div className="contact-h">Let's build<br />something great.</div>
            <div className="contact-sub">Open to full-time roles, freelance projects, and collaborations.</div>
            <a href="mailto:jeromemillares.dev@gmail.com" className="btn-primary" style={{ display:"inline-block" }}>
              jeromemillares.dev@gmail.com →
            </a>
          </div>
          <div className="contact-right">
            {links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="clink">
                {l.label}
                <span style={{ fontSize:14 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-copy">© 2026 Jerome Millares. All rights reserved.</div>
        <div className="footer-brand">Jerome Millares</div>
      </footer>
    </div>
  );
}