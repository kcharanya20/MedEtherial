import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Track whether in login or signup mode (optional)
  // const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate(); // Get the navigate function for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual API endpoint for signup
    const url = 'http://localhost:8000/api/v1/users/signup';

    try {
      const formData = {
        username,
        password,
      };

      const response = await axios.post(url, formData);
      console.log('Signup successful');
      const data = await response.data;

      // Handle successful signup (e.g., display success message)
      alert('Signup successful!');

      // Update login state in parent component (if applicable)
      onSignup && onSignup();

      // Optional: Redirect to login page (if desired)
      // navigate('/login');

    } catch (error) {
      console.error('Signup error:', error.message + " " + error);
      alert('Signup failed. Please try again.'); // User-friendly error message
    }
  };

  // Removed toggleMode function and related JSX as it's not needed
  // for a dedicated signup form

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('sunset.jpg')" }}>
      <div className="wrapper rounded-lg border-2 border-black backdrop-filter backdrop-blur-md bg-opacity-20 bg-gray-800 shadow-lg p-8 text-black">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center mb-8 text-black">Sign Up</h1>
          <div className="input-box relative mb-6">
            <i className='bx bxs-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'></i>
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full bg-transparent border-2 border-black rounded-full text-black px-10 py-4 text-lg focus:outline-none shadow-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box relative mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full bg-transparent border-2 border-black rounded-full text-black px-10 py-4 text-lg focus:outline-none shadow-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className='bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400'></i>
          </div>
          <button type="submit" className="btn w-full py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;