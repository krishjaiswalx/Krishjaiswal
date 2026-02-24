import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveHandler = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.transform = `translate3d(${
        e.clientX - 40
      }px, ${e.clientY - 40}px, 0)`;
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-70" />
    </div>
  );
}
