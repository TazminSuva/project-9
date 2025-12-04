import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Column 1 - Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">KidsToy</h2>
          <p>Washington 165, NY 54003</p>
          <p>+31 85 964 47 25</p>
          <p>info@yourdomain.com</p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaFacebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaLinkedin size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 - Our Condition */}
        <div>
          <h3 className="font-semibold mb-2">Our Condition</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Join Us</a></li>
          </ul>
        </div>

        {/* Column 4 - Drop a Message */}
        <div>
          <h3 className="font-semibold mb-2">Drop a Message</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l-md w-full text-white focus:outline-2"
            />
            <button className="bg-pink-600 text-white px-3 rounded-r-md font-semibold hover:bg-white-700">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs mt-6">
        © {new Date().getFullYear()} KidsToy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
