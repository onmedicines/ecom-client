import { Outlet, NavLink } from "react-router-dom";
import Navlinks from "./components/Navlinks.jsx";
import { cartContext } from "./context/CartContext.js";
import { useState } from "react";
import HamburgerIcon from "./components/HamburgerIcon.jsx";
import Cross from "./components/Cross.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <div id="app-wrapper" className="min-h-screen max-w-screen grid place-items-center text-zinc-900">
        <div id="app" className="w-full max-w-screen-xl h-full flex flex-col pb-8 px-8">
          <header className="flex justify-between py-6 items-center sticky top-0 bg-gradient-to-b from-white via-white to-white/80 ">
            <h1 className="text-xl">
              <NavLink to={"/"}>NILE</NavLink>
            </h1>
            <>
              {/* menu */}
              <nav className="hidden sm:block">
                <Navlinks />
              </nav>
              <div className="block sm:hidden">{menuVisible ? <Cross handleClick={toggleMenu} /> : <HamburgerIcon handleClick={toggleMenu} />}</div>
            </>
          </header>
          <main className="grow">
            {menuVisible ? (
              <nav className="border h-full">
                <Navlinks menuVisible={true} setMenuVisible={setMenuVisible} />
              </nav>
            ) : (
              <Outlet />
            )}
          </main>
        </div>
      </div>
    </cartContext.Provider>
  );
}
