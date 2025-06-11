import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-black text-[#e0ffe9] font-sans">
      <div className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-7xl font-extrabold text-[#00ffae] mb-4 shadow-[0_0_20px_#00ffae99]">
            404
          </h1>
          <p className="text-2xl font-semibold text-[#a3f7dc] mb-4">Something's missing.</p>
          <p className="text-lg text-[#9be7c4] mb-4">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
          <Link to="/" className="inline-flex justify-center items-center px-5 py-2.5 text-lg font-semibold bg-[#00ffae] text-black rounded-lg shadow-[0_0_10px_#00ffae66] transition duration-300 ease-in-out hover:bg-[#00e6a0] hover:shadow-[0_0_20px_#00ffae] focus:outline-none focus:ring-4 focus:ring-[#00ffae80]">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
