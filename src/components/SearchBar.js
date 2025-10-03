import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search by name or email..."
      className="w-full p-2 border rounded mb-4"
    />
  );
}
