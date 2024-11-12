export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  // products,
  // setProducts,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
        </select>
      </div>
    </section>
  );
};