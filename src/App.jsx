import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider  from "./components/context/AuthProvider";  // ✅ AuthProvider import করো

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Toys from "./pages/Toys";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ToyCard from "./pages/ToyCard";
import Register from "./pages/Register";
import ToyDetails from "./pages/ToyDetails";

const App = () => {
  return (
    <AuthProvider>  
      <BrowserRouter>
        <Navbar />

        <main className="min-h-[80vh] pt-24 pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/toy" element={<ToyCard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/toy/:id" element={<ToyDetails />} />


          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
