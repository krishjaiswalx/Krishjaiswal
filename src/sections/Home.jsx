import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import avator from "../assets/avator.png";

/* =======================
   Social Links
======================= */
const socials = [
  { icon: FaXTwitter, label: "X", href: "https://x.com/krishjaiswalx" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/krishjaiswalx/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/krishjaiswalx" },
];

/* =======================
   Glow Animation
======================= */
const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.15,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,.9)) drop-shadow(0 0 16px rgba(16,185,129,.7))",
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },
  tap: { scale: 0.95 },
};

export default function Home() {
  const roles = useMemo(
    () => ["Software Developer", "Full Stack Developer"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => (deleting ? prev - 1 : prev + 1)),
      deleting ? 45 : 65
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 min-h-screen flex items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] w-full items-center gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col 
                          items-center text-center 
                          lg:items-start lg:text-left">

            {/* Typing Role */}
            <motion.div
              className="text-[clamp(0.95rem,2.2vw,1.4rem)] font-semibold text-white min-h-[1.5em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {roles[index].substring(0, subIndex)}
              <span className="inline-block w-[2px] h-[0.9em] ml-1 bg-white animate-pulse" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="mt-3 text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] font-bold"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-transparent bg-clip-text">
                Hello, I'm
              </span>
              <br />
              <span className="text-white">Krish Jaiswal</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 text-[clamp(0.9rem,2.3vw,1.1rem)] leading-relaxed text-gray-300 max-w-[40ch]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              I'm a passionate software developer specializing in building
              high-performance, scalable digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center 
                         justify-center lg:justify-start gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-white 
                           bg-gradient-to-r from-[#2cd8d2] via-[#00bf8f] to-[#302b63] 
                           shadow-lg hover:scale-105 transition-transform"
              >
                View My Work
              </a>

              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full font-medium text-black 
                           bg-white shadow-lg hover:bg-gray-200 
                           hover:scale-105 transition-transform"
              >
                My Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <div className="mt-8 flex 
                            justify-center lg:justify-start 
                            gap-6 text-xl">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300 hover:text-[#1cd8d2]"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT AVATAR ================= */}
          <div className="relative hidden lg:flex justify-end">
            <div
              className="absolute top-1/2 -translate-y-1/2 right-10 w-[22vw] h-[22vw] rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
              }}
            />

            <motion.img
              src={avator}
              alt="Krish Jaiswal"
              className="relative object-contain select-none pointer-events-none"
              style={{ width: "min(40vw, 650px)", maxHeight: "85vh" }}
              initial={{ opacity: 0, y: 40, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}