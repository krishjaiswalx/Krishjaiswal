import { motion } from "framer-motion"
import hackfest from "../assets/hackfest.png"
import Gsoc from "../assets/Gsoc.png"


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
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >

      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full">
        {achieve.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}