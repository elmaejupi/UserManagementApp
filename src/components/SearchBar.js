import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search by name or email..."
        className="w-full sm:w-80 md:w-96 p-2 sm:p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
      />
    </div>
  );
}
