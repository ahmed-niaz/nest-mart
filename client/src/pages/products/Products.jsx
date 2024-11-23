import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader";

import useAxios from "./../../hooks/useAxios";

import SearchBar from "../../components/products/SearchBar";
import SortByPrice from "../../components/products/SortByPrice";
import FilterBar from "../../components/products/FilterBar";
import ProductCard from "../../components/products/ProductCard";
import { useState } from "react";
import { SkipBack, SkipForward } from "lucide-react";

const Products = () => {
  const axiosCommon = useAxios();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: [search, sort, brand, category, page],
    queryFn: async () => {
      const res = await axiosCommon(
        `/my-products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`
      );
      console.log(res.data);
      setTotalPages(Math.ceil(res.data.totalProducts / 9));
      return res.data;
    },
  });

  if (isLoading) return <Loader />;

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  // handle reset
  const handleReset = () => {
    setBrand("");
    setSearch("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  // handle page
  const handlePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="container mx-auto">
      <h2 className="font-bold text-center my-8 text-3xl">All Products</h2>
      <section className="lg:flex items-center justify-between">
        <div>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="w-[200px]">
          <SortByPrice setSort={setSort} />
        </div>
      </section>
      {/* content */}
      <section className="grid grid-cols-12 mt-5">
        <div className="col-span-2">
          {/* filter */}
          <FilterBar
            setCategory={setCategory}
            setBrand={setBrand}
            handleReset={handleReset}
            brands={data.brands}
            categories={data.categories}
          />
        </div>
        <div className="col-span-10 px-8">
          <section>
            {!data || !data.products || data.products.length === 0 ? (
              <div className="grid place-items-center w-full min-h-screen text-2xl font-extrabold">
                <h2>No Product Found</h2>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {data.products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </section>
          {/* pagination */}
          <div className="flex justify-center items-center gap-2 my-8">
            <button disabled={page === 1} onClick={() => handlePage(page - 1)}>
              <SkipBack />
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
            <button disabled={page === totalPages} onClick={() => handlePage(page + 1)}>
              <SkipForward />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
