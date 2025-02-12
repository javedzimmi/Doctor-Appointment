import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom"; // Import from react-router-dom

const Navbar = () => {
    const navigate=useNavigate();


  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.admin_logo} alt="Admin Logo" />
      
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={()=>navigate("/login")} className="bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block ">Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
