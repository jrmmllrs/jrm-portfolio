import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis"
import Privacy from "./Privacy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EMAIL = "jeromemillares.dev@gmail.com";
const CAL = "https://calendly.com/jmillares0945/30min";
const GH = "https://github.com/jrmmllrs";
const LI = "https://linkedin.com/in/jrmmllrs";
const RESUME = "/Jerome-Millares-Resume.pdf"; // drop your PDF in /public

// Tailor each application: /?role=Frontend%20Developer&co=Acme
const qs = new URLSearchParams(window.location.search);
const ROLE = qs.get("role") || "full-stack developer";
const CO = qs.get("co");

const NAV = [
  "projects",
  "experience",
  "stack",
  "certifications",
  "testimonials",
  "contact",
];

// Placeholder screenshots (live capture via WordPress mshots). Replace `img` with your own file in /public anytime.
const shot = (u) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(u)}?w=1000&h=625`;
const PROJECTS = [
  {
    n: "CafeNova",
    t: "Point of sale",
    d: "Coffee shop POS system.",
    u: "https://coffee-shop-frontend.vercel.app",
  },
  {
    n: "Diego Dental",
    t: "Booking",
    d: "Appointment booking for a dental clinic.",
    u: "https://diego-dental.vercel.app",
  },
  {
    n: "SuiteLifer",
    t: "Team project",
    d: "Collaborative full-stack development.",
    u: "https://suitelifer.com",
  },
  {
    n: "KriyaHR ATS",
    t: "HR tech",
    d: "Applicant tracking system for HR teams.",
    u: "https://ats.kriyahr.com",
  },
].map((p, i) => ({
  ...p,
  img: shot(p.u),
  alt: `https://picsum.photos/seed/jm${i}/1000/625`,
}));

const EXP = [
  [
    "Now",
    "Documentation Associate / Outbound Processor",
    "Royale Cold Storage",
  ],
  ["2025", "Software Engineer Intern", "FullSuite"],
  ["2024", "Capstone Programmer", "Pangasinan State University"],
  ["2020", "BS Information Technology", "Pangasinan State University"],
  ["2019", "Hello World!", "Wrote my first line of code"],
];
const STACK = [
  ["Frontend", ["React", "TypeScript", "Tailwind CSS", "GSAP"]],
  ["Backend", ["Node.js", "Laravel", "Firebase", "MySQL"]],
  ["Cloud", ["AWS", "Vercel", "GitHub Actions"]],
  ["Other", ["Python", "PHP", "Flutter"]],
];
const CERTS = [
  ["React Basics", "Meta / Coursera"],
  ["Web Accessibility", "Google"],
  ["Intro to Node.js", "LinkedIn Learning"],
  ["SQL Fundamentals", "SoloLearn"],
];
const QUOTES = [
  {
    q: "He’s the kind of developer who doesn’t just code, he finds better ways to build things. Reliable, curious, and always improving.",
    a: "Jun Jun Zaragosa",
    p: "Engineer Lead, FullSuite",
  },
  {
    q: "Working with him was a game-changer for our project. His attention to detail and problem-solving skills are exceptional.",
    a: "Angel Hamelton Yacapin",
    p: "Software Engineer, FullSuite",
  },
  {
    q: "A true professional who brings innovative solutions to complex challenges. His code is clean, efficient, and well-documented.",
    a: "Allen Alvaro",
    p: "Software Engineer, FullSuite",
  },
  {
    q: "Not only technically skilled but also great at communication. He made the entire development process smooth and collaborative.",
    a: "Neil Pascual",
    p: "Co-Intern, FullSuite",
  },
];

