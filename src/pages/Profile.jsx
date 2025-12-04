// src/pages/MyProfile.jsx
import React from "react";
import { useAuth } from "../components/context/AuthProvider";

export default function MyProfile() {
  const { user } = useAuth();

  // If user is NOT logged in
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500">
        <h2 className="text-3xl font-bold text-white mb-4">Please Login First!</h2>
        <p className="text-white text-lg">You need to login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 pt-20 mt-[-30px] mb-[-40px]">

      <title>KidsToy - My Profile</title>

      <div className="max-w-sm w-full bg-gradient-to-br from-green-500 to-pink-900 rounded-2xl shadow-lg p-6 space-y-5 text-white">

        <h1 className="text-3xl font-bold text-center">My Profile</h1>
        <p className="text-center opacity-90">Manage your KidsToy account</p>

        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/96"}
            alt={user.displayName || "User"}
            className="w-24 h-24 rounded-full shadow-lg border-2 border-white"
          />
        </div>

        {/* Info Boxes */}
        <div className="space-y-3">

          <div className="bg-black bg-opacity-20 p-3 rounded-lg">
            <p className="font-semibold text-sm">Name</p>
            <p className="text-lg">{user.displayName || "No Name Available"}</p>
          </div>

          <div className="bg-black bg-opacity-20 p-3 rounded-lg">
            <p className="font-semibold text-sm">Email</p>
            <p className="text-lg break-all">{user.email}</p>
          </div>

          <div className="bg-black bg-opacity-20 p-3 rounded-lg">
            <p className="font-semibold text-sm">Photo URL</p>
            <p className="text-lg break-all">{user.photoURL || "No Photo URL"}</p>
          </div>

        </div>

        {/* Update Button */}
        <button
          onClick={() => alert("Profile update coming soon!")}
          className="w-full mt-4 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
