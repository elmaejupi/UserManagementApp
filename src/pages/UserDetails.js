import React from "react";
import { useParams, Link } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/outline';

export default function UserDetails({ users, onDelete }) {
  const { id } = useParams();
  const user = users.find(u => String(u.id) === String(id));

  if (!user)
    return (
      <div className="text-center mt-20">
        <p className="text-gray-500 text-lg mb-4">User not found.</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
        >
          Back Home
        </Link>
      </div>
    );

  const { address, company } = user;

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 animate-fadeIn">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">{user.name}</h2>

      {/* Contact Info */}
      <div className="mb-4 p-4 rounded-lg bg-gray-50 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-2">Contact Info</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
        <p>
          <strong>Website:</strong>{" "}
          {user.website ? (
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 hover:underline"
            >
              {user.website}
            </a>
          ) : (
            "N/A"
          )}
        </p>
      </div>

      {/* Address */}
      {address && (
        <div className="mb-4 p-4 rounded-lg bg-gray-50 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
          <p>{address.street}, {address.suite || ""}</p>
          <p>{address.city} — {address.zipcode}</p>
        </div>
      )}

      {/* Company */}
      {company && (
        <div className="mb-4 p-4 rounded-lg bg-gray-50 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
          <p>{company.name}</p>
        </div>
      )}
      <button
                onClick={() => onDelete(user.id)}
                className="flex items-center space-x-1 text-red-500 hover:text-red-700 font-medium"
              >
                <TrashIcon className="h-6 w-6" />
                <span>Delete</span>
              </button>

      <Link
        to="/users"
        className="inline-block mt-4 px-4 py-2 bg-cyan-950 text-white rounded-lg shadow hover:bg-emerald-700 transition"
      >
        Back to Users
      </Link>
    </div>
  );
}
