const ProductCard = ({ id, title, img, price }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={img} alt={title} className="img-responsive" />
        <i className="far fa-heart"></i>
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <h3 className="card-price">₹ {price}</h3>
        <button className="cart-btn ecommerce-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export { ProductCard };
