import React, { useState } from 'react';
import Section from './Section'; // Assurez-vous d'importer correctement votre composant Section

const Carousel = ({ align, list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((currentIndex + list.length - 1) % list.length);
  }

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % list.length);
  }

  return (
    <Section align={align}>
      <div className="flex justify-between items-center w-full p-1">
        <button
          className="text-lg sm:text-2xl bg-zred text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-zblue"
          onClick={prevItem}
        >
          ←
        </button>
        <div className="flex flex-col items-center justify-center flex-grow mx-2">
          {list.length > 0 && list[currentIndex] ? (
            <>
            <h1 className="bg-zred text-zwhite font-bold px-4 text-lg sm:text-xl sm:text-2xl my-4 mt-0">
                {list[currentIndex].name} {list[currentIndex].emoji}
              </h1>
              <p className="text-xs sm:text-sm sm:text-base min-h-[80px] max-h-[80px] my-0">
                {list[currentIndex].description}
              </p>
            </>
          ) : (
            <p>No data available.</p>
          )}
        </div>
        <button
          className="text-lg sm:text-2xl bg-zred text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-zblue"
          onClick={nextItem}
        >
          →
        </button>
      </div>
    </Section>
  );
};

export default Carousel;
