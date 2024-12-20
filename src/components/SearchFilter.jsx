const SearchFilter = ({ onSearch }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search profiles..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
