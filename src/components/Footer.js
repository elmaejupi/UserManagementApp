import React from "react";

function Footer() {
  return (
    <footer className="bg-cyan-950 text-white py-4 mt-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-2 sm:space-y-0">
        
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} UserManagement. All rights reserved.
        </p>

        <p className="font-semibold text-sm sm:text-base">Elma Ejupi</p>
      </div>
    </footer>
  );
}

export default Footer;
