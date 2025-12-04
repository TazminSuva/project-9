import React, { useState } from "react";
import Toys from "./Toys";

// Import hero images
import slide1 from "../assets/pexels-pixabay2.jpg";
import slide2 from "../assets/images.jpeg3.jpeg";
import slide3 from "../assets/images.jpeg4.jpeg";

const Home = () => {  
  // Slider data
  const slides = [
    {
      id: 1,
      img: slide1,
      title: "Welcome to KidsToy World",
      desc: "Find the perfect toy for every age and imagination!",
    },

    {
      id: 2,
      img: slide2,
      title: "Creative Toys for Smart Kids",
      desc: "Build, learn, and grow with fun interactive toys.",
    },
    {
      id: 3,
      img: slide3,
      title: "Make Every Day Playful",
      desc: "Discover colorful and educational toys for your kids!",
    },
  ];

  // State for current slide
  const [current, setCurrent] = useState(0);

  // Previous slide
  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Next slide
  const handleNext = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // Current slide object
  const slide = slides[current];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen pt-28 pb-20 mt-[-30px] mb-[-50px]">
      <title>KidsToy - Home</title>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl overflow-hidden p-4">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          {/* Slide Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg mb-5">{slide.desc}</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow">
              Shop Now
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-3 text-2xl"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-3 text-2xl"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Toys Section */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Toys />
      </div>
    </div>
  );
};

export default Home;
