"use client";

import { useEffect, useState } from "react";
import { Bus, Menu, X } from "lucide-react";

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
      <span className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-black bg-taxi text-black">
        <Bus className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "font-display text-2xl font-extrabold uppercase leading-none tracking-wide",
          inverted ? "text-white" : "text-black"
        )}
      >
        Ultra<span className={inverted ? "text-taxi" : "bg-taxi px-1"}>Pay</span>
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
        scrolled || open ? "border-b border-black/10 bg-white/90 backdrop-blur-md" : "bg-transparent"
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

        <div className="hidden xl:block">
          <Button size="sm" asChild>
            <a href="#notify">Notify me</a>
          </Button>
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
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-black/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-2" asChild>
            <a href="#notify" onClick={() => setOpen(false)}>
              Notify me
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
