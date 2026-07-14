import type { Config, Context } from "@netlify/functions";

const allowedServices = new Set([
  "Business IT Support",
  "PC & Laptop Repairs",
  "Installations & Upgrades",
  "Software Setup & Recovery",
  "Wi-Fi & Networking",
  "Custom PC Builds",
  "Something else",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function clean(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed." }, 405);
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return jsonResponse({ ok: false, error: "Enquiry is too large." }, 413);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request." }, 400);
  }

  const honeypot = clean(payload["bot-field"], 200);
  const reference = context.requestId.slice(0, 8).toUpperCase();
  if (honeypot) {
    return jsonResponse({ ok: true, reference });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 60);
  const email = clean(payload.email, 200).toLowerCase();
  const service = clean(payload.service, 120);
  const message = clean(payload.message, 3_000);

  if (name.length < 2) {
    return jsonResponse({ ok: false, error: "Please enter your name." }, 400);
  }
  if (!emailPattern.test(email)) {
    return jsonResponse({ ok: false, error: "Please enter a valid email address." }, 400);
  }
  if (!allowedServices.has(service)) {
    return jsonResponse({ ok: false, error: "Please select a valid service." }, 400);
  }
  if (message.length < 10) {
    return jsonResponse({ ok: false, error: "Please add a little more detail about the issue." }, 400);
  }

  const formBody = new URLSearchParams({
    "form-name": "mftg-enquiry",
    subject: `New MFTG enquiry: ${service}`,
    name,
    phone,
    email,
    service,
    message,
  });

  try {
    const origin = new URL(req.url).origin;
    const formResponse = await fetch(new URL("/__forms.html", origin), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
    });

    if (!formResponse.ok) {
      console.error("Netlify Forms rejected enquiry", {
        status: formResponse.status,
        requestId: context.requestId,
      });
      return jsonResponse({ ok: false, error: "The enquiry could not be recorded. Please try again." }, 502);
    }
  } catch (error) {
    console.error("Enquiry backend failed", { error, requestId: context.requestId });
    return jsonResponse({ ok: false, error: "The enquiry service is temporarily unavailable." }, 502);
  }

  return jsonResponse({ ok: true, reference });
};

export const config: Config = {
  path: "/api/enquiry",
};
