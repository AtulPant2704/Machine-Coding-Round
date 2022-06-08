import { Routes, Route } from "react-router-dom";
import products from "./data/productsDb";
import { ProductCard } from "./components";
import "./App.css";

export default function App() {
  return (
    <section className="products-filter-container">
      <section className="products-container">
        <h2 className="products-count">Products: {products.length}</h2>
        {products.length > 0 ? (
          <section className="products-section">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
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
}
