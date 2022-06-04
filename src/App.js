import { useState } from "react";
import { products } from "./data/productsDb";
import { ProductCard, Filters } from "./components";
import {
  filterByBrand,
  filterBySize,
  filterByGender,
  sortByPrice,
} from "./utils";
import "./App.css";

export default function App() {
  const [filter, setFilter] = useState({
    sortBy: "",
    size: [],
    brand: [],
    gender: "",
  });

  const brandFilteredProducts = filterByBrand(filter.brand, products);
  const sizeFilteredProducts = filterBySize(filter.size, brandFilteredProducts);
  const genderFilteredProducts = filterByGender(
    filter.gender,
    sizeFilteredProducts
  );
  const sortedProducts = sortByPrice(filter.sortBy, genderFilteredProducts);

  return (
    <section className="products-filter-container">
      <section className="filter-container">
        <Filters filter={filter} setFilter={setFilter} />
      </section>
      <section className="products-container">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </section>
  );
}
