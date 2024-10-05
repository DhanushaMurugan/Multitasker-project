import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpImg from '../image/Sign up-img.png'
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/menuPage");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-playfair">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl shadow-lg rounded-lg bg-white">
        {/* Left Side - Image Section */}
        <div className="hidden lg:block">
          <img
            src={signUpImg}
            alt="Registration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="flex flex-col justify-center p-8 lg:p-16 bg-gray-50 rounded-r-lg">
          <h1 className="text-4xl font-bold mb-6 text-gray-700">
            Register Now
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
            />

            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-bold text-xl font-weight rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <p
                onClick={() => navigate("/loginPage")}
                className="text-black cursor-pointer hover:underline"
              >
                <b>Login here</b>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


