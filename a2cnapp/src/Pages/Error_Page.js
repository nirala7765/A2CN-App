import React from 'react';
import { NavLink } from 'react-router-dom';

const Error_Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-red-600 animate-pulse">404</h1>
      <h2 className="text-3xl font-semibold mt-6 flex items-center">
        <span role="img" aria-label="sorry emoji" className="text-4xl mr-3">😔</span>
        Oops! Page Not Found
      </h2>
      <p className="text-lg mt-4 max-w-md text-center">
        We're sorry, but the page you were looking for doesn't exist , or is temporarily unavailable.
      </p>
      <NavLink to="/" className="mt-6 text-xl font-bold text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full shadow-lg transition duration-300">
        Go to Home Page
      </NavLink>
    </div>
  );
}

export default Error_Page;
