import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import Minus from "../components/Minus";
import Plus from "../components/Plus";
import ArrowLeft from "../components/ArrowLeft";

export function loader({ params }) {
  return fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => response.json())
    .then((product) => ({ product }));
}

export default function ProductPage() {
  const navigate = useNavigate();
  const { product } = useLoaderData();
  const { cart, setCart } = useContext(cartContext);

  const navigatePrevious = () => {
    navigate(-1);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const handleClick = (e) => {
    console.log(e.currentTarget.id);

    if (e.currentTarget.id === "add-to-cart") {
      const itemInCart = cart.find((item) => item.info.id === product.id);
      if (!itemInCart) {
        setCart((prev) => [...prev, { info: product, count: 1 }]);
      } else {
        const newCart = cart.map((item) => {
          if (item.info.id != product.id) return item;
          else return { ...item, count: item.count + 1 };
        });
        setCart(newCart);
      }
    } else if (e.currentTarget.id === "remove-from-cart") {
      const itemInCart = cart.find((item) => item.info.id === product.id);
      if (itemInCart) {
        if (itemInCart.count === 1) {
          setCart((prev) => prev.filter((item) => item.info.id !== product.id));
        } else {
          const newCart = cart.map((item) => {
            if (item.info.id != product.id) return item;
            else return { ...item, count: item.count - 1 };
          });
          setCart(newCart);
        }
      }
    }
  };

  return (
    <>
      <button id="back" onClick={navigatePrevious}>
        <ArrowLeft />
      </button>
      <div className="grid gap-4 grid-col-1 md:grid-cols-[1fr_2fr] h-full place-items-center">
        <div className="p-8">
          <img src={product.image} alt="product" className="lg:h-full sm:h-48" />
        </div>
        <div className="md:px-16 md:py-8 sm:p-8">
          <h1 className="text-2xl uppercase">{product.title}</h1>
          <p className="font-semibold text-gray-600">
            <span className="">Category:</span> <span className="capitalize">{product.category}</span>
          </p>
          <br />
          <p className="text-xl">$ {product.price}</p>
          <br />
          <p>{product.description}</p>
          <br />
          <div className="flex gap-4 flex-col sm:flex-row justify-between">
            <div className="flex sm:w-1/3 w-full">
              <button id="remove-from-cart" className="basis-1/4 border flex justify-center py-2" onClick={handleClick}>
                <Minus />
              </button>
              <div className="basis-2/4  flex justify-center py-2">{cart.find((item) => item.info.id === product.id)?.count || 0}</div>
              <button id="add-to-cart" className="basis-1/4 border flex justify-center py-2 bg-zinc-800" onClick={handleClick}>
                <Plus />
              </button>
            </div>
            {cart.find((item) => item.info.id === product.id) && (
              <button className="py-2 px-4 bg-zinc-800 text-white" onClick={navigateToCart}>
                Buy now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
