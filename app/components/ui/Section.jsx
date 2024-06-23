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
      } p-2 sm:p-10 text-zblue`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, delay: 0.6 },
      }}
      style={{ paddingTop: "1vh" }}
    >
      <div className="flex items-center justify-center w-full">
        <div className="w-full bg-zwhite bg-opacity-70 rounded-lg px-4 sm:px-3 py-3 sm:py-3 text-xs sm:text-sm font-bold m-0">
          {children}
          {/* <p className="animate-bounce mt-4 sm:mt-6 mb-0">↓</p> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Section;
