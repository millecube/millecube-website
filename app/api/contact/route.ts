import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, company, services, budget, message, gclid, fbclid, event_id } = body as {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    services?: string[];
    budget?: string;
    message?: string;
    gclid?: string;
    fbclid?: string;
    event_id?: string;
  };

  const now = Math.floor(Date.now() / 1000);
  const uniqueEventId = event_id ?? `lead_${now}_${Math.random().toString(36).slice(2, 8)}`;
  const errors: string[] = [];

  /* ── Meta Conversions API ──────────────────────────────────────────────── */
  const pixelId = process.env.META_PIXEL_ID;
  const capiToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (pixelId && capiToken) {
    const userData: Record<string, string> = {
      client_ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "",
      client_user_agent: req.headers.get("user-agent") ?? "",
    };

    if (email) userData["em"] = sha256(email);
    if (phone) userData["ph"] = sha256(phone.replace(/\D/g, ""));
    if (name) {
      const parts = name.trim().split(/\s+/);
      userData["fn"] = sha256(parts[0]);
      if (parts.length > 1) userData["ln"] = sha256(parts.slice(1).join(" "));
    }
    // fbc cookie: fb.1.{timestamp}.{fbclid}
    if (fbclid) userData["fbc"] = `fb.1.${now * 1000}.${fbclid}`;

    const capiPayload = {
      data: [
        {
          event_name: "Lead",
          event_time: now,
          event_id: uniqueEventId,
          event_source_url: "https://millecube.com/contact",
          action_source: "website",
          user_data: userData,
          custom_data: {
            services: Array.isArray(services) ? services.join(", ") : "",
            budget: budget ?? "",
            company: company ?? "",
          },
        },
      ],
    };

    try {
      const res = await fetch(
        `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${capiToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(capiPayload),
        }
      );
      if (!res.ok) {
        const text = await res.text();
        errors.push(`Meta CAPI: ${text}`);
        console.error("[Contact API] Meta CAPI error:", text);
      } else {
        console.log("[Contact API] Meta CAPI Lead event fired for", email ?? "unknown");
      }
    } catch (err) {
      errors.push(`Meta CAPI fetch failed`);
      console.error("[Contact API] Meta CAPI exception:", err);
    }
  }

  /* ── Google Ads Enhanced Conversions ──────────────────────────────────────
     Google Ads click conversions are uploaded via the Google Ads API using the
     gclid captured at landing. This requires a service account or OAuth2 token.

     Recommended setup:
     1. Create a service account in Google Cloud Console
     2. Grant it "Google Ads API Manager" access in your Google Ads account
     3. Set GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, and
        GOOGLE_ADS_SERVICE_ACCOUNT_JSON environment variables
     4. Use the official Google Ads API client library to upload click conversions

     For now, the gclid is logged and passed back for client-side GTM to handle.
     GTM → Google Ads tag handles most conversion tracking cases without server-side.
  ──────────────────────────────────────────────────────────────────────────── */
  if (gclid) {
    console.log("[Contact API] gclid captured:", gclid, "— configure Google Ads API for server-side upload");
  }

  /* ── Lead Storage — webhook ────────────────────────────────────────────── */
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submitted_at: new Date().toISOString(),
          name,
          email,
          phone,
          company,
          services,
          budget,
          message,
          gclid: gclid ?? null,
          fbclid: fbclid ?? null,
          source: "website_contact_form",
        }),
      });
    } catch (err) {
      console.error("[Contact API] Lead webhook error:", err);
    }
  } else {
    // Log lead server-side when no webhook is configured
    console.log("[Contact API] New lead:", JSON.stringify({ name, email, company, services, budget }));
  }

  return NextResponse.json({
    success: true,
    event_id: uniqueEventId,
    ...(errors.length > 0 && { warnings: errors }),
  });
}
