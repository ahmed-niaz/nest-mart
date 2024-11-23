import { Search } from "lucide-react";
import PropTypes from "prop-types";
const SearchBar = ({ handleSearch }) => {
  return (
    <form className="flex items-center justify-center" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Products"
        name="search"
        className="max-w-md p-2 -mr-2 border border-black"
      />
      <button className="p-2 bg-black text-white">
        <Search />
      </button>
    </form>
  );
};
SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired, // Validate setSort as a required function
};

export default SearchBar;
