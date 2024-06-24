import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function GamePortalButton() {
  const buttonVariants = {
    blink: {
      scale: [1, 1.1, 1],
      boxShadow: [
        "0px 0px 8px rgb(255,255,255)",
        "0px 0px 12px rgb(255,255,255)",
        "0px 0px 8px rgb(255,255,255)",
      ],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-full h-20 z-10 flex justify-center items-center">
      <motion.button
        variants={buttonVariants}
        animate="blink"
        style={{
          padding: "10px 20px",
          border: "none",
          color: "white",
          fontSize: "8px",
          borderRadius: "8px",
          outline: "none",
          cursor: "pointer",
        }}
        className="bg-zred"
      >
        <Link className="font-pixel" href="/zgames">PLAY</Link>
      </motion.button>
    </div>
  );
}
