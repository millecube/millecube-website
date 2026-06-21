import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Millecube Digital (Cadoo Venture Sdn. Bhd.) — how we collect, use, and protect your personal data in compliance with Malaysia's Personal Data Protection Act 2010.",
  alternates: { canonical: "https://millecube.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 24px",
          fontFamily: "var(--font-montserrat)",
          color: "#1a1a1a",
          lineHeight: 1.75,
        }}
      >
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#07503c", marginBottom: "16px", textTransform: "uppercase" }}>
          Legal
        </p>
        <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#061f17", lineHeight: 1.05, marginBottom: "8px" }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(6,31,23,0.45)", marginBottom: "48px" }}>
          Last updated: June 2026 &nbsp;|&nbsp; Cadoo Venture Sdn. Bhd. (202301026716)
        </p>

        <Section title="1. Who We Are">
          <p>
            Millecube Digital is a trading name of <strong>Cadoo Venture Sdn. Bhd.</strong> (Company No. 202301026716), a company registered in Malaysia and operating from 2-5-9, Gat Lebuh Macallum, 10300 George Town, Pulau Pinang.
          </p>
          <p style={{ marginTop: "12px" }}>
            We are a digital marketing agency providing services including paid media management, marketplace management, SEO, website design, content production, and branding strategy for Malaysian businesses.
          </p>
        </Section>

        <Section title="2. Data We Collect">
          <p>We collect personal data only when you voluntarily provide it to us, including:</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Your name, business name, email address, and phone number (via our contact form)</li>
            <li>Information about your business and marketing goals (submitted via the enquiry form)</li>
            <li>Website usage data via Google Analytics 4 (anonymised, after consent)</li>
            <li>Ad interaction data via Meta Pixel and Google Ads tags (after consent)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>We use your personal data to:</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Respond to your enquiries and assess whether we are a suitable fit for your business</li>
            <li>Send project updates and reports if you become a client</li>
            <li>Improve our website and services using anonymised analytics data</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
          <p style={{ marginTop: "12px" }}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </Section>

        <Section title="4. Cookies & Tracking">
          <p>
            Our website uses cookies and tracking technologies. We request your consent before activating any non-essential tracking (Google Analytics 4, Meta Pixel, Google Ads) through our PDPA consent banner. You may withdraw consent at any time by clearing your browser cookies and revisiting the site.
          </p>
          <p style={{ marginTop: "12px" }}>Essential cookies (for basic site function) are always active and do not require consent.</p>
        </Section>

        <Section title="5. Data Storage & Security">
          <p>
            Enquiry data submitted via our contact form is transmitted over HTTPS and stored securely. We retain enquiry data for up to 24 months, after which it is deleted. Client project data is retained for the duration of the engagement plus 12 months.
          </p>
        </Section>

        <Section title="6. Your Rights Under PDPA 2010">
          <p>Under Malaysia{"'"}s Personal Data Protection Act 2010, you have the right to:</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Request access to your personal data we hold</li>
            <li>Request correction of inaccurate personal data</li>
            <li>Withdraw consent for data processing at any time</li>
            <li>Request deletion of your personal data (subject to legal retention requirements)</li>
          </ul>
          <p style={{ marginTop: "12px" }}>To exercise any of these rights, email us at <strong>hello@millecube.com</strong>.</p>
        </Section>

        <Section title="7. Third-Party Services">
          <p>We use the following third-party platforms that may process your data:</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li><strong>Google Analytics 4 & Google Tag Manager</strong> — website analytics (consent-gated)</li>
            <li><strong>Meta Business Suite / Meta Pixel</strong> — ad attribution (consent-gated)</li>
            <li><strong>Vercel</strong> — website hosting (edge CDN, Singapore region)</li>
            <li><strong>WhatsApp Business</strong> — client communication</li>
          </ul>
          <p style={{ marginTop: "12px" }}>Each platform operates under their own privacy policies. We configure these tools to minimise data retention where possible.</p>
        </Section>

        <Section title="8. Contact">
          <p>
            For any questions about this Privacy Policy or your personal data, contact us at:
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Email:</strong> hello@millecube.com<br />
            <strong>WhatsApp:</strong> +60 16-496 3875<br />
            <strong>Address:</strong> 2-5-9, Gat Lebuh Macallum, 10300 George Town, Pulau Pinang, Malaysia
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <h2 style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", fontWeight: 700, color: "#07503c", marginBottom: "12px" }}>
        {title}
      </h2>
      <div style={{ fontSize: "14px", color: "rgba(6,31,23,0.72)" }}>{children}</div>
    </div>
  );
}
