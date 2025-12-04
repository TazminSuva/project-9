// src/pages/MyProfile.jsx
import React from "react";
import { useAuth } from "../components/context/AuthProvider";

export default function MyProfile() {
  const { user } = useAuth();

  // Show a message if the user is not logged in
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500">
        <h2 className="text-3xl font-bold text-white mb-4">Please Login First!</h2>
        <p className="text-white text-lg">You need to login to view your profile.</p>
      </div>
    );
  }

  const handleUpdateProfile = () => {
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 pt-20 mt-[-30px] mb-[-40px]">

    <title>KidsToy - My Profile</title>

      <div className="max-w-sm w-full bg-gradient-to-br from-green-500 to-pink-900 rounded-2xl shadow-lg p-6 space-y-5">
        <h1 className="text-2xl font-bold text-center text-pink-600">My Profile</h1>
        <p className="text-center text-white">Manage your KidsToy account</p>

        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/96"}
            alt={user.displayName || "User"}
            className="w-24 h-24 rounded-full shadow"
          />
        </div>

        {/* Individual Info Boxes */}
        <div className="space-y-3">
          <div className="bg-pink-100 p-3 rounded-lg shadow-sm">
            <p className="text-gray-700 font-semibold">Name</p>
            <p className="text-gray-900">{user.displayName || "No Name"}</p>
          </div>

          <div className="bg-purple-100 p-3 rounded-lg shadow-sm">
            <p className="text-gray-700 font-semibold">Email</p>
            <p className="text-gray-900">{user.email}</p>
          </div>

          <div className="bg-blue-100 p-3 rounded-lg shadow-sm break-all">
            <p className="text-gray-700 font-semibold">Photo URL</p>
            <p className="text-gray-900">{user.photoURL || "No Photo"}</p>
          </div>
        </div>

        {/* Update Profile Button */}
        <button
          onClick={handleUpdateProfile}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
