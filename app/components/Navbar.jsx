"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services", isAnchor: true },
    { href: "/contact", label: "Contact" },
  ];

  const linkCls = (item) => {
    const isActive = !item.isAnchor && pathname === item.href;
    return `px-4 py-2 rounded-full transition-all duration-100 relative ${
      isActive ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;
  };

  return (
    <header>
      <nav
        data-state={open ? "active" : "closed"}
        className="fixed z-50 w-full px-2"
      >
        <div
          style={{
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
            WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          }}
          className={`mx-auto mt-2 max-w-7xl px-4 lg:px-8 transition-all duration-500 ease-out ${
            scrolled
              ? "rounded-2xl border border-white/10"
              : "border border-transparent"
          }`}
        >
          <div className="relative flex h-16 items-center justify-between">

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

            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <ul className="flex gap-8 text-sm">
                {navItems.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className={linkCls(it)}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close Menu" : "Open Menu"}
              aria-expanded={open}
              className="lg:hidden -m-2.5 p-2.5 text-gray-300 hover:text-white"
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.path
                  strokeLinecap="round"
                  animate={open ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  strokeLinecap="round"
                  animate={open ? { opacity: 0 } : { d: "M4 12h16", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  strokeLinecap="round"
                  animate={open ? { d: "M6 6l12 12" } : { d: "M4 18h16" }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-white/10 overflow-hidden"
              >
                <ul className="space-y-2 px-4 py-3">
                  {navItems.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className={`block ${linkCls(it)}`}
                        onClick={() => setOpen(false)}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}