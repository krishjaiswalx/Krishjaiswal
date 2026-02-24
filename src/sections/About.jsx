import { motion } from "framer-motion";
import React from "react";
import Profile from "../assets/Profile.jpg";

export default function About() {
  const Stats = [
    { label: "Experience", value: "1+ years" },
    { label: "Speciality ", value: "Full Stack Development" },
    { label: "Focus", value: "Performance & UX" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      
      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-10 py-16 flex flex-col gap-12">
        
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]
              rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 80 }}
          >
            <img
              src={Profile}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1 flex-col justify-center text-center md:text-left">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
              Krish Jaiswal
            </h2>

            <p className="mt-2 text-base sm:text-lg text-white/90 font-semibold">
              Full Stack Developer
            </p>

            
            <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base max-w-2xl md:max-w-3xl">
              I'm a passionate software developer with expertise in building exceptional digital experiences focus on clean architecture,
              delightful UX, and Performance. My toolkid spans Java, React, Node.js, JavaScript, Tailwind CSS, and RestfulAPI- enabling me to craft seamless web applications With a strong foundation in DSA.
            </p>

            
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              {Stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 * i, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-xs text-gray-400">{stat.label}</div>
                  <div className="text-sm font-semibold">{stat.value}</div>
                </motion.div>
              ))}
            </div>

           
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition text-sm"
              >
                View Project
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 border-white/20 text-white font-semibold px-5 py-3 hover:bg-white/10 transition text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            About Me
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I'm a passionate software developer and Web developer - passionate about building fast,resilent applications and sharing
          </p>

          <p className="mt-1 text-gray-400 text-sm sm:text-base">
            I love turning ideas into scalable user-friendly products that make an impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}
