import { BrandFilter } from "./BrandFilter";
import { GenderFilter } from "./GenderFilter";
import { PriceSortFilter } from "./PriceSortFilter";
import { SizeFilter } from "./SizeFilter";

const Filters = ({ filter, setFilter }) => {
  return (
    <>
      <button
        className="btn btn-solid-primary"
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
      <BrandFilter filterBrand={filter.brand} setFilter={setFilter} />
      <GenderFilter filterGender={filter.gender} setFilter={setFilter} />
      <PriceSortFilter filterSortBy={filter.sortBy} setFilter={setFilter} />
      <SizeFilter filterSize={filter.size} setFilter={setFilter} />
    </>
  );
};

export { Filters };
