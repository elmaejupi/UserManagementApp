import React from "react";

function Footer() {
  return (
    <footer className="bg-cyan-950 text-white py-3 mt-6">
      <div className="container mx-auto px-4 flex justify-between items-center">

        <p>© {new Date().getFullYear()} UserManagement. All rights reserved.</p>

        <p className="font-semibold">Elma Ejupi</p>
      </div>
    </footer>
  );
}

export default Footer;
