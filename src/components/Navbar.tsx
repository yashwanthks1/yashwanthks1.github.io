"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 
        transition-all duration-300 ease-in-out
        ${isShrunk ? "py-2 shadow-lg" : "py-4"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-xl font-semibold text-sky-300 
            hover:text-sky-400 transition
          "
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

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-300 hover:text-sky-400 transition text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-950/95 border-t border-slate-800 
          flex flex-col px-6 text-base
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 py-4 space-y-4 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <Link href="#hero" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
        <Link href="#about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
        <Link href="#skills" className="nav-link" onClick={() => setOpen(false)}>Skills</Link>
        <Link href="#experience" className="nav-link" onClick={() => setOpen(false)}>Experience</Link>
        <Link href="#projects" className="nav-link" onClick={() => setOpen(false)}>Projects</Link>
        <Link href="#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
