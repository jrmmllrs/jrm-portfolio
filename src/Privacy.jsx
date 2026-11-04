import { useEffect } from "react";
import "./privacy.css";

const EMAIL = "jeromemillares.dev@gmail.com";
const UPDATED = "November 4, 2026";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Jerome Millares";
    const mq = matchMedia("(prefers-color-scheme: light)");
    const t = localStorage.getItem("theme") || "dark";
    document.documentElement.dataset.theme =
      t === "system" ? (mq.matches ? "light" : "dark") : t;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pv">
      <a href="/" className="pv-back">
        ← Back to portfolio
      </a>

      <h1>Privacy Policy</h1>
      <p className="pv-meta">Last updated: {UPDATED}</p>

      <p>
        This Privacy Policy explains how <strong>Jerome Millares</strong> ("I",
        "me", "my") handles information on this personal portfolio website (the
        "Site"). I keep data collection to a minimum, and I do not sell your
        personal information.
      </p>

      <h2>1. Information I collect</h2>
      <p>
        <strong>Information you give me directly.</strong> If you email me at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or book a call through Calendly,
        I receive the details you choose to share, such as your name, email
        address, and message. The Site itself has no sign-up, login, or contact
        form that stores your data.
      </p>
      <p>
        <strong>Information stored in your browser.</strong> The Site saves your
        theme preference (light, dark, or system) in your browser's local
        storage. This stays on your device, is never sent to me, and you can
        clear it at any time.
      </p>
      <p>
        <strong>Technical data.</strong> Like any website, the hosting provider
        (Vercel) may automatically log standard technical data such as IP
        address, browser type, and pages requested, for security and to operate
        the service. I do not use this data to identify you personally.
      </p>

      <h2>2. Cookies and analytics</h2>
      <p>
        The Site does not use advertising cookies or tracking pixels. If I add
        analytics in the future, I will update this policy.
      </p>

      <h2>3. Third-party services</h2>
      <p>
        The Site loads or links to third-party services, each with its own
        privacy policy:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> – website hosting.
        </li>
        <li>
          <strong>Calendly</strong> – scheduling calls (only when you click
          "Schedule a call").
        </li>
        <li>
          <strong>GitHub</strong> and a public contributions API
          (github-contributions-api.jogruber.de) – to display my public
          contribution graph. Your browser makes this request; no personal data
          about you is sent on purpose.
        </li>
        <li>
          <strong>WordPress mshots</strong> – to display project preview
          screenshots.
        </li>
        <li>
          <strong>LinkedIn</strong> – outbound profile link.
        </li>
      </ul>

      <h2>4. Google user data</h2>
      <p>
        The Site does not require you to sign in and does not access, collect,
        store, or share any Google user data. If this changes (for example, if I
        add Google Sign-In or Google API features), I will describe exactly
        which data is accessed and why, and my use of information received from
        Google APIs will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. Google user data will never be
        sold, used for advertising, or transferred to others except as needed to
        provide the feature, comply with law, or with your consent.
      </p>

      <h2>5. How I use information</h2>
      <p>
        I use information you send me only to respond to your message, discuss
        work opportunities or collaborations, and schedule calls. I do not use
        it for marketing lists or share it with third parties, except where
        required by law.
      </p>

      <h2>6. Data retention</h2>
      <p>
        Emails and scheduling details are kept only as long as needed for the
        purpose above, and I will delete them on request.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may ask me to access, correct, or delete any personal information I
        hold about you. This policy is intended to respect applicable data
        protection laws, including the Philippine Data Privacy Act of 2012 (RA
        10173). Contact me at the email below.
      </p>

      <h2>8. Children's privacy</h2>
      <p>
        The Site is not directed at children under 13, and I do not knowingly
        collect their personal information.
      </p>

      <h2>9. Security</h2>
      <p>
        The Site is served over HTTPS. No method of transmission or storage is
        100% secure, but I take reasonable steps to protect the information I
        receive.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        I may update this policy from time to time. The "Last updated" date
        above will reflect the latest version.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions or requests? Email me at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <footer className="pv-foot">
        <span>© 2026 Jerome Millares</span>
        <a href="/">Home</a>
      </footer>
    </main>
  );
}
