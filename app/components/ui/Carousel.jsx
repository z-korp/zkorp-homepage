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
      <div className="flex justify-between items-center w-full p-4">
        <button
          className="text-2xl bg-zred text-white font-bold py-2 px-4 rounded-full hover:bg-zblue"
          onClick={prevItem}
        >
          ←
        </button>
        <div className="flex flex-col items-center justify-center text-center flex-grow">
          {list.length > 0 && list[currentIndex] ? (
            <>
              <h1 className="bg-zred text-zwhite font-bold px-1 text-xl sm:text-2xl">
                {list[currentIndex].name} {list[currentIndex].emoji}
              </h1>
              <p className="text-sm sm:text-base">
                {list[currentIndex].description}
              </p>
            </>
          ) : (
            <p>No data available.</p>
          )}
        </div>
        <button
          className="text-2xl bg-zred text-white font-bold py-2 px-4 rounded-full hover:bg-zblue"
          onClick={nextItem}
        >
          →
        </button>
      </div>
    </Section>
  );
};

export default Carousel;
