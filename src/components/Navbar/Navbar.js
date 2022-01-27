import React from "react";

import "../Navbar/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark bg-gradient">
      <div className="container-fluid">
        <Link to="/" className="mt-2 mb-2" style={{ textDecoration: "none" }}>
          <span className="navbar-brand text-light fs-3 ">📘 Dictionary</span>
        </Link>

        <Link
          to="/savedWord"
          style={{ textDecoration: "none", color: "#fff", fontSize: "50px" }}
        >
          <h3 className="navbar_text fs-6 mt-3">View saved words</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
