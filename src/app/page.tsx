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
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}

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
              Yashwanth K S
            </span>{" "}
            👋
          </h1>

          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-slate-300/90">
            I specialize in designing and building reliable, high-performance backend
            systems using <span className="font-semibold text-sky-300">Java</span>,{" "}
            <span className="font-semibold text-sky-300">Spring Boot</span>,{" "}
            <span className="font-semibold text-sky-300">Spring WebFlux</span>,
            and PostgreSQL — with a strong focus on scalability, automation, and clean
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
                href="tel:+917019198836"
              >
                +91 70191 98836
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
