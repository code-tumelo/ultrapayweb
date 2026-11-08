"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#audiences", label: "Who it's for" },
  { href: "#how", label: "How it works" },
  { href: "#unbanked", label: "No bank account" },
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why UltraPay" },
];

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/brand/ultrapay-logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-9 w-9 rounded-xl ring-1 ring-ink/10"
      />
      <span
        className={cn(
          "font-display text-xl font-semibold leading-none tracking-tight",
          inverted ? "text-silver-50" : "text-ink"
        )}
      >
        Ultra<span className={inverted ? "text-silver-300" : "text-silver-500"}>Pay</span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-ink/5 bg-silver-50/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" aria-label="UltraPay home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div>


        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {open && (
        <div className="container flex flex-col gap-1 pb-4 xl:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-ink/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
