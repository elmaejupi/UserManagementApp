import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";

function Home({ users }) {
  return (
    <div className="px-4 sm:px-6 py-10">
      <div className="bg-cyan-950 text-white rounded-2xl p-8 sm:p-10 shadow-2xl mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to UserManagement 👤
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Manage, explore, and organize users easily. Add, update, or remove users anytime.
        </p>
        <Link
          to="/users"
          className="inline-block bg-white text-emerald-600 px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow hover:bg-gray-100 font-semibold transition"
        >
          View All Users
        </Link>
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
        Featured Users
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {users.map(user => (
          <div
            key={user.id}
            className="bg-white border rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">{user.company?.name}</p>
            </div>
            <div className="flex justify-end mt-4">
              <Link
                to={`/user/${user.id}`}
                className="text-emerald-600 hover:text-emerald-800 flex items-center font-semibold"
              >
                View Details <ChevronRightIcon className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex space-x-6 overflow-x-auto pb-4">
        {users.map(user => (
          <div
            key={user.id}
            className="min-w-[250px] bg-white border rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">{user.company?.name}</p>
            </div>
            <div className="flex justify-end mt-4">
              <Link
                to={`/user/${user.id}`}
                className="text-emerald-600 hover:text-emerald-800 flex items-center font-semibold"
              >
                View Details <ChevronRightIcon className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
