import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";
import AddUserForm from "./pages/AddUserForm";
import { fetchUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  // Add a user (local)
  const addUser = (newUser) => {
    const id = Date.now();
    setUsers(prev => [{ id, ...newUser }, ...prev]);
  };

  // // Update a user (local)
  // const updateUser = (id, updated) => {
  //   setUsers(prev => prev.map(u => (u.id === id ? { ...u, ...updated } : u)));
  // };

  // Delete a user (local)
  const deleteUser = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="container mx-auto p-4 flex-1">
        <Routes>
          <Route path="/" element={<Home users={users} />} />

          {/* Users Page */}
          <Route path="/users" element={<UsersList users={users} onDelete={deleteUser}/>} />

          <Route path="/user/:id" element={<UserDetails users={users} onDelete={deleteUser} />} />


          {/* Add User Page */}
          <Route path="/add" element={<AddUserForm addUser={addUser} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
