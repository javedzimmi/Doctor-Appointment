import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked!", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600">
      {/* Card Container */}
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-white border border-white/30">
        
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center mb-6">Welcome Back</h2>
        <p className="text-center text-white/70 mb-6">Sign in to your account</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-white/80 text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white/80 text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password & Login Button */}
          <div className="flex justify-between text-sm text-white/70">
            <a href="#" className="hover:text-white">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center text-white/50">
          <hr className="flex-grow border-white/30" />
          <span className="mx-4">OR</span>
          <hr className="flex-grow border-white/30" />
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition duration-300">
          <img src="https://www.svgrepo.com/show/512317/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>

        {/* Signup Link */}
        <p className="mt-4 text-center text-white/80">
          Don't have an account?{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
