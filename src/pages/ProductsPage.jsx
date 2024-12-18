import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setProducts(response);
      })
      .catch((err) => err);
  }, []);

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  else
    return (
      <>
        <h1 className="font-bold text-3xl pb-8">Shop</h1>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {products.map((product) => (
            <NavLink key={product.id} to={`/product/${product.id}`}>
              <div className="flex flex-col justify-between h-full ">
                <div className="py-2 px-4">
                  <img src={product.image} alt="image" className="h-64 object-contain m-auto" />
                </div>
                <div className="min-h-16 flex flex-col gap-2 py-2 px-4">
                  <h1 className="text-sm font-medium text-gray-500">{product.title.split(" ").slice(0, 3).join(" ")}</h1>
                  <p className="min-w-12 text-sm">$ {product.price}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </>
    );
}
