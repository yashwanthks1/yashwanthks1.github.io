"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-sky-300 hover:text-sky-400 transition"
        >
          Yashwanth K S
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-base">
          <Link href="#hero" className="nav-link">Home</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-sky-400 transition text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800 px-6 py-5 space-y-5 text-base">
          <Link href="#hero" onClick={() => setOpen(false)} className="nav-link">Home</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="nav-link">About</Link>
          <Link href="#skills" onClick={() => setOpen(false)} className="nav-link">Skills</Link>
          <Link href="#experience" onClick={() => setOpen(false)} className="nav-link">Experience</Link>
          <Link href="#projects" onClick={() => setOpen(false)} className="nav-link">Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="nav-link">Contact</Link>
        </div>
      )}
    </header>
  );
}
