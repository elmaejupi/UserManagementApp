import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from '@heroicons/react/solid';
import { UserGroupIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className="bg-cyan-950 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <UserGroupIcon className="h-8 w-8 text-white" />
          <span className="text-xl font-bold">UserManagement</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/users" className="hover:text-gray-200">Users</Link>
          <Link
            to="/add"
            className="bg-white text-emerald-600 px-3 py-1 rounded-md hover:bg-gray-400 transition hover:text-cyan-950"
          >
            + Add User
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
