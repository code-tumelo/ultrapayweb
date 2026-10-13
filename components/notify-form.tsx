"use client";

import { useState } from "react";
import { Check, ChevronDown, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ROLES, isValidContact } from "@/lib/roles";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "h-12 w-full rounded-md border-2 border-black/30 bg-white px-4 text-sm text-black placeholder:text-neutral-500 focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

export function NotifyForm() {
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, contact }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setMessage("You're on the list. We'll tell you when UltraPay goes live.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
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
      <div className="space-y-3">
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
