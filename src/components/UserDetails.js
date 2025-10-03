import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find(u => String(u.id) === String(id));

  if (!user) return (
    <div>
      <p className="text-gray-500">User not found.</p>
      <Link to="/" className="text-indigo-600 underline">Back</Link>
    </div>
  );

  const { address } = user;
  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto animate-fadeIn">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a className="text-indigo-600" href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
      {address && (
        <div className="mt-3">
          <h3 className="font-medium">Address</h3>
          <p>{address.street}, {address.suite}</p>
          <p>{address.city} — {address.zipcode}</p>
        </div>
      )}
      <Link to="/" className="mt-4 inline-block text-indigo-600 underline">Back to list</Link>
    </div>
  );
}
