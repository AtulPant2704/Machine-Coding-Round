import "./ProductCard.css";
const ProductCard = ({
  id,
  title,
  img,
  price,
  discount,
  checkCartAction,
  cartRouteHandler,
}) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={img} alt={title} className="img-responsive" />
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <div className="card-description">
          <h3 className="card-price">₹ {price}</h3>
          <div className="card-brand-size">
            <span>{discount}% off</span>
          </div>
        </div>
        <button
          className="cart-btn ecommerce-btn"
          onClick={() => cartRouteHandler(id)}
        >
          {checkCartAction(id)}
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
