import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ align, children }) => {
  const alignmentClasses = {
    topleft: "items-start justify-start sm:w-2/5",
    bottomleft: "items-end justify-start sm:w-2/5",
    top: "items-start justify-center sm:w-4/5",
    bottom: "items-end justify-center sm:w-4/5"
  };

  return (
    <motion.section
      className={`h-screen flex ${
        alignmentClasses[align] || "items-center justify-center w-4/5"
      } p-4 sm:p-10 text-zblue`}
      initial={{ opacity: 1, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
      style={{ paddingTop: "10vh" }}
    >
      <div className="flex items-center justify-center w-full">
        <div className="w-full bg-zwhite bg-opacity-70 rounded-lg px-4 sm:px-8 py-6 sm:py-12 text-xs sm:text-sm">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default Section;
