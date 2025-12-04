import React, { useState } from "react";
import { useAuth } from "../components/context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [googleLoading, setGoogleLoading] = useState(false); // 🔥 Prevent double popup

  const { signInUser, googleSignIn } = useAuth();
  const navigate = useNavigate();

  // Email login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await signInUser(email, password);

      if (res.success) {
        navigate("/profile");
      } else {
        setMessage("❌ Invalid email or password!");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong!");
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    if (googleLoading) return; // 🔥 block second click

    setGoogleLoading(true);
    setMessage("");

    try {
      const res = await googleSignIn();

      if (res.success) {
        navigate("/profile");
      } else {
        setMessage("❌ Google login failed!");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Google login failed!");
    } finally {
      setGoogleLoading(false); // release block
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 pt-20 mt-[-30px] mb-[-40px]">
      <title>KidsToy - Sign In</title>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleEmailLogin}>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 pr-10"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="absolute right-3 bottom-[35%] -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 my-4">or</p>

        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full flex justify-center items-center gap-2 border py-2 rounded hover:bg-gray-100 transition disabled:opacity-50"
        >
          <FcGoogle size={20} />
          {googleLoading ? "Please wait..." : "Continue with Google"}
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-red-600">{message}</p>
        )}

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-600 font-semibold">
            Please Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
