import "./ProductCard.css";
const ProductCard = ({ id, title, img, price, brand, size }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={img} alt={title} className="img-responsive" />
        <i className="far fa-heart"></i>
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <div className="card-description">
          <h3 className="card-price">₹ {price}</h3>
          <div className="card-brand-size">
            <span>{brand}</span> | <span>{size}</span>
          </div>
        </div>
        <button className="cart-btn ecommerce-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export { ProductCard };
