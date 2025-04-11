import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex items-center justify-between shadow">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
        <span className="text-xl font-bold">MIZAN'SBOOK</span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile/me" className="hover:underline">Profile</Link>
        <Link to="/login" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
};
