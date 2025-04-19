import React, { useContext, useState } from 'react';
import { assets } from "../assets/assets";
import { AdminContext } from '../context/AdminContext';
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState("Doctor");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const endpoint =
        state === "Admin" ? "/api/admin/login" : "/api/doctor/login";

      const { data } = await axios.post(backendUrl + endpoint, {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem('aToken', data.token);
        setAToken(data.token);
        toast.success("Login successful!");
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <div className="mb-6 text-center">
          <p className="text-2xl font-semibold text-gray-800">
            <span className="capitalize text-blue-500">{state}</span> Login
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-1">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          {state === "Admin" ? "Doctor Login?" : "Admin Login?"}{' '}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => setState(state === "Admin" ? "Doctor" : "Admin")}
          >
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
