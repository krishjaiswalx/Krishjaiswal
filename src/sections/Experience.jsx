import { motion } from "framer-motion";

const experiences = [
{
  role: "Sigma 4.0 Batch Student",
  company: "Apna College",
  duration: "2024 – Present",
  points: [
    "Completed structured Full Stack Web Development curriculum covering MERN stack.",
    "Built multiple real-world projects implementing authentication, REST APIs, and database integration.",
    "Strengthened core Computer Science fundamentals including DSA and backend architecture.",
    "Practiced Git-based workflows and deployment using platforms like Vercel and Render."
  ],
},

];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-black text-white py-20 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[280px] h-[280px] bg-gradient-to-r from-[#1cd8d2] to-[#302b63] opacity-20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[280px] h-[280px] bg-gradient-to-r from-[#00bf8f] to-[#302b63] opacity-20 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line (hidden on very small screens if needed) */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-white/20" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline Dot */}
                <span className="absolute left-3 sm:left-5 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]" />

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col h-full">
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">
                    {exp.company}
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}