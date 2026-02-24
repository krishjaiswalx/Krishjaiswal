import { useState, useRef, useEffect } from "react";
import Overlaymenu from "../components/Overlaymenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(true);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  // Detect Home Section Visibility
  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  // Hide / Show Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-transparent`}
      >
        {/* Full Width Container */}
        <div className="w-full px-6 py-2 flex items-center justify-between">

          {/* LEFT: Logo + Name */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-6 h-6" />
            <span className="text-sm font-medium text-white hidden sm:block">
              Krish Jaiswal
            </span>
          </div>

          {/* RIGHT: Reach Out + Hamburger */}
          <div className="flex items-center gap-3">

            {/* Reach Out (Desktop Only) */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-blue-500
                           text-white px-4 py-1.5 rounded-full
                           text-xs font-medium
                           hover:opacity-90 transition-opacity duration-300"
              >
                Reach Out
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenu(true)}
              aria-label="Open Menu"
              className="text-white text-xl hover:scale-110 transition"
            >
              <FiMenu />
            </button>
          </div>

        </div>
      </nav>

      <Overlaymenu isopen={menu} onclose={() => setMenu(false)} />
    </>
  );
}