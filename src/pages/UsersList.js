import React, { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

export default function UsersList({ users, onDelete, showSort = true }) {
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState(""); 

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    let arr = users.filter(
      u =>
        !t ||
        u.name.toLowerCase().includes(t) ||
        u.email.toLowerCase().includes(t)
    );

    
    if (sortBy === "name-asc") arr = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc") arr = [...arr].sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "email-asc") arr = [...arr].sort((a, b) => a.email.localeCompare(b.email));

    return arr;
  }, [users, q, sortBy]);

  return (
    <div className="px-4 sm:px-10">
      
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 items-center mb-6">
        <div className="flex-1 w-full sm:w-auto">
          <SearchBar value={q} onChange={setQ} />
        </div>

        {showSort && (
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="w-full sm:w-48 p-3 text-gray-700 text-lg border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
          >
            <option value="">{`Sort`}</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="email-asc">Email</option>
          </select>
        )}
      </div>

    
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(user => (
            <UserCard key={user.id} user={user} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
