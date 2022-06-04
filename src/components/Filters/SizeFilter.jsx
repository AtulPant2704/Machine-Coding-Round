const SizeFilter = ({ filterSize, setFilter }) => {
  const addFilterSizeHandler = (type) => {
    setFilter((prev) => ({ ...prev, size: [...filterSize, type] }));
  };

  const removeFilterSizeHandler = (type) => {
    setFilter((prev) => ({
      ...prev,
      size: filterSize.filter((size) => size !== type),
    }));
  };

  return (
    <div className="size-filter filter-type">
      <h3 className="filter-name">Sizes</h3>
      <div className="filter-check">
        <input
          id="small"
          type="checkbox"
          checked={filterSize.some((item) => item === "S")}
          onChange={(e) =>
            e.target.checked
              ? addFilterSizeHandler("S")
              : removeFilterSizeHandler("S")
          }
        />
        <label htmlFor="small">S</label>
      </div>
      <div className="filter-check">
        <input
          id="medium"
          type="checkbox"
          checked={filterSize.some((item) => item === "M")}
          onChange={(e) =>
            e.target.checked
              ? addFilterSizeHandler("M")
              : removeFilterSizeHandler("M")
          }
        />
        <label htmlFor="medium">M</label>
      </div>
      <div className="filter-check">
        <input
          id="large"
          type="checkbox"
          checked={filterSize.some((item) => item === "L")}
          onChange={(e) =>
            e.target.checked
              ? addFilterSizeHandler("L")
              : removeFilterSizeHandler("L")
          }
        />
        <label htmlFor="large">L</label>
      </div>
      <div className="filter-check">
        <input
          id="extra-large"
          type="checkbox"
          checked={filterSize.some((item) => item === "XL")}
          onChange={(e) =>
            e.target.checked
              ? addFilterSizeHandler("XL")
              : removeFilterSizeHandler("XL")
          }
        />
        <label htmlFor="extra-large">XL</label>
      </div>
    </div>
  );
};

export { SizeFilter };
