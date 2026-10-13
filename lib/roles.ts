// Shared by the Notify Me form and the /api/notify route so they never drift apart.
export const ROLES = [
  "Taxi owner / operator (SME)",
  "Taxi association or forum",
  "Driver",
  "Vendor / spaza shop",
  "Commuter",
  "Commuter without a bank account",
] as const;

export type Role = (typeof ROLES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Accepts an email, or a South African / international phone number. */
export function isValidContact(value: string): boolean {
  const v = value.trim();
  if (EMAIL_RE.test(v)) return true;
  const digits = v.replace(/[\s()-]/g, "");
  return /^\+?\d{9,15}$/.test(digits);
}
