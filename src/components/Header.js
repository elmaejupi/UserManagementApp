import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-purple-600">User Management</Link>
        <nav className="space-x-3">
          <Link to="/" className="px-3 py-1 rounded hover:bg-gray-100">Users</Link>
          <Link to="/add" className="px-3 py-1 rounded bg-indigo-600 text-white">Add User</Link>
        </nav>
      </div>
    </header>
  );
}
