"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07111f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0 }}
        >
        <motion.img
          src="/basketball.png"
          alt="basketball"
          className="w-30 h-30"
           initial={{
            x: -500,
            y: 150,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            x: 500,
            y: 150,
            rotate: 1080,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 15,
          }}
/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}