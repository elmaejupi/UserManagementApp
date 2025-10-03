import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

export default function UsersList({ users, onDelete }) {
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState(""); // with no sorting

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    let arr = users.filter(
      u =>
        !t ||
        u.name.toLowerCase().includes(t) ||
        u.email.toLowerCase().includes(t)
    );

    if (sortBy) {
      arr.sort((a, b) =>
        sortBy === "name"
          ? a.name.localeCompare(b.name)
          : a.email.localeCompare(b.email)
      );
    }

    return arr;
  }, [users, q, sortBy]);

  return (
    <div>
      <div className="flex gap-4 items-center mb-4">
        <div className="flex-1">
          <SearchBar value={q} onChange={setQ} />
        </div>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Sort (none)</option>
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(user => (
            <UserCard key={user.id} user={user} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
