"use client";

import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-teal-200 to-blue-200">
      {/* Circle Container */}
      <div className="w-[500px] h-[500px] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center p-8">
        
        {/* Header */}
        <nav className="flex justify-center space-x-6 mb-6">
          <Link href="/" className="text-lg font-semibold text-green-600 hover:text-green-800">
            Home
          </Link>
          <Link href="/contact" className="text-lg font-semibold text-green-600 hover:text-green-800">
            Contact
          </Link>
        </nav>

        {/* Contact Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Have any questions or want to reach out?  
          Feel free to send us a message below.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col space-y-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows={3}
            className="px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
