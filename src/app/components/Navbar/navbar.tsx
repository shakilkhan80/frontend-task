"use client";
import { FaBolt } from "react-icons/fa6";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "How it works", link: "#how-it-works" },
  { name: "Services", link: "#services" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((n) => {
              return (
                <li key={n.name} id={n.link}>
                  {n.name}
                </li>
              );
            })}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-white text-xl">
          <span className="bg-white px-2 py-1 rounded-md">
            <FaBolt className="text-black" size={12} />
          </span>
          FasterUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex rounded-xl bg-[#FFFFFF]">
        <ul className="menu  menu-horizontal px-1 font-semibold">
          {navItems.map((n) => {
            return (
              <li key={n.name} id={n.link}>
                <a className="hover:text-black">{n.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/login" className="btn btn-ghost">
          Sign In
        </a>
        <a href="/register" className="btn btn-outline btn-info">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
