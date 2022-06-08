import "./SaveLaterCard.css";
import { useCart } from "../../context/cartContext";

const SaveLaterCard = ({
  id,
  title,
  img,
  price,
  qty,
  discount,
  moveToCartHandler,
}) => {
  const { cartDispatch } = useCart();

  const getDiscountedPrice = () => {
    const discountedPrice = price * (discount * 0.01);
    return ((price - discountedPrice) * qty).toFixed(2);
  };

  return (
    <div className="cart-card">
      <div className="img-container">
        <img src={img} alt={title} className="img-responsive" />
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <h3 className="card-price">
          <span className="gray-text text-strike">₹ {price}</span>{" "}
          <span className="discount-price"> ₹ {getDiscountedPrice()}</span>{" "}
          <span className="discount-percent">{discount}% off</span>
        </h3>
        <button
          className="wishlist-btn"
          onClick={() =>
            cartDispatch({
              type: "REMOVE_FROM_SAVE_LATER",
              payload: { productId: id },
            })
          }
        >
          Remove
        </button>
        <button className="wishlist-btn" onClick={() => moveToCartHandler(id)}>
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export { SaveLaterCard };
