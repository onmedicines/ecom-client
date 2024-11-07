import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { cartContext } from "./context/CartContext.js";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <div id="app-wrapper" className="min-h-screen max-w-screen grid place-items-center text-zinc-900">
        <div id="app" className="w-full max-w-screen-xl h-full flex flex-col pb-8 px-8">
          <Navbar />
          <main className="grow">
            <Outlet />
          </main>
        </div>
      </div>
    </cartContext.Provider>
  );
}
