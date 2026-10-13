import { NextResponse } from "next/server";

import { ROLES, isValidContact } from "@/lib/roles";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { role, contact } = (body ?? {}) as { role?: unknown; contact?: unknown };

  if (typeof role !== "string" || !(ROLES as readonly string[]).includes(role)) {
    return NextResponse.json({ ok: false, error: "Please choose who you are." }, { status: 400 });
  }
  if (typeof contact !== "string" || !isValidContact(contact)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email or phone number." },
      { status: 400 }
    );
  }

  // TODO: store this somewhere real (database, Google Sheet, Mailchimp, Resend, etc.).
  // For now it is only logged on the server so you can see the form working.
  console.log("[notify-me]", { role, contact: contact.trim() });

  return NextResponse.json({ ok: true });
}
