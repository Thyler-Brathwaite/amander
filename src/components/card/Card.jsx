import React from "react";

const Card = ({ title, description, image, image2 }) => {
  return (
    <div className="relative w-[900px] h-[550px] bg-gradient-to-r flex items-center justify-between px-8 py-6 rounded-xl shadow-md overflow-hidden space-x-20 transition-all duration-500">
      
      
      {image2 && (
        <img
          src={image2}
          alt="corner decoration"
          className="absolute top-4 left-4 w-12 h-12 animate-bounce"
        />
      )}

      {/* Text Section */}
      <div className="max-w-[250px] space-y-3 z-10">
        <h1 className="text-3xl font-serif font-bold leading-tight">{title}</h1>
        <p className="text-gray-700 text-sm leading-snug">{description}</p>
      </div>

      {/* Main Image */}
      <div className="rounded p-4 flex items-center justify-center z-10 bg-white shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-[600px] h-[350px] object-contain rounded-lg "
        />
      </div>
    </div>
  );
};

export default Card;