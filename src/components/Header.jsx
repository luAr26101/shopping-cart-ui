import { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showDropDown, setShowDropDown] = useState(false);
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  console.log(total);
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>
      <div className="relative">
        <button
          onClick={() =>
            setShowDropDown((prevShowDropDown) => !prevShowDropDown)
          }
          className="cursor-pointer"
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {itemCount}
            </span>
          )}
        </button>
        {showDropDown && (
          <div className="absolute right-0 z-50 mt-2 w-80 rounded border bg-white shadow-lg">
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">Cart items</h2>
              {cart.length === 0 ? (
                <p className="text-sm text-gray-500">Your Cart is empty.</p>
              ) : (
                <>
                  <ul className="max-h-60 divide-y divide-gray-200 overflow-y-auto">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between py-2"
                      >
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {item.qty} x ${item.price}
                          </p>
                        </div>
                        <button
                          className="cursor-pointer text-sm text-red-500 hover:underline"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <button
                    className="mt-3 w-full rounded bg-red-500 py-1 text-white transition hover:bg-red-600"
                    onClick={clearCart}
                  >
                    Clear cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
