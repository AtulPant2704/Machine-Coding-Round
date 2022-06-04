import { useState } from "react";
import { products } from "./data/productsDb";
import { ProductCard, Filters } from "./components";
import {
  filterByBrand,
  filterBySize,
  filterByGender,
  sortByPrice,
  filterByPriceRange,
} from "./utils";
import "./App.css";

export default function App() {
  const [filter, setFilter] = useState({
    sortBy: "",
    size: [],
    brand: [],
    gender: "",
    priceRange: 700,
  });

  const brandFilteredProducts = filterByBrand(filter.brand, products);
  const sizeFilteredProducts = filterBySize(filter.size, brandFilteredProducts);
  const genderFilteredProducts = filterByGender(
    filter.gender,
    sizeFilteredProducts
  );
  const priceRangeFilteredProducts = filterByPriceRange(
    filter.priceRange,
    genderFilteredProducts
  );
  const sortedProducts = sortByPrice(filter.sortBy, priceRangeFilteredProducts);

  return (
    <section className="products-filter-container">
      <section className="filter-container">
        <Filters filter={filter} setFilter={setFilter} />
      </section>
      <section className="products-container">
        <h2 className="products-count">Products: {sortedProducts.length}</h2>
        {sortedProducts.length > 0 ? (
          <section className="products-section">
            {sortedProducts.map((product) => (
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
