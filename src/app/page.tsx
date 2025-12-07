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
      {/* HERO */}
      <Section id="hero" className="pt-28 sm:pt-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="inline-flex items-center rounded-full border border-slate-700 bg-bg-soft/70 px-3 py-1 text-xs sm:text-sm text-slate-300 shadow">
            Backend Engineer · Building scalable systems with Java
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Yashwanth KS
            </span>{" "}
            👋
          </h1>

          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-slate-300/90">
            I design and build reliable, high-performance backend systems using{" "}
            <span className="font-semibold text-sky-300">Java</span>,{" "}
            <span className="font-semibold text-sky-300">Spring Boot</span>,{" "}
            <span className="font-semibold text-sky-300">Spring WebFlux</span>{" "}
            and <span className="font-semibold text-sky-300">PostgreSQL</span>,
            with a strong focus on automation, scalability, and clean
            architecture.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </Section>

      {/* SKILLS (moved up) */}
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
                className="card border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-900/40 px-3 py-2 text-sm sm:text-[0.9rem] text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* PROJECTS (visual style) */}
      <Section id="projects">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="section-title">Projects</h2>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="card p-6 sm:p-7 flex flex-col md:flex-row gap-6"
          >
            {/* Visual / diagram placeholder */}
            <div className="md:w-1/3">
              <div className="h-40 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/10 border border-slate-700 flex items-center justify-center text-xs sm:text-sm text-slate-300/90">
                Architecture Diagram / API Flow<br />
                <span className="text-slate-500">(Add an image later here)</span>
              </div>
            </div>

            {/* Project content */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-sky-300">
                Automated RPL/DPL Data Ingestion &amp; Consolidation System
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-200/90">
                A production-style backend system that automates downloading,
                parsing, normalizing, and consolidating global Restricted Party /
                Denied Party List (RPL/DPL) datasets across multiple formats
                (CSV, JSON, XML, Excel).
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-200/90">
                Includes a reactive ingestion pipeline, incremental change
                detection (insert / update / delete), a source registry with
                schedulers, and optimized PostgreSQL persistence using a unified
                schema.
              </p>

              <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-200/90 list-disc list-inside">
                <li>Multi-format ingestion and data normalization.</li>
                <li>
                  Incremental change detection and duplicate handling (based on
                  name / address).
                </li>
                <li>Scheduler-driven automation for each data source.</li>
                <li>High-performance REST APIs with Swagger documentation.</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200/90">
                  Java
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200/90">
                  Spring Boot
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200/90">
                  Spring WebFlux
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200/90">
                  PostgreSQL
                </span>
              </div>

              {/* Buttons (optional – fill href later) */}
              <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
                <a
                  href="#"
                  className="rounded-md border border-slate-600 px-3 py-1.5 text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
                >
                  View Code (Coming soon)
                </a>
                <a
                  href="#"
                  className="rounded-md border border-slate-600 px-3 py-1.5 text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
                >
                  API Docs (Coming soon)
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ABOUT (moved after projects) */}
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
              I&apos;m a Java Backend Developer with 3.5+ years of experience
              designing and building enterprise-grade microservices using Spring
              Boot, Spring WebFlux, and Spring Security.
            </p>
            <p>
              I specialize in automation workflows, multi-format data ingestion,
              incremental update engines, and clean backend architectures.
              I&apos;ve worked in domains like Global Trade Management (GTM),
              Trade Content Management (TCM), and Content Distribution Systems
              (CDS).
            </p>
            <p>
              I enjoy solving complex backend problems, optimizing performance,
              and collaborating with frontend teams to ship reliable, scalable
              systems.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* EXPERIENCE */}
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

          <div className="card p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-sky-300">
              Software Engineer — Mihaan ITS{" "}
              <span className="text-slate-400">(Jun 2024 – Present)</span>
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-200/90 list-disc list-inside">
              <li>
                Built and optimized reactive CRUD APIs for Global Trade
                Management using Spring WebFlux.
              </li>
              <li>
                Engineered multi-format ingestion pipelines for JSON, XML, and
                Excel-based RPL files.
              </li>
              <li>
                Implemented robust incremental update logic (insert / update /
                delete) to keep data in sync.
              </li>
              <li>
                Reduced manual data cleanup effort through normalization and
                preprocessing flows.
              </li>
              <li>
                Contributed to a tenant-based content distribution system for
                automated trade content delivery.
              </li>
            </ul>
          </div>

          <div className="card p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-sky-300">
              Junior Software Engineer — Wissen Infotech{" "}
              <span className="text-slate-400">(Mar 2022 – Jan 2024)</span>
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-200/90 list-disc list-inside">
              <li>Developed Spring Boot microservices for enterprise systems.</li>
              <li>
                Implemented JWT-based authentication and authorization for
                secure REST APIs.
              </li>
              <li>
                Worked on billing automation and workflow optimization for
                government projects.
              </li>
              <li>
                Improved code quality and reliability with JUnit5, Mockito, and
                SonarQube-driven refactoring.
              </li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* CONTACT – slightly improved layout */}
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
          Designed &amp; Built by Yashwanth K S · {new Date().getFullYear()}
        </p>
      </Section>
    </main>
  );
}
