import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id == id);
        setToy(found);
      });
  }, [id]);

  if (!toy) return <p className="text-center text-white py-10">Loading...</p>;

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen pt-28 pb-20 mt-[-30px] mb-[-50px]">

      {/* 🔹 Top Details Section */}
      <div className="bg-gradient-to-r from-purple-500 to-green-500 p-10 rounded-3xl shadow-xl grid md:grid-cols-2 gap-10">

        <img
          src={toy.img}
          alt={toy.title}
          className="w-full h-[420px] object-cover rounded-xl"
        />

        <div className="text-white w-full">
          <h1 className="text-3xl font-bold mb-2">{toy.title}</h1>
          <p><b>Category:</b> {toy.category}</p>
          <p><b>Seller:</b> {toy.seller}</p>
          <p><b>Rating:</b> {toy.rating} ⭐</p>
          <p><b>Available:</b> {toy.available}</p>
          <p className="text-xl font-semibold mt-3">${toy.price}</p>

          <p className="mt-4"><b>Description:</b> {toy.description}</p>

          <Link to="/">
            <button className="mt-6 bg-pink-600 hover:bg-green-700 px-6 py-3 rounded-lg">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/*  Extra Form Section at Bottom */}
      <div className="max-w-xl mx-auto mt-20 bg-gradient-to-r from-purple-500 to-green-500 p-10 rounded-3xl text-white shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Try Now</h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 focus:outline-none"
            />
          </div>

          <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition">
            Try Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default ToyDetails;
