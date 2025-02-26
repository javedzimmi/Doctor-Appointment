import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onsubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="min-h-[80vh] flex items-center justify-center bg-gray-100"
      onSubmit={onsubmitHandler}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please {state === 'Sign Up' ? 'Sign Up' : 'Log in'} to book an appointment
        </p>

        {/* Name Field (Only for Sign Up) */}
        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
            />
          </div>
        )}

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle Between Sign Up & Login */}
        <p className="text-center text-gray-600 mt-4">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
          <button
            type="button"
            className="text-blue-600 font-medium ml-1 hover:underline"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </button>
          
        </p>
      </div>
    </form>
  );
};

export default Login;
