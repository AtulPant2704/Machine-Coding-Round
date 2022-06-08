import { CartCard, CartSummary, SaveLaterCard } from "../../components";
import { useCart } from "../../context/cartContext";
import { getCartSummary } from "../../utils";
import "./Cart.css";

const Cart = () => {
  const {
    cartState: { cart, saveForLater },
    cartDispatch,
  } = useCart();

  const {
    totalItems,
    totalPrice,
    totalDiscount,
    totalAmountPaid,
  } = getCartSummary(cart);

  const saveForLaterHandler = (productId) => {
    const item = cart.find((product) => product.id === productId);
    cartDispatch({ type: "SAVE_FOR_LATER", payload: { productId, item } });
  };

  const moveToCartHandler = (productId) => {
    const item = saveForLater.find((product) => product.id === productId);
    cartDispatch({ type: "MOVE_TO_CART", payload: { productId, item } });
  };

  return (
    <>
      <h2 className="cart-length">Cart ({cart.length})</h2>
      <div className="cart-page">
        <div className="cart-container">
          {cart.map((product) => (
            <CartCard
              key={product.id}
              {...product}
              saveForLaterHandler={saveForLaterHandler}
            />
          ))}
        </div>
        <div className="cart-summary-container">
          <CartSummary
            totalItems={totalItems}
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            totalAmountPaid={totalAmountPaid}
          />
        </div>
      </div>
      <h2 className="cart-length">Save for Later ({saveForLater.length})</h2>
      <div className="save-later-container">
        {saveForLater.map((product) => (
          <SaveLaterCard
            key={product.id}
            {...product}
            moveToCartHandler={moveToCartHandler}
          />
        ))}
      </div>
    </>
  );
};

export { Cart };
