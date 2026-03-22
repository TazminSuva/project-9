// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useAuth } from "../components/context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { createUser, googleSignIn } = useAuth();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔹 Email Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(email, password);
      if (res.success) {
        await res.user.updateProfile({
          displayName: name,
          photoURL: photo,
        });
        navigate("/register"); // redirect after successful signup
      } else {
        setError("❌ Failed to create account!");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong!");
    }
  };

  // 🔹 Google Sign Up
  const handleGoogleSignUp = async () => {
    try {
      const res = await googleSignIn();
      if (res.success) {
        navigate("/register");
      } else {
        setError("❌ Google signup failed!");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 pt-20 mt-[-30px] mb-[-40px]">

    <title>KidsToy - Sign Up</title>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-6">Join KidsToy today!</p>

        <form onSubmit={handleSignUp}>
          {/* Name */}
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block text-gray-700">Photo URL</label>
          <input
            type="text"
            placeholder="Your Photo URL"
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setPhoto(e.target.value)}
          />

          {/* Email */}
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border p-2 rounded mb-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* 👁️ Toggle Icon */}
            <button
              type="button"
              className="absolute right-3 top-[40%] -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 my-4">or</p>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex justify-center items-center gap-2 border py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>

        {error && (
          <p className="text-center mt-4 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}
