// Sends a "Notify me" sign-up to your inbox through EmailJS (https://www.emailjs.com).
// The three NEXT_PUBLIC_* values are safe to expose in the browser: EmailJS designed the
// public key for client-side use. They must be written as plain `process.env.NEXT_PUBLIC_X`
// so Next.js can inline them at build time.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/** An error whose message is safe to show to visitors. */
export class SignupError extends Error {}

export async function sendSignup({
  role,
  province,
  contact,
}: {
  role: string;
  province?: string;
  contact: string;
}) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn(
      "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY (see README)."
    );
    throw new SignupError("Sign-up isn't switched on yet. Please try again soon.");
  }

  // Loaded on demand so the EmailJS code only downloads when someone actually submits
  const emailjs = await import("@emailjs/browser");

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        // These names are the {{variables}} you use in your EmailJS template
        role,
        province: province || "Not given",
        contact: contact.trim(),
        submitted_at: new Date().toLocaleString("en-ZA", {
          timeZone: "Africa/Johannesburg",
          dateStyle: "medium",
          timeStyle: "short",
        }),
        page_url: window.location.href,
      },
      {
        publicKey: PUBLIC_KEY,
        blockHeadless: true, // refuse obvious bots
        limitRate: { id: "ultrapay-signup", throttle: 10_000 }, // at most one send per 10s per browser
      }
    );
  } catch (err) {
    const status = (err as { status?: number } | null)?.status;
    console.error("EmailJS send failed:", err);
    if (status === 429) {
      throw new SignupError("Please wait a few seconds, then try again.");
    }
    throw new SignupError("We couldn't save your details. Please try again.");
  }
}
