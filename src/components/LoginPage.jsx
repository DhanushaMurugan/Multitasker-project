

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from '../image/Login-img.png'
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/menupage");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    console.log("Logging in with", { email, password });
    setError("");
  };

  return (
    <div className="flex min-h-screen items-center bg-gray-100">
      <div className="w-full lg:w-1/2 p-8 lg:p-16 bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          {error && <p className="text-red-500">{error}</p>}
          <h2 className="text-4xl font-playfair mb-10 text-gray-700">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 "
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="w-full text-xl p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:block w-1/2">
        <img
          src={loginImg}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
