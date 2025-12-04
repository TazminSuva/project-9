import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Loaded data:", data);
        setToys(data);
      })
      .catch((err) => console.error("❌ Failed to load:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">Popular Toys</h2>

      {toys.length === 0 ? (
        <p className="text-gray-200">Loading toys...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {toys.map((toy) => (
            <div
              key={toy.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <img
                  src={toy.img}
                  alt={toy.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{toy.title}</h3>
                  <p className="text-sm text-gray-500">{toy.category}</p>
                  <p className="text-sm mt-1 text-gray-600">Seller: {toy.seller}</p>
                  <p className="text-sm mt-1 text-gray-600">⭐ {toy.rating}</p>
                  <p className="text-sm mt-1 text-gray-600">Available: {toy.available}</p>
                  <p className="text-pink-600 font-bold mt-2">${toy.price}</p>
                </div>
              </div>

              {/* 🔹 View More Button */}
              <div className="p-4">
 <Link to={`/toy/${toy.id}`}>
  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg mt-3 transition">
    View More
  </button>
</Link>


              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toys;
