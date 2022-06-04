const PriceRangeFilter = ({ filterPriceRange, setFilter }) => {
  return (
    <div className="filter-type">
      <input
        type="range"
        value={filterPriceRange}
        min="0"
        max="700"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, priceRange: e.target.value }))
        }
      />
      <label className="slider-label">₹0 - ₹{filterPriceRange}</label>
    </div>
  );
};

export { PriceRangeFilter };
