import React from "react";
import hackfest from "../assets/hackfest.png"
import Gsoc from "../assets/Gsoc.png"
import { motion } from "framer-motion";

// Creating shorter variables for motion components to make code cleaner
const MH2 = motion.h2; // Animated <h2> tag
const MDiv = motion.div; // Animated <div> tag

// Array containing all testimonial data (name, role, review, image)
const achieve = [
    {
    title: "HackFest – GDG Bhubaneswar",
    description:
      "Participated in HackFest organized by GDG Bhubaneswar. Collaborated in a team to build and present a working prototype under strict time constraints, strengthening rapid development and problem-solving skills.",
    image: hackfest,
  },
  {
    title: "Google Summer of Code",
    description:
      "Explored open-source ecosystems, studied contribution workflows, and prepared proposals while learning real-world software development practices and collaborative version control.",
    image: Gsoc,
  },
];

function Achievements() {
  return (
    <section
      id="achievements" // ID for navigation
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <MH2
        initial={{ opacity: 0, y: -50 }} // Start invisible & slightly above
        animate={{ opacity: 1, y: 0 }} // Fade in & slide down
        transition={{ duration: 0.6 }} // Animation duration is 0.6s
        className="text-4xl font-bold mb-16" // Styling for title
      >
        Achievements
      </MH2>

      {/* Grid for all testimonial cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Looping through testimonials array to create each card */}
       {achieve.map((item, i) => (
      <MDiv
        key={item.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
      >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-xl mb-6 border border-white/30"
              loading="lazy"
            />

            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </MDiv>
        ))}
      </div>
    </section>
  );
}

// Exporting the component so it can be used in App.jsx
export default Achievements;