const Head = ({ n, label, right }) => (
  <div className="sh">
    <span>
      {n} — {label}
    </span>
    {right}
    <span className="ln" />
  </div>
);
const IC = {
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4",
  user: "M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  file: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5",
  cal: "M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
  monitor: "M3 5h18v11H3zM8 20h8M12 16v4",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
};
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} />
  </svg>
);
const SIDE = [
  ["code", "GitHub", GH],
  ["user", "LinkedIn", LI],
  ["file", "Resume", RESUME],
  ["cal", "Schedule a call", CAL],
];
const AFF = [
  ["RC", "Royale Cold Storage", "Documentation · now"],
  ["FS", "FullSuite", "SWE intern · 2025"],
  ["PSU", "Pangasinan State U", "BSIT · 2020"],
];
const STATS = [
  [7, "+", "Years coding", "#experience"],
  [4, "", "Live projects", "#projects"],
  [4, "", "Certifications", "#certifications"],
];
const manila = () =>
  new Date().toLocaleTimeString("en-PH", {
    timeZone: "Asia/Manila",
    hour: "numeric",
    minute: "2-digit",
  });

const GH_USER = "jrmmllrs";

// GitHub contribution graph (public data via github-contributions-api.jogruber.de, no token needed)
function Contrib() {
  const ref = useRef(null);
  const [d, setD] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`, {
      signal: ac.signal,
    })
      .then((r) => r.json())
      .then((j) => {
        if (!Array.isArray(j.contributions) || !j.contributions.length)
          throw new Error("no data");
        setD({
          days: j.contributions,
          total: j.contributions.reduce((a, c) => a + c.count, 0),
        });
      })
      .catch((e) => e.name !== "AbortError" && setD("err"));
    return () => ac.abort();
  }, []);

  const days = d && d !== "err" ? d.days : null;
  const pad = days ? new Date(days[0].date + "T00:00:00").getDay() : 0;
  const cells = days
    ? [...Array(pad).fill(null), ...days]
    : Array.from({ length: 371 }, () => ({ level: 0 }));
  const weeks = Math.ceil(cells.length / 7);

  const months = [];
  if (days) {
    let prev = -1,
      last = -9;
    for (let c = 0; c < weeks; c++) {
      const first = cells.slice(c * 7, c * 7 + 7).find(Boolean);
      const m = new Date(first.date + "T00:00:00").getMonth();
      if (m !== prev && c - last >= 3 && c <= weeks - 3) {
        months.push({
          c,
          name: new Date(first.date + "T00:00:00").toLocaleString("en", {
            month: "short",
          }),
        });
        last = c;
      }
      prev = m;
    }
  }

  useEffect(() => {
    const sc = ref.current && ref.current.querySelector(".ghs");
    if (days && sc) sc.scrollLeft = sc.scrollWidth;
  }, [d]); // eslint-disable-line react-hooks/exhaustive-deps

  // squares sweep in from left to right once the data arrives
  useGSAP(
    () => {
      if (!days || matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
      gsap.from(".cg i", {
        opacity: 0,
        scale: 0.2,
        duration: 0.45,
        ease: "power2.out",
        stagger: { amount: 1.4 },
        delay: 0.5,
      });
    },
    { scope: ref, dependencies: [d] },
  );

  return (
    <div className="gh" ref={ref}>
      <div className="ghh">
        <span>
          {days
            ? `${d.total.toLocaleString()} contributions in the last year`
            : d === "err"
              ? "Couldn’t load contributions right now"
              : "Loading contributions…"}
        </span>
        <a href={GH} target="_blank" rel="noopener noreferrer">
          @{GH_USER} ↗
        </a>
      </div>
      <div className="ghs">
        <div className="gin" style={{ "--w": weeks }}>
          <div className="gm">
            {months.map((m) => (
              <span key={m.c} style={{ gridColumn: m.c + 1 }}>
                {m.name}
              </span>
            ))}
          </div>
          <div
            className="cg"
            role="img"
            aria-label={
              days
                ? `${d.total} GitHub contributions in the last year`
                : "GitHub contributions"
            }
          >
            {cells.map((c, i) =>
              c ? (
                <i
                  key={i}
                  className={`l${c.level}`}
                  title={
                    c.date
                      ? `${c.count} contribution${c.count === 1 ? "" : "s"} on ${c.date}`
                      : undefined
                  }
                />
              ) : (
                <i key={i} className="x" />
              ),
            )}
          </div>
        </div>
      </div>
      <div className="gl">
        Less <i className="l0" />
        <i className="l1" />
        <i className="l2" />
        <i className="l3" />
        <i className="l4" /> More
      </div>
    </div>
  );
}

function Home() {
  const root = useRef(null);
  const lenis = useRef(null);
  const [cur, setCur] = useState("");
  const [act, setAct] = useState(0);
  const [qi, setQi] = useState(0);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [time, setTime] = useState(manila());
  const [copied, setCopied] = useState(false);
  const [pal, setPal] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: light)");
    const apply = () => {
      document.documentElement.dataset.theme =
        theme === "system" ? (mq.matches ? "light" : "dark") : theme;
    };
    apply();
    localStorage.setItem("theme", theme);
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme]);
  useEffect(() => {
    const id = setInterval(() => setTime(manila()), 20000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setQi((p) => (p + 1) % QUOTES.length), 7000);
    return () => clearInterval(id);
  }, [qi]);

  // smooth scroll synced with ScrollTrigger
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis();
    lenis.current = l;
    l.on("scroll", ScrollTrigger.update);
    const tick = (t) => l.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      l.destroy();
      lenis.current = null;
    };
  }, []);

  // Alt/Ctrl/Cmd + K opens quick nav
  useEffect(() => {
    const k = (e) => {
      if ((e.altKey || e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPal((p) => !p);
        setQ("");
        setSel(0);
      }
      if (e.key === "Escape") setPal(false);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const goTo = (h) => {
    const el = document.querySelector(h);
    if (!el) return;
    lenis.current
      ? lenis.current.scrollTo(el, { offset: innerWidth <= 900 ? -72 : -10 })
      : el.scrollIntoView({ behavior: "smooth" });
  };
  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const open = (u) => window.open(u, "_blank", "noopener");

  const cmds = [
    ...NAV.map((s) => ({ l: `Go to ${s}`, f: () => goTo("#" + s) })),
    { l: "Copy email", f: copy },
    { l: "Schedule a call", f: () => open(CAL) },
    { l: "Open resume", f: () => open(RESUME) },
    { l: "Open GitHub", f: () => open(GH) },
    { l: "Open LinkedIn", f: () => open(LI) },
    {
      l: "Privacy policy",
      f: () => {
        window.location.href = "/privacy";
      },
    },
    {
      l: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
      f: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];
  const list = cmds.filter((c) => c.l.toLowerCase().includes(q.toLowerCase()));
  const run = (c) => {
    setPal(false);
    setQ("");
    setSel(0);
    c && c.f();
  };

  // page-level motion
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            ".ph",
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1 },
          )
          .from(".ph img", { scale: 1.3, duration: 1.5 }, "<")
          .from(
            ".hero .tx > *",
            { opacity: 0, y: 16, duration: 0.8, stagger: 0.09 },
            "-=1",
          )
          .from(
            ".cell",
            { opacity: 0, y: 14, duration: 0.7, stagger: 0.07 },
            "-=0.5",
          )
          .from(
            ".side .nv a",
            { opacity: 0, x: -10, duration: 0.6, stagger: 0.05 },
            0.3,
          );
        root.current.querySelectorAll(".num").forEach((el) => {
          const b = el.querySelector("b"),
            o = { v: 0 };
          b.textContent = "0";
          gsap.to(o, {
            v: +el.dataset.n,
            duration: 1.6,
            delay: 0.8,
            ease: "power2.out",
            onUpdate: () => {
              b.textContent = Math.round(o.v);
            },
          });
        });

        gsap.to(".bar", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });

        if (matchMedia("(pointer: fine)").matches) {
          const x = gsap.quickTo(".glow", "x", {
            duration: 0.9,
            ease: "power3",
          });
          const y = gsap.quickTo(".glow", "y", {
            duration: 0.9,
            ease: "power3",
          });
          window.addEventListener("pointermove", (e) => {
            x(e.clientX);
            y(e.clientY);
          });
        }

        gsap.utils
          .toArray(".sh .ln")
          .forEach((el) =>
            gsap.from(el, {
              scaleX: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 92%" },
            }),
          );
        gsap.utils
          .toArray(".list")
          .forEach((el) =>
            gsap.from(el.children, {
              opacity: 0,
              y: 14,
              duration: 0.7,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }),
          );
        gsap.from(".big", {
          yPercent: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".big", start: "top 88%" },
        });
      });

      gsap.utils
        .toArray("section[id]")
        .forEach((s) =>
          ScrollTrigger.create({
            trigger: s,
            start: "top 45%",
            end: "bottom 45%",
            onToggle: (t) => t.isActive && setCur(s.id),
          }),
        );
    },
    { scope: root },
  );

  // sliding nav indicator
  useEffect(() => {
    const a = root.current.querySelector(`.nv a[data-s="${cur}"]`);
    if (a)
      gsap.to(".ind", {
        y: a.offsetTop + (a.offsetHeight - 18) / 2,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    else gsap.to(".ind", { opacity: 0, duration: 0.3 });
  }, [cur]);

  // project deck (re-fits when the window resizes)
  const [vw, setVw] = useState(window.innerWidth);
  const lastAct = useRef(-1);
  useEffect(() => {
    let t;
    const f = () => {
      clearTimeout(t);
      t = setTimeout(() => setVw(window.innerWidth), 120);
    };
    window.addEventListener("resize", f);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", f);
    };
  }, []);
  useGSAP(
    () => {
      const n = PROJECTS.length;
      const same = lastAct.current === act;
      lastAct.current = act;
      const dur =
        same || matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0
          : 0.8;
      const peek = vw < 640 ? 0.4 : 0.5;
      const cards = gsap.utils.toArray(".dc");
      cards.forEach((el, i) => {
        const o = (i - act + n) % n,
          s = el.offsetWidth * peek;
        const pose =
          o === 0
            ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 4 }
            : o === 1
              ? { x: s, y: 26, rotate: 7, scale: 0.9, opacity: 0.6, zIndex: 3 }
              : o === n - 1
                ? {
                    x: -s,
                    y: 26,
                    rotate: -7,
                    scale: 0.9,
                    opacity: 0.6,
                    zIndex: 3,
                  }
                : {
                    x: 0,
                    y: 44,
                    rotate: 0,
                    scale: 0.82,
                    opacity: 0,
                    zIndex: 1,
                  };
        gsap.to(el, {
          ...pose,
          xPercent: -50,
          transformPerspective: 900,
          rotationX: 0,
          rotationY: 0,
          duration: dur,
          ease: "power3.out",
        });
      });
      root.current.querySelector(".deck").style.height =
        Math.max(...cards.map((c) => c.offsetHeight)) + 56 + "px";
    },
    { scope: root, dependencies: [act, vw] },
  );

  const step = (d) =>
    setAct((a) => (a + d + PROJECTS.length) % PROJECTS.length);
  const tilt = (e) => {
    const el = root.current.querySelector(`.dc[data-i="${act}"]`);
    if (!el || matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      rotationY: ((e.clientX - r.left) / r.width - 0.5) * 10,
      rotationX: -((e.clientY - r.top) / r.height - 0.5) * 8,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  const untilt = () =>
    gsap.to(`.dc[data-i="${act}"]`, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  const px = useRef(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tq, .who",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
      );
    },
    { scope: root, dependencies: [qi] },
  );
  useGSAP(
    () => {
      if (!pal) return;
      gsap.fromTo(".pal", { opacity: 0 }, { opacity: 1, duration: 0.2 });
      gsap.fromTo(
        ".pb",
        { y: -14, scale: 0.98, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" },
      );
    },
    { scope: root, dependencies: [pal] },
  );

  const Q = QUOTES[qi];

  return (
    <div ref={root}>
      <div className="bar" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <aside className="side">
        <a
          href="#top"
          className="nm"
          onClick={(e) => {
            e.preventDefault();
            goTo("#top");
          }}
        >
          Jerome Millares
        </a>
        <nav className="sl" aria-label="Links">
          {SIDE.map(([ic, l, h]) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer">
              <Icon d={IC[ic]} />
              {l}
            </a>
          ))}
        </nav>
        <i className="sep" />
        <nav className="nv" aria-label="Sections">
          <span className="ind" />
          {NAV.map((s) => (
            <a
              key={s}
              data-s={s}
              href={`#${s}`}
              className={cur === s ? "on" : ""}
              onClick={(e) => {
                e.preventDefault();
                goTo("#" + s);
              }}
            >
              {s}
            </a>
          ))}
        </nav>
        <div className="foot">
          <button
            className="kb"
            onClick={() => setPal(true)}
            aria-label="Open quick navigation"
          >
            <span>
              <span className="dsk">Quick nav</span>
              <span className="mob">Menu</span>
            </span>
            <span className="kbd">Alt K</span>
          </button>
          <div className="hide-m clock">Pangasinan · {time}</div>
          <i className="sep hide-m" />
          <div className="tg" role="group" aria-label="Theme">
            {[
              ["system", "monitor"],
              ["light", "sun"],
              ["dark", "moon"],
            ].map(([t, ic]) => (
              <button
                key={t}
                title={t}
                aria-label={`${t} theme`}
                aria-pressed={theme === t}
                onClick={() => setTheme(t)}
              >
                <Icon d={IC[ic]} />
              </button>
            ))}
          </div>
          <i className="sep hide-m" />
          <p className="hide-m">
            For work, collabs & everything else, reach me at
          </p>
          <button className="cp hide-m" onClick={copy}>
            {copied ? "Copied ✓" : EMAIL}
          </button>
        </div>
      </aside>

      <main id="top">
        <div className="col">
          <section className="hero">
            <div className="top2">
              <div className="ph">
                <img src="/me.jpeg" alt="Jerome Millares" />
                <i aria-hidden="true" />
              </div>
              <div className="tx">
                <p className="av">
                  <span className="dot" />
                  {CO
                    ? `Hi ${CO}, I’m open to ${ROLE} roles`
                    : `Open to ${ROLE} roles`}
                </p>
                <h1>Jerome Millares</h1>
                <p>
                  I’m a full-stack developer. I build fast, clean web apps with
                  React, Node.js and Python, and I’m based in Pangasinan, PH,
                  working globally.
                </p>
                <p>
                  I care about clean code, thoughtful UX and shipping things
                  that actually work.
                </p>
                <div className="soc">
                  <a href={GH} target="_blank" rel="noopener noreferrer">
                    github ↗
                  </a>
                  <a href={LI} target="_blank" rel="noopener noreferrer">
                    linkedin ↗
                  </a>
                  <a href={`mailto:${EMAIL}`}>email ↗</a>
                  <a href={RESUME} target="_blank" rel="noopener noreferrer">
                    resume ↗
                  </a>
                </div>
              </div>
            </div>
            <div className="cells aff">
              {AFF.map(([lg, t, l]) => (
                <div className="cell" key={t}>
                  <span className="lg">{lg}</span>
                  <span className="ct">
                    <strong>{t}</strong>
                    <small>{l}</small>
                  </span>
                </div>
              ))}
            </div>
            <div className="cells">
              {STATS.map(([n, sx, l, h]) => (
                <a
                  className="cell st"
                  key={l}
                  href={h}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(h);
                  }}
                >
                  <span>
                    <span className="num" data-n={n}>
                      <b>{n}</b>
                      {sx}
                    </span>
                    <em>↗</em>
                  </span>
                  <small>{l}</small>
                </a>
              ))}
            </div>
            <Contrib />
          </section>

          <section id="projects">
            <Head
              n="01"
              label="projects"
              right={
                <a href={GH} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              }
            />
            <div
              className="deck"
              tabIndex={0}
              aria-label="Projects"
              onPointerMove={tilt}
              onPointerLeave={untilt}
              onKeyDown={(e) =>
                e.key === "ArrowRight"
                  ? step(1)
                  : e.key === "ArrowLeft" && step(-1)
              }
              onPointerDown={(e) => (px.current = e.clientX)}
              onPointerUp={(e) => {
                const d = e.clientX - px.current;
                if (Math.abs(d) > 60) step(d < 0 ? 1 : -1);
              }}
            >
              {PROJECTS.map((p, i) => (
                <article
                  key={p.n}
                  data-i={i}
                  className="dc"
                  onClick={() => i !== act && setAct(i)}
                  aria-label={p.n}
                >
                  <div className="im">
                    <img
                      src={p.img}
                      alt={`${p.n} screenshot`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (e.target.src !== p.alt) e.target.src = p.alt;
                      }}
                    />
                  </div>
                  <div className="bd">
                    <span className="pill">{p.t}</span>
                    <h3>{p.n}</h3>
                    <p>{p.d}</p>
                    <a
                      className="btn"
                      href={p.u}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i === act ? 0 : -1}
                    >
                      Visit site ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="ctl">
              <button onClick={() => step(-1)} aria-label="Previous project">
                prev
              </button>
              <span>
                {act + 1} / {PROJECTS.length}
              </span>
              <button onClick={() => step(1)} aria-label="Next project">
                next
              </button>
            </div>
          </section>

          <section id="experience">
            <Head n="02" label="experience" />
            <div className="list">
              {EXP.map(([y, r, c]) => (
                <div className="row" key={r}>
                  <span className="yr">{y}</span>
                  <span className="r">{r}</span>
                  <span className="c">{c}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="stack">
            <Head n="03" label="stack" />
            <div className="list">
              {STACK.map(([k, v]) => (
                <div className="grp" key={k}>
                  <span>{k}</span>
                  <div className="tags">
                    {v.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications">
            <Head n="04" label="certifications" />
            <div className="list">
              {CERTS.map(([a, b]) => (
                <div className="row two" key={a}>
                  <span className="r">{a}</span>
                  <span className="c">{b}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="testimonials">
            <Head n="05" label="testimonials" />
            <p className="tq">“{Q.q}”</p>
            <p className="who">
              <b>{Q.a}</b> · {Q.p}
            </p>
            <div className="dots">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  aria-current={i === qi}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setQi(i)}
                />
              ))}
            </div>
          </section>

          <section id="contact">
            <Head n="06" label="contact" />
            <h2 className="big">Let’s build something great.</h2>
            <p style={{ color: "var(--mut)" }}>
              Open to full-time roles, freelance projects and collaborations.
            </p>
            <div className="links list">
              <a href={`mailto:${EMAIL}`}>
                {EMAIL}
                <span>↗</span>
              </a>
              <a href={CAL} target="_blank" rel="noopener noreferrer">
                Schedule a call<span>↗</span>
              </a>
              <a href={GH} target="_blank" rel="noopener noreferrer">
                GitHub @jrmmllrs<span>↗</span>
              </a>
              <a href={LI} target="_blank" rel="noopener noreferrer">
                LinkedIn /jrmmllrs<span>↗</span>
              </a>
            </div>
          </section>

          <footer>
            <span>© 2026 Jerome Millares</span>
            <span style={{ display: "flex", gap: 18 }}>
              <a className="mono" href="/privacy">
                Privacy Policy
              </a>
              <button className="mono" onClick={() => goTo("#top")}>
                Back to top ↑
              </button>
            </span>
          </footer>
        </div>
      </main>

      {pal && (
        <div className="pal" onClick={() => setPal(false)}>
          <div
            className="pb"
            role="dialog"
            aria-label="Quick navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              placeholder="Jump to, copy, open…"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setSel(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setSel((s) => Math.min(s + 1, list.length - 1));
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setSel((s) => Math.max(s - 1, 0));
                }
                if (e.key === "Enter") run(list[sel]);
              }}
            />
            {list.length ? (
              <ul>
                {list.map((c, i) => (
                  <li
                    key={c.l}
                    className={i === sel ? "s" : ""}
                    onMouseEnter={() => setSel(i)}
                    onClick={() => run(c)}
                  >
                    {c.l}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="none">No matches.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return /^\/privacy\/?$/.test(window.location.pathname) ? (
    <Privacy />
  ) : (
    <Home />
  );
}
