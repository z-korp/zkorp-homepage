import React from 'react';
import Section from './Section'; // Assurez-vous que le composant Section est correctement importé

const SmartCarousel = ({
  align,
  opacity,
  currentIndex,
  setCurrentIndex,
  list
}) => (
  <Section align={align} style={{ opacity }}>
    <div className="flex justify-between items-center w-full p-0">
      <button
        // className="text-lg sm:text-sm bg-zred text-white font-bold py-2 px-4 sm:py-1 sm:px-0 rounded-full hover:bg-zblue"
          className="text-lg sm:text-2xl bg-zred text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-zblue"
        onClick={() => setCurrentIndex(
          (currentIndex + list.length - 1) % list.length
        )}
      >
        ←
      </button>
      <div className="flex flex-col items-center justify-center text-center flex-grow mx-2 my-0">
        {list.length > 0 && list[currentIndex] ? (
          <>
            <h1 className="bg-zred text-zwhite font-bold px-4 text-lg sm:text-l sm:text-2xl my-4 mt-0">
              {list[currentIndex].name} {list[currentIndex].emoji || ''}
            </h1>
            <p className="text-xs sm:text-sm sm:text-base min-h-[80px] max-h-[80px] my-0">
              {list[currentIndex].description}
            </p>
          </>
        ) : (
          <p className="text-justify ">No data available.</p>
        )}
      </div>
      <button
          className="text-lg sm:text-2xl bg-zred text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-zblue"
        onClick={() => setCurrentIndex(
          (currentIndex + 1) % list.length
        )}
      >
        →
      </button>
    </div>
  </Section>
);

export default SmartCarousel;
