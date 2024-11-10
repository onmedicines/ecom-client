import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import Minus from "../components/Minus";
import Plus from "../components/Plus";
import ArrowLeft from "../components/ArrowLeft";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(cartContext);

  const navigatePrevious = () => {
    navigate(-1);
  };

  const handleClick = (e, itemId) => {
    console.log(e.currentTarget.id);

    if (e.currentTarget.id === "add-to-cart") {
      const newCart = cart.map((item) => {
        if (item.info.id !== itemId) return item;
        else return { ...item, count: item.count + 1 };
      });
      setCart(newCart);
    } else if (e.currentTarget.id === "remove-from-cart") {
      const itemInCart = cart.find((item) => item.info.id === itemId);
      if (itemInCart.count > 1) {
        const newCart = cart.map((item) => {
          if (item.info.id !== itemId) return item;
          else return { ...item, count: item.count - 1 };
        });
        setCart(newCart);
      } else {
        const newCart = cart.filter((item) => item.info.id !== itemId);
        setCart(newCart);
      }
    }
  };
  console.log(cart);

  return (
    <>
      <button id="back" onClick={navigatePrevious}>
        <ArrowLeft />
      </button>
      {cart.length == 0 ? (
        <div className="mt-8">
          <h1 className="text-center text-lg font-semibold">Your cart is empty</h1>
          <p className="text-center">Try adding something from the shop</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {cart.map((item) => (
              <>
                <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 w-full border-b p-8">
                  <div className="flex justify-center">
                    <img src={item.info.image} alt="image" className="h-40 object-fit" />
                  </div>
                  <div className="md:px-8 py-2 w-full flex flex-col justify-center">
                    <h1 className="uppercase font-semibold ">{item.info.title}</h1>
                    <p className="font-semibold ">$ {item.info.price}</p>
                    <br />
                    <div className="flex w-48 items-center">
                      <button id="remove-from-cart" className="basis-1/4 border flex justify-center py-2 hover:bg-zinc-200" onClick={(e) => handleClick(e, item.info.id)}>
                        <Minus />
                      </button>
                      <div className="basis-2/4 flex justify-center py-2 text-lg font-bold">{item.count}</div>
                      <button id="add-to-cart" className="basis-1/4 border flex justify-center py-2 bg-zinc-800 hover:bg-zinc-600" onClick={(e) => handleClick(e, item.info.id)}>
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="border-b pb-2">
              {cart.map((item) => (
                <div className="flex justify-between font-semibold py-2 text-zinc-600">
                  <p>{item.info.title}</p>
                  <p>
                    {item.count > 1 ? `${item.count} x ` : null}${item.info.price}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-semibold py-2 text-lg">
              <p>Total</p>
              <p>$ {Number(cart.reduce((totalCost, item) => totalCost + item.info.price * item.count, 0).toFixed(2))}</p>
            </div>
            <br />
            <button className="bg-zinc-800 text-white py-2 px-4 self-end">Checkout</button>
          </div>
        </div>
      )}
    </>
  );
}
