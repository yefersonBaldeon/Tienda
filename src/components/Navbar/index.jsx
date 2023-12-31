import React, { createContext, useContext, useState } from "react";

import { NavLink } from "react-router-dom";

import { Context } from "../../context";

function Navbar() {
  const { Count, setCount, setcategory, CartProducts } = useContext(Context);
  const color = "underline";

  return (
    <nav className="flex justify-between fixed w-full top-0 py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink
            to="/"
            onClick={() => {
              setcategory("");
            }}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? color : "")}
            onClick={() => {
              setcategory("");
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/laptop"
            className={({ isActive }) => (isActive ? color : "")}
            onClick={() => {
              setcategory("laptop");
            }}
          >
            Laptop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teclado"
            className={({ isActive }) => (isActive ? color : "")}
            onClick={() => {
              setcategory("teclado");
            }}
          >
            Teclado
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mouse"
            className={({ isActive }) => (isActive ? color : "")}
            onClick={() => {
              setcategory("mouse");
            }}
          >
            Mouse
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/monitor"
            className={({ isActive }) => (isActive ? color : "")}
            onClick={() => {
              setcategory("monitor");
            }}
          >
            Monitor
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Others
          </NavLink>
        </li> */}
      </ul>

      <ul className="flex items-center gap-3">
        <li>yeferson@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? color : "")}
          >
            My Orders
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? color : "")}
          >
            My account
          </NavLink>
        </li> */}
{/* 
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Sign In
          </NavLink>
        </li> */}
        <li>
          <a
            target="_blank"
            href="https://productsmysql-production.up.railway.app/api/products"
          >
            Api Products
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://mysqlexpress-production.up.railway.app/api/employees"
          >
            Api Students
          </a>
        </li>

        <li>
          <NavLink
            to="/Post"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Post
          </NavLink>
        </li>

        <li>🛒{CartProducts.length}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
