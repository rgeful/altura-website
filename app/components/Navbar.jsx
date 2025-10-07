"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const linkCls = (href) =>
    `px-2 py-1 rounded-md transition ${
      pathname === href ? "text-white" : "text-gray-300 hover:text-white"
    }`;

  return (
    <header>
      <nav
        data-state={open ? "active" : "closed"}
        className="fixed z-50 w-full px-2"
      >
        <div
          className={`mx-auto mt-2 max-w-7xl px-4 lg:px-8 transition-all duration-300 ${
            scrolled
              ? "bg-background/50 rounded-2xl border border-white/10 backdrop-blur"
              : ""
          }`}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Left: Logo */}
            <Link href="/" aria-label="home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Altura Logo"
                width={42}
                height={42}
                className="object-contain"
                priority
              />
            </Link>

            {/* Center: Desktop links */}
            <div className="absolute inset-0 m-auto hidden w-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navItems.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className={linkCls(it.href)}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Mobile menu button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close Menu" : "Open Menu"}
              aria-expanded={open}
              className="lg:hidden -m-2.5 p-2.5 text-gray-300 hover:text-white"
            >
              {/* Hamburger / Close (inline SVGs to avoid extra deps) */}
              {!open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="lg:hidden border-t border-white/10">
              <ul className="space-y-2 px-4 py-3">
                {navItems.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className={`block ${linkCls(it.href)}`}
                      onClick={() => setOpen(false)}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}