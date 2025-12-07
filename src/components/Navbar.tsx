"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/80 bg-bg-soft/70 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-sm">
        <a href="#hero" className="font-semibold tracking-wide text-slate-100">
          Yashwanth K S<span className="text-sky-400"></span>
        </a>
        <div className="hidden gap-6 text-xs sm:flex sm:text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-sky-300 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
