import { Button } from "@/components/ui/button";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-card border-b border-border/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2.5 group"
            data-ocid="logo-link"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/15 border border-primary/40 group-hover:bg-primary/25 transition-smooth">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <div className="leading-none">
              <div className="font-display font-bold text-sm text-foreground tracking-wide">
                A2H MOBILE
              </div>
              <div className="font-display text-xs text-primary font-semibold tracking-widest uppercase">
                Service Centre
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-smooth rounded-md hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a href="tel:9994342375" data-ocid="header-cta">
              <Button
                size="sm"
                className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/85 font-semibold transition-smooth"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </Button>
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              data-ocid="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav
            className="md:hidden border-t border-border py-3 pb-4 flex flex-col gap-1"
            data-ocid="mobile-nav"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-smooth"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:9994342375" className="mt-2" data-ocid="mobile-cta">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/85 font-semibold gap-2">
                <Phone className="w-4 h-4" />
                Call: 9994342375
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "a2h-mobile",
  );
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/40">
            <Wrench className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display font-bold text-foreground">
            A2H Mobile Service Centre
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} A2H Mobile Service Centre. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
