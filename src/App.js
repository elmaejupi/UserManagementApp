import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddUserForm from "./components/AddUserForm";
import { fetchUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  const addUser = (newUser) => {
    const id = Date.now();
    setUsers(prev => [{ id, ...newUser }, ...prev]);
  };

  const updateUser = (id, updated) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, ...updated } : u)));
  }

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<UsersList users={users} onDelete={deleteUser} />} />
          <Route path="/user/:id" element={<UserDetails users={users} />} />
          <Route path="/add" element={<AddUserForm onAdd={addUser} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
