import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserGroupIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cyan-950 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <UserGroupIcon className="h-8 w-8 text-white" />
          <span className="text-xl font-bold">UserManagement</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/users" className="hover:text-gray-200">Users</Link>
          <Link
            to="/add"
            className="bg-white text-emerald-600 px-3 py-1 rounded-md hover:bg-gray-400 transition hover:text-cyan-950"
          >
            + Add User
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XIcon className="h-7 w-7 text-white" />
          ) : (
            <MenuIcon className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-cyan-900 text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-gray-200" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/users" className="block hover:text-gray-200" onClick={() => setMenuOpen(false)}>
            Users
          </Link>
          <Link
            to="/add"
            className="block bg-white text-emerald-600 px-3 py-2 rounded-md hover:bg-gray-400 transition hover:text-cyan-950"
            onClick={() => setMenuOpen(false)}
          >
            + Add User
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
