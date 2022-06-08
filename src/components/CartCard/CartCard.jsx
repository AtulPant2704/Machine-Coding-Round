import { useCart } from "../../context/cartContext";
import "./CartCard.css";

const CartCard = ({
  id,
  title,
  img,
  price,
  qty,
  discount,
  saveForLaterHandler,
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
        <div className="quantity-controls">
          <p className="quantity">{qty}</p>
          <button
            className="btn-control increase-btn"
            onClick={() =>
              cartDispatch({
                type: "INCREASE_QUANTITY",
                payload: { productId: id },
              })
            }
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button
          className="wishlist-btn"
          onClick={() =>
            cartDispatch({
              type: "REMOVE_FROM_CART",
              payload: { productId: id },
            })
          }
        >
          Remove
        </button>
        <button
          className="wishlist-btn"
          onClick={() => saveForLaterHandler(id)}
        >
          Save for Later
        </button>
      </div>
    </div>
  );
};

export { CartCard };
