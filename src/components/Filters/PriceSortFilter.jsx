const PriceSortFilter = ({ filterSortBy, setFilter }) => {
  return (
    <div className="price-sort-filter filter-type">
      <h3 className="filter-name">Sort</h3>
      <div className="filter-check">
        <input
          id="low-to-high"
          type="radio"
          checked={filterSortBy === "lowToHigh"}
          onChange={() =>
            setFilter((prev) => ({ ...prev, sortBy: "lowToHigh" }))
          }
        />
        <label htmlFor="low-to-high">Low to High</label>
      </div>
      <div className="filter-check">
        <input
          id="high-to-low"
          type="radio"
          checked={filterSortBy === "highToLow"}
          onChange={() =>
            setFilter((prev) => ({ ...prev, sortBy: "highToLow" }))
          }
        />
        <label htmlFor="high-to-low">High to Low</label>
      </div>
    </div>
  );
};

export { PriceSortFilter };
