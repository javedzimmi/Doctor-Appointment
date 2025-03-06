import React from "react";
import { Link } from "react-router-dom";

const DoctorLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          <span className="text-blue-500">Doctor</span> Login
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Admin Login?{" "}
          <Link to="/admin" className="text-blue-500 hover:underline">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorLogin;
