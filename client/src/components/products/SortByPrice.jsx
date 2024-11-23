import PropTypes from 'prop-types'
const SortByPrice = ({ setSort }) => {
  return (
    <select
      className="select select-bordered w-full rounded-none"
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
};

SortByPrice.propTypes = {
    setSort: PropTypes.func.isRequired,  // Validate setSort as a required function
  };

export default SortByPrice;
