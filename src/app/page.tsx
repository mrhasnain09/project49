"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      {/* Circle Container */}
      <div className="w-[500px] h-[500px] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center p-8">
        
        {/* Header */}
        <nav className="flex justify-center space-x-6 mb-6">
          <Link href="/" className="text-lg font-semibold text-indigo-600 hover:text-indigo-800">
            Home
          </Link>
          <Link href="/contact" className="text-lg font-semibold text-indigo-600 hover:text-indigo-800">
            Contact
          </Link>
        </nav>

        {/* Welcome Text */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My Page
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          This is a simple homepage designed completely inside a circle.  
          You can customize it as per your needs and make it more creative.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition">
            Start Chat
          </button>
        </div>

        {/* Image */}
        <div className="mt-6">

            alt="Circle Pic"
            className="rounded-full border-4 border-indigo-300 shadow-lg"
          /
        </div>
      </div>
    </div>
  );
};

export default HomePage;
