import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    onAdd({ name, email, company: { name: company } });
    navigate("/");
  }

  return (
    <div className="max-w-md bg-white p-6 rounded shadow mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm">Company (optional)</label>
          <input value={company} onChange={e => setCompany(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Add</button>
          <button type="button" onClick={() => navigate("/")} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
