import { NavLink } from "react-router-dom";

export default function Navlinks({ menuVisible = false, setMenuVisible = () => {} }) {
  return (
    <ul className={menuVisible ? "h-full flex flex-col items-center justify-around text-xl gap-8 py-16" : "flex"}>
      <li className="focus:ring" onClick={() => setMenuVisible(false)}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "bg-zinc-800 text-white  py-2 px-3 flex items-center " : "py-2 px-3 flex items-center")}>
          Home
        </NavLink>
      </li>
      <li className="focus:ring" onClick={() => setMenuVisible(false)}>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "bg-zinc-800 text-white  py-2 px-3 flex items-center" : "py-2 px-3 flex items-center")}>
          Shop
        </NavLink>
      </li>
      <li className="focus:ring" onClick={() => setMenuVisible(false)}>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "bg-zinc-800 text-white py-2 px-3 flex items-center" : "py-2 px-3 flex items-center")}>
          Cart
        </NavLink>
      </li>
    </ul>
  );
}
