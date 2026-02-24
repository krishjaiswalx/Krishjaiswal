import { motion } from "framer-motion";
import Homigo from "../assets/Homigomob.png";
import Zestro from "../assets/Zestromob.png";

const projects = [
  {
    title: "Homigo – Airbnb Clone",
    description:
      "A full-stack rental booking platform with authentication, property listings, reviews, and RESTful backend integration.",
    image: Homigo,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/krishjaiswalx",
    live: "#",
  },
  {
    title: "Zestro – Food Ordering Platform",
    description:
      "Responsive food ordering application with dynamic cart system, API integration, and smooth UI/UX experience.",
    image: Zestro,
    tech: ["React", "Context API", "Tailwind", "REST API"],
    github: "https://github.com/krishjaiswalx",
    live: "#",
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white py-20 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-gradient-to-r from-[#302b63] to-[#1cd8d2] opacity-20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-r from-[#00bf8f] to-[#302b63] opacity-20 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Adaptive Grid */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons pinned bottom */}
                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition text-center"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="text-sm px-4 py-2 border border-white/20 rounded-md hover:bg-white/10 transition text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}