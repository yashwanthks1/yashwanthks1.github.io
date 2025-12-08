"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { skills } from "@/components/data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main>
      {/* ========================================================= */}
      {/* 1. HERO SECTION — FINAL FIXED LAYOUT */}
      {/* ========================================================= */}
      <section id="hero" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        {/* IMPORTANT: flex-col (NOT flex-col-reverse) */}
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10">

          {/* TEXT FIRST — always above image on mobile */}
          <div className="flex-1 text-center sm:text-left">
            {/* Tagline */}
            <p className="inline-flex items-center rounded-full border border-slate-700 bg-bg-soft/70 px-4 py-1 text-sm sm:text-base text-slate-300">
              Backend Engineer · Building scalable systems with Java
            </p>

            {/* Heading */}
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight flex flex-wrap justify-center sm:justify-start gap-3">
              Hi, I&apos;m <span className="text-sky-400">Yashwanth K S</span>
              <span className="wave text-5xl">👋</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto sm:mx-0">
              I build scalable backend systems using <span className="text-sky-400">Java</span>,
              <span className="text-sky-400"> Spring Boot</span>,
              <span className="text-sky-400"> WebFlux</span>, and PostgreSQL —
              focused on automation, performance, and clean architecture.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 hover:bg-sky-400 px-6 py-3 text-black font-medium shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-500 px-6 py-3 font-medium"
              >
                Contact Me
              </a>

              <a
                href="/resume/Yashwanth K S.pdf"
                download
                className="group rounded-full px-6 py-3 text-sm font-semibold transition
          bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950
          shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40
          hover:scale-[1.03]"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16" />
                  </svg>
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          {/* IMAGE SECOND — always below text on mobile */}
          <div className="flex-1 flex justify-center sm:justify-end mt-8 sm:mt-0">
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-slate-700
        bg-gradient-to-br from-sky-400/40 to-purple-500/40 overflow-hidden shadow-xl">
              <img
                src="/profile.jpg"
                alt="Yashwanth K S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SKILLS SECTION */}
      {/* ========================================================= */}

      <Section id="skills">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.06, y: -2 }}
                className="card border border-slate-800/80 bg-slate-900/40 px-3 py-2 text-sm sm:text-[0.9rem] text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
      {/* 3. PROJECTS SECTION */}
      {/* ========================================================= */}

      <Section id="projects">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>

          {/* PROJECT CARD */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="card p-6 sm:p-7 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/30 shadow-lg shadow-black/30"
          >
            <h3 className="text-xl font-semibold text-sky-300 leading-tight">
              Automated RPL/DPL Data Ingestion &amp; Consolidation System
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-200/90">
              A production-grade backend system that automates downloading, parsing,
              normalizing, and consolidating global RPL/DPL datasets across formats
              like CSV, JSON, XML, and Excel.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-200/90">
              Includes a reactive ingestion pipeline, incremental change detection,
              duplicate resolution, scheduler automation, and optimized PostgreSQL
              persistence using a unified schema.
            </p>

            <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-200/90 list-disc list-inside">
              <li>Multi-format ingestion & complex data normalization.</li>
              <li>Incremental change detection with duplicate handling.</li>
              <li>Scheduler-driven automated ingestion system.</li>
              <li>High-performance REST APIs with Swagger documentation.</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm">
              {["Java", "Spring Boot", "Spring WebFlux", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-slate-200/90 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
      {/* 4. EXPERIENCE SECTION */}
      {/* ========================================================= */}

      <Section id="experience">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="section-title">Experience</h2>

          {/* JOB 1 */}
          <div className="card p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-sky-300">
              Software Engineer — Mihaan ITS{" "}
              <span className="text-slate-400">(Jun 2024 – Present)</span>
            </h3>

            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-200/90 list-disc list-inside">
              <li>Developing high-performance reactive APIs using WebFlux.</li>
              <li>Designed multi-format ingestion pipelines (JSON, XML, Excel).</li>
              <li>
                Implemented incremental update logic to keep large datasets in sync.
              </li>
              <li>Normalization logic reduces manual cleanup effort significantly.</li>
              <li>
                Part of a tenant-based content distribution platform for global trade
                management.
              </li>
            </ul>
          </div>

          {/* JOB 2 */}
          <div className="card p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-sky-300">
              Junior Software Engineer — Wissen Infotech{" "}
              <span className="text-slate-400">(Mar 2022 – Jan 2024)</span>
            </h3>

            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-200/90 list-disc list-inside">
              <li>Developed Spring Boot microservices for enterprise systems.</li>
              <li>Implemented secure JWT-based authentication for REST APIs.</li>
              <li>Worked on billing automation for government projects.</li>
              <li>Improved code quality with JUnit5, Mockito & SonarQube.</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
      {/* 5. ABOUT SECTION */}
      {/* ========================================================= */}

      <Section id="about">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-8"
        >
          <h2 className="section-title">About Me</h2>

          <div className="space-y-4 text-slate-200/90 text-sm sm:text-base leading-relaxed">
            <p>
              I&apos;m a Java Backend Developer with over 3.5+ years of experience
              building scalable enterprise systems using Spring Boot, Microservices,
              and Spring WebFlux.
            </p>

            <p>
              I specialize in automation, ingestion workflows, incremental update
              engines, and designing clean backend architectures for complex
              datasets.
            </p>

            <p>
              My work spans domains like Global Trade Management (GTM), Trade
              Content Management (TCM), and Content Distribution Systems (CDS).
            </p>

            <p>
              Outside of work, I enjoy learning new backend technologies, system
              design concepts, and optimizing performance in real workflows.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
      {/* 6. CONTACT SECTION */}
      {/* ========================================================= */}

      <Section id="contact">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-7"
        >
          <h2 className="section-title">Contact</h2>

          <div className="space-y-3 text-sm sm:text-base">
            <p>
              📞 Phone:{" "}
              <a
                className="text-sky-300 hover:text-sky-400"
                href="tel:+916361435240"
              >
                +91 63614 35240
              </a>
            </p>

            <p>
              📧 Email:{" "}
              <a
                className="text-sky-300 hover:text-sky-400"
                href="mailto:yashwanthks574@gmail.com"
              >
                yashwanthks574@gmail.com
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                className="text-sky-300 hover:text-sky-400"
                href="https://linkedin.com/in/yashwanthks98"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yashwanthks98
              </a>
            </p>

            <p>
              🐙 GitHub:{" "}
              <a
                className="text-sky-300 hover:text-sky-400"
                href="https://github.com/yashwanthks1"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yashwanthks1
              </a>
            </p>

            <p className="text-slate-400 text-sm mt-4">📍 Bangalore, India</p>
          </div>
        </motion.div>

        <p className="mt-8 mb-10 text-center text-xs text-slate-500">
          Designed & Built by Yashwanth K S · {new Date().getFullYear()}
        </p>
      </Section>
    </main>
  );
}
