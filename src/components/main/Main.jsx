import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "../card/Card";

const Main = () => {
  const { currentCard, nextCard, prevCard } = useContext(AppContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentCard]);

  const floatingCount = 8; // number of floating elements

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen transition-colors duration-700 ${currentCard.bgColor}`}
    >
      {/* Floating images */}
      <div key={currentCard.title} className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: floatingCount }).map((_, i) => {
          const img = currentCard.floatingImage;
          return (
            <img
              key={i}
              src={img}
              alt="floating element"
              className="absolute animate-rise opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Card */}
      <div
        className={`relative bg-gradient-to-r ${currentCard.color} p-4 rounded-2xl transition-all duration-700 z-10`}
      >
        <Card {...currentCard} />
        <audio ref={audioRef} autoPlay loop>
          <source src={currentCard.song} type="audio/mpeg" />
        </audio>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6 z-10">
        <button
          onClick={prevCard}
          className="bg-white/50 hover:bg-white text-black px-4 py-2 rounded-md transition-all"
        >
          Prev
        </button>
        <button
          onClick={nextCard}
          className="bg-white/50 hover:bg-white text-black px-4 py-2 rounded-md transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
