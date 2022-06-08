import { useNavigate } from "react-router-dom";
import products from "../../data/productsDb";
import { useCart } from "../../context/cartContext";
import { ProductCard } from "../../components";
import "./ProductListing.css";

const ProductListing = () => {
  const navigate = useNavigate();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const checkCartAction = (productId) => {
    return cart.some((product) => product.id === productId)
      ? "Go to Cart"
      : "Add to Cart";
  };

  const cartRouteHandler = (productId) => {
    if (checkCartAction(productId) === "Add to Cart") {
      const cartItem = products.find((product) => product.id === productId);
      cartDispatch({ type: "ADD_TO_CART", payload: { item: cartItem } });
    } else {
      navigate("/cart");
    }
  };

  return (
    <section className="products-filter-container">
      <section className="products-container">
        {products.length > 0 ? (
          <section className="products-section">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                checkCartAction={checkCartAction}
                cartRouteHandler={cartRouteHandler}
              />
            ))}
          </section>
        ) : (
          <div className="empty-products">
            <h2>No products available</h2>
          </div>
        )}
      </section>
    </section>
  );
};

export { ProductListing };
