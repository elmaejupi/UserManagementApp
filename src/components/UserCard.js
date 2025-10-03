import React from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

function UserCard({ user, onDelete }) {
  return (
    <div className="border border-gray-200 p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">{user.company?.name}</p>
      </div>

      <div className="flex justify-end mt-4">
        <Link 
          to={`/user/${user.id}`} 
          className="text-emerald-600 flex items-center transition-colors duration-200 hover:text-emerald-800"
        >
          <ArrowCircleRightIcon className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
