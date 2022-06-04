import { BrandFilter } from "./BrandFilter";
import { GenderFilter } from "./GenderFilter";
import { PriceSortFilter } from "./PriceSortFilter";
import { SizeFilter } from "./SizeFilter";
import "./Filters.css";

const Filters = ({ filter, setFilter }) => {
  return (
    <>
      <div className="filter-heading">
        <h2>Filters</h2>
        <button
          className="btn btn-solid-primary btn-clear"
          onClick={() =>
            setFilter(() => ({
              sortBy: "",
              size: [],
              brand: [],
              gender: "",
            }))
          }
        >
          Clear
        </button>
      </div>
      <BrandFilter filterBrand={filter.brand} setFilter={setFilter} />
      <GenderFilter filterGender={filter.gender} setFilter={setFilter} />
      <PriceSortFilter filterSortBy={filter.sortBy} setFilter={setFilter} />
      <SizeFilter filterSize={filter.size} setFilter={setFilter} />
    </>
  );
};

export { Filters };
