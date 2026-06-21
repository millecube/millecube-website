import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Millecube Digital (Cadoo Venture Sdn. Bhd.) — governing the provision of digital marketing services to clients in Malaysia.",
  alternates: { canonical: "https://millecube.com/terms" },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(6,31,23,0.45)", marginBottom: "48px" }}>
          Last updated: June 2026 &nbsp;|&nbsp; Cadoo Venture Sdn. Bhd. (202301026716)
        </p>

        <Section title="1. About These Terms">
          <p>
            These Terms of Service govern the relationship between <strong>Cadoo Venture Sdn. Bhd.</strong> (trading as Millecube Digital, Company No. 202301026716) and clients who engage our digital marketing services.
          </p>
          <p style={{ marginTop: "12px" }}>
            By engaging Millecube Digital for services — whether through a signed proposal, email agreement, or WhatsApp confirmation — you accept these terms.
          </p>
        </Section>

        <Section title="2. Services">
          <p>Millecube Digital provides digital marketing services including, but not limited to:</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Paid media management (Meta Ads, Google Ads, TikTok Ads)</li>
            <li>Marketplace management (Shopee, Lazada, TikTok Shop)</li>
            <li>Search engine optimisation (SEO)</li>
            <li>Social media management</li>
            <li>Website and landing page design</li>
            <li>Content production and creative services</li>
            <li>Branding and marketing strategy</li>
          </ul>
          <p style={{ marginTop: "12px" }}>The specific scope of work and deliverables are defined in the proposal or service agreement provided to each client.</p>
        </Section>

        <Section title="3. Payment Terms">
          <p>
            Monthly retainer services are invoiced at the start of each month and are due within 7 days of invoice date. Project-based services require a 50% deposit before work commences, with the balance due upon completion.
          </p>
          <p style={{ marginTop: "12px" }}>
            Ad spend is paid directly by the client to the respective platforms (Meta, Google, TikTok, Shopee, Lazada). Millecube Digital does not hold client ad spend funds.
          </p>
          <p style={{ marginTop: "12px" }}>
            Late payments may result in a pause of services. We will notify the client before any service interruption.
          </p>
        </Section>

        <Section title="4. Contract Duration & Cancellation">
          <p>
            Millecube Digital operates on month-to-month agreements. There is no minimum lock-in period. Either party may terminate the agreement with 30 days written notice via email.
          </p>
          <p style={{ marginTop: "12px" }}>
            Upon termination, Millecube Digital will complete the current billing month and hand over all campaign assets, login credentials, and reporting data to the client within 14 days.
          </p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            Upon full payment, all creative assets produced specifically for the client (ad creatives, copy, website files) become the property of the client. Millecube Digital retains the right to display work in its portfolio unless otherwise agreed in writing.
          </p>
          <p style={{ marginTop: "12px" }}>
            Any tools, templates, proprietary frameworks, or internal processes used in the delivery of services remain the intellectual property of Millecube Digital.
          </p>
        </Section>

        <Section title="6. Client Responsibilities">
          <p>The client agrees to:</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Provide accurate business information, access to accounts, and approved assets in a timely manner</li>
            <li>Ensure all products, services, and marketing claims comply with Malaysian consumer and advertising laws</li>
            <li>Maintain sufficient ad budget to run campaigns as planned</li>
            <li>Provide feedback on deliverables within the agreed review period (typically 3 business days)</li>
          </ul>
        </Section>

        <Section title="7. Results & Warranties">
          <p>
            Millecube Digital applies best-practice strategies and works diligently to achieve agreed campaign goals. However, we do not guarantee specific results including ROAS targets, ranking positions, or revenue outcomes, as these are influenced by factors outside our control (ad platform algorithms, market conditions, product-market fit, seasonality).
          </p>
          <p style={{ marginTop: "12px" }}>
            We commit to transparent, monthly reporting and honest communication about campaign performance.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            Millecube Digital{"'"}s liability to any client shall not exceed the total fees paid by the client in the 3 months preceding any claim. We are not liable for indirect, consequential, or incidental losses including lost profits or business interruption.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms are governed by the laws of Malaysia. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Malaysia.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>For questions about these Terms, contact us at:</p>
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
