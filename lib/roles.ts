// Role options and contact validation used by the Notify Me form.
export const ROLES = [
  "Taxi owner / operator (SME)",
  "Taxi association or forum",
  "Driver",
  "Vendor / spaza shop",
  "Commuter",
  "Commuter without a bank account",
  "Other",
] as const;

export type Role = (typeof ROLES)[number];

export const PROVINCES = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
] as const;

export type Province = (typeof PROVINCES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Accepts an email, or a South African / international phone number. */
export function isValidContact(value: string): boolean {
  const v = value.trim();
  if (EMAIL_RE.test(v)) return true;
  const digits = v.replace(/[\s()-]/g, "");
  return /^\+?\d{9,15}$/.test(digits);
}
