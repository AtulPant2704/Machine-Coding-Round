const GenderFilter = ({ filterGender, setFilter }) => {
  return (
    <div className="gender-filter filter-type">
      <h3 className="filter-name">Gender</h3>
      <div className="filter-check">
        <input
          id="male"
          type="radio"
          checked={filterGender === "male"}
          onChange={() => setFilter((prev) => ({ ...prev, gender: "male" }))}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div className="filter-check">
        <input
          id="female"
          type="radio"
          checked={filterGender === "female"}
          onChange={() => setFilter((prev) => ({ ...prev, gender: "female" }))}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  );
};

export { GenderFilter };
