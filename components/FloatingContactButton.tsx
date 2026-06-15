"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Mail } from "lucide-react";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Heroを過ぎたあたりで表示
    setIsVisible(latest > window.innerHeight * 0.8);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            fixed
            bottom-6
            right-6
            z-50
            bg-[#1f2937]
            text-white
            px-6
            py-4
            rounded-full
            shadow-xl
            hover:bg-[#111827]
            transition
            font-semibold        
            flex
            items-center
            gap-2
          "
        >      
          <Mail size={18} />
          お問い合わせ
        </motion.a>
      )}
    </AnimatePresence>
  );
}
