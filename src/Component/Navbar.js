import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="color-white">
      <nav className="nav flex-row bg-dark text-light color-white">
        <Link className="nav-link color-white" to="/">
          Home
        </Link>
        {/* <Link className="nav-link" to="/contact">Contact</Link> */}
      </nav>
    </div>
  );
};

export default Navbar;
