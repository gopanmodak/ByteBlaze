import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-base-100 bg-opacity-70 backdrop-blur-md w-full">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost text-xl  gap-0 text-secondary">
            Byte<span className="text-primary">Blaze</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}> Home</NavLink>
            </li>
            <li>
              <NavLink to='/blogs'className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} > Blogs</NavLink>
            </li>
            <li>
              <NavLink to='/bookmarks' className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}> Bookmarks</NavLink>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
