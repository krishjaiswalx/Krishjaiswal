import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function Overlaymenu({ isopen, onclose }) {
  const origin =
    typeof window !== "undefined" && window.innerWidth < 1024
      ? "95% 8%"
      : "50% 8%";

  return (
    <AnimatePresence>
      {isopen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <button
            onClick={onclose}
            className="text-white text-3xl absolute top-6 right-6"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Achievements",
              "Contact",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onclose}
                  className="text-white text-4xl font-semibold hover:text-pink-400 transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
