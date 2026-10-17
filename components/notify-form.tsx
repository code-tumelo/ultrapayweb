"use client";

import { useState } from "react";
import { Check, ChevronDown, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SignupError, sendSignup } from "@/lib/emailjs";
import { PROVINCES, ROLES, isValidContact } from "@/lib/roles";

type Status = "idle" | "loading" | "success" | "error";

const SUCCESS_MESSAGE = "You're on the list. We'll tell you when UltraPay goes live.";

const fieldClass =
  "h-12 w-full rounded-md border-2 border-black/30 bg-white px-4 text-sm text-black placeholder:text-neutral-500 focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

export function NotifyForm() {
  const [role, setRole] = useState("");
  const [province, setProvince] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!role) {
      setStatus("error");
      setMessage("Please choose who you are.");
      return;
    }
    if (!isValidContact(contact)) {
      setStatus("error");
      setMessage("Enter a valid email or phone number.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Spam trap: real visitors never see or fill this field, bots usually do.
    // Pretend it worked so the bot moves on, but send nothing.
    if (trap) {
      setStatus("success");
      setMessage(SUCCESS_MESSAGE);
      return;
    }

    try {
      await sendSignup({ role, province, contact });
      setStatus("success");
      setMessage(SUCCESS_MESSAGE);
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof SignupError ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        id="notify"
        role="status"
        className="flex max-w-xl scroll-mt-28 items-center gap-3 rounded-md border-2 border-black bg-taxi px-5 py-4 text-sm font-semibold text-black shadow-[3px_3px_0_0_#000]"
      >
        <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form id="notify" onSubmit={onSubmit} noValidate className="w-full max-w-xl scroll-mt-28">
      {/* Honeypot: hidden from people and screen readers, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="role" className="sr-only">
              I am a
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`${fieldClass} appearance-none pr-11 ${role ? "" : "text-neutral-500"}`}
            >
              <option value="" disabled>
                I am a…
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r} className="bg-white text-black">
                  {r}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
          </div>

          <div className="relative">
            <label htmlFor="province" className="sr-only">
              Province (optional)
            </label>
            <select
              id="province"
              name="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className={`${fieldClass} appearance-none pr-11 ${province ? "" : "text-neutral-500"}`}
            >
              <option value="">Province (optional)</option>
              {PROVINCES.map((p) => (
                <option key={p} value={p} className="bg-white text-black">
                  {p}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="sm:flex-1">
            <label htmlFor="contact" className="sr-only">
              Email or phone number
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="Email or phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={fieldClass}
            />
          </div>
          <Button type="submit" size="lg" disabled={status === "loading"}>
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            Notify me
          </Button>
        </div>
      </div>

      <p role="alert" className="mt-3 min-h-5 text-sm font-medium text-red-700">
        {status === "error" ? message : null}
      </p>
    </form>
  );
}
