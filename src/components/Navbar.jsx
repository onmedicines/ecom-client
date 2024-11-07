import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Navbar() {
  // const [color, setColor] = useState();

  return (
    <header className="flex justify-between py-6 items-center sticky top-0 bg-gradient-to-b from-white via-white to-white/80 ">
      <h1 className="text-xl">
        <NavLink to={"/"}>RARE</NavLink>
      </h1>
      <nav>
        <ul className="flex items-center">
          <li className=" px-2 py-1 focus:ring">
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-zinc-800 text-white py-2 px-4" : "py-2 px-4")}>
              Home
            </NavLink>
          </li>
          <li className=" px-2 py-1 focus:ring">
            <NavLink to="/products" className={({ isActive }) => (isActive ? "bg-zinc-800 text-white py-2 px-4" : "py-2 px-4")}>
              Shop
            </NavLink>
          </li>
          <li className="px-2 focus:ring">
            <NavLink to="/cart" className={({ isActive }) => (isActive ? "bg-zinc-800 text-white py-2 px-4" : "py-2 px-4")}>
              {/* <CartIcon strokeColor={color} /> */}
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
