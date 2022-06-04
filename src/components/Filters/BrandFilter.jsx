const BrandFilter = ({ filterBrand, setFilter }) => {
  const addFilterBrandHandler = (type) => {
    setFilter((prev) => ({ ...prev, brand: [...filterBrand, type] }));
  };

  const removeFilterBrandHandler = (type) => {
    setFilter((prev) => ({
      ...prev,
      brand: filterBrand.filter((brand) => brand !== type),
    }));
  };

  return (
    <div className="brand-filter filter-type">
      <h3 className="filter-name">Brand</h3>
      <div className="filter-check">
        <input
          id="adidas"
          type="checkbox"
          checked={filterBrand.some((item) => item === "Adidas")}
          onChange={(e) =>
            e.target.checked
              ? addFilterBrandHandler("Adidas")
              : removeFilterBrandHandler("Adidas")
          }
        />
        <label htmlFor="adidas">Adidas</label>
      </div>
      <div className="filter-check">
        <input
          id="nike"
          type="checkbox"
          checked={filterBrand.some((item) => item === "Nike")}
          onChange={(e) =>
            e.target.checked
              ? addFilterBrandHandler("Nike")
              : removeFilterBrandHandler("Nike")
          }
        />
        <label htmlFor="nike">Reebok</label>
      </div>
      <div className="filter-check">
        <input
          id="puma"
          type="checkbox"
          checked={filterBrand.some((item) => item === "Puma")}
          onChange={(e) =>
            e.target.checked
              ? addFilterBrandHandler("Puma")
              : removeFilterBrandHandler("Puma")
          }
        />
        <label htmlFor="puma">Nike</label>
      </div>
    </div>
  );
};

export { BrandFilter };
