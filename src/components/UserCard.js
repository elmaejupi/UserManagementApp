import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user, onDelete }) {
  return (
    <div className="bg-white rounded shadow p-4 hover:scale-105 transition">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">{user.company?.name}</p>
      <div className="mt-2 flex justify-between items-center">
        <Link to={`/user/${user.id}`} className="text-indigo-600 underline text-sm">Details</Link>
        <button onClick={() => onDelete(user.id)} className="text-red-600 text-sm">Delete</button>
      </div>
    </div>
  );
}
