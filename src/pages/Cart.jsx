import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../slices/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-2">
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => dispatch(removeFromCart(item._id))}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="mt-4 text-xl">Total: ₹{totalPrice}</h3>

          <button
            className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
            onClick={() => alert("Proceed to Checkout")}
          >
            Checkout
          </button>

          <button
            className="bg-gray-500 text-white px-4 py-2 mt-2 rounded"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
