import { Blend, ListRestart } from "lucide-react";
import { categories } from "./../dashboard/seller/categories";

const FilterBar = ({
  setBrand,
  setCategory,
  handleReset,
  categories,
  brands,
}) => {
  return (
    <section className="bg-slate-100  p-4">
      <div className="flex items-center  gap-2">
        <span>
          <Blend />
        </span>
        <h2 className="text-xl font-bold">Filters </h2>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <div>
          <select
            onChange={(e) => setBrand(e.target.value)}
            className="select select-bordered w-full rounded-none"
          >
            {/* Brand */}
            {brands.map((brand,idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full rounded-none"
          >
            {/* Category */}
            {categories.map((category,idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleReset}
        className="p-2 bg-black text-white w-full flex items-center gap-2 justify-center mt-8"
      >
        <h2>Reset</h2>
        <ListRestart size={32} />
      </button>
    </section>
  );
};

export default FilterBar;
