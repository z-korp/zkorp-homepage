import Link from "next/link";
import { motion } from "framer-motion";

export function PlayButton() {
  const buttonVariants = {
    blink: {
      scale: [1.5, 1.62, 1.5],
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
        className="bg-zred text-zwhite text-xs rounded-lg outline-none cursor-pointer py-2 px-4"
      >
        <Link className="font-pixel" href="/zgames">PLAY</Link>
      </motion.button>
    </div>
  );
}
