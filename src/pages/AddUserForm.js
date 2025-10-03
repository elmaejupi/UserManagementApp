import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUserForm({ addUser }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", website: "", street: "", city: "", zipcode: "", company: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    addUser({
      id: Date.now(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      website: form.website,
      address: { street: form.street, city: form.city, zipcode: form.zipcode },
      company: { name: form.company }
    });
    navigate("/users");
  };

  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">➕ Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {["name","email","phone","website","street","city","zipcode","company"].map(field => (
            <div key={field} className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 capitalize mb-2">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full p-4 border-2 border-gray-300 rounded-full shadow-sm
                          focus:outline-none focus:ring-2 focus:ring-emerald-400
                          focus:border-emerald-500 transition-all duration-200
                          placeholder-gray-400 
                          ring-1 ring-gray-200"
              />
              {errors[field] && (
                <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 shadow-sm transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-cyan-950 text-white font-medium hover:bg-emerald-700 shadow-md transition-all"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
