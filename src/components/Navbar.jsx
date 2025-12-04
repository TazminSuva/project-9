import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {
  //  user info  useState
  const [user, setUser] = useState(null);

  //  mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  //  firebase auth system connect
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });
    return () => unsubscribe(); // cleanup
  }, [auth]);

  //  Logout function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Sign Out!");
      })
      .catch((error) => console.error("Sign-out failed:", error));
  };

  return (
    // Navbar main part
    <nav className="w-full bg-gradient-to-r from-green-400 to-pink-300 px-6 py-6 flex items-center justify-between fixed top-0 left-0 z-50">
      
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link to="/" className=" text-2xl font-bold text-white ">
          KidsToy
        </Link>
      </div>

      {/*  Middle Menu (Desktop only) */}
      <ul className="hidden md:flex gap-6 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
        <li>
          {/*  Home link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 underline font-semibold"
                : "text-white hover:text-pink-600"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          {/* 🔹 Profile link */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 underline font-semibold"
                : "text-white hover:text-pink-600"
            }
          >
            My Profile
          </NavLink>
        </li>
      </ul>

      {/* Right Side: Sign In / Out */}
      <div className="flex items-center gap-3 md:gap-5">
        {user && <FcBusinessman className="text-3xl" title={user.email} />}

        {user ? (
          <button
            onClick={handleSignOut}
            className="hidden md:block bg-white text-red-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-100"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block bg-white text-pink-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-100"
          >
            Sign In
          </Link>
        )}

        {/*  Mobile menu icon (3 dots) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <HiOutlineDotsVertical className="text-white text-3xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-6 top-14 bg-white rounded-lg shadow-lg w-44 py-2 flex flex-col gap-2 md:hidden">
          
          {/*  Home */}
          <NavLink
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          {/*  Profile */}
          <NavLink
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
            onClick={() => setMenuOpen(false)}
          >
            My Profile
          </NavLink>

          {/*  Sign Out or Sign In (mobile version) */}
          {user ? (
            <button
              onClick={() => {
                handleSignOut();
                setMenuOpen(false);
              }}
              className="block px-4 py-2 text-red-600 hover:bg-gray-100 text-left rounded"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-pink-600 hover:bg-gray-100 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
