import React, { useState } from "react";
import car1 from "../assets/pexels-pixabay2.jpg";
import car2 from "../assets/images.jpeg3.jpeg";
import car3 from "../assets/images.jpeg4.jpeg";

const ToyCard = () => {
  const toys = [
    { id: 1, name: "Super Racing Car", price: 25, img: car1 },
    { id: 2, name: "Pink Doll Set", price: 35, img: car2 },
    { id: 3, name: "Lego Blocks", price: 40, img: car3 },
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? toys.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === toys.length - 1 ? 0 : prev + 1));

  const toy = toys[current];

  return (
    <div className="max-w-sm mx-auto mt-10 rounded-2xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={toy.img}
          alt={toy.name}
          className="w-full h-64 object-cover transition-opacity duration-500"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-2xl"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-2xl"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {toys.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{toy.name}</h2>
        <p className="text-gray-600 mt-1">Price: ${toy.price}</p>
        <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
