import { useEffect, useState, useTransition } from "react";
import { getProducts } from "../api/postApi";
import { Loader } from "../components/Layout/UI/Loader";
import { ProductCard } from "../components/Layout/Productcard";
import { SearchFilter } from "../components/Layout/UI/SearchFilter";

export const ProductPage = ({ showSearchBar = "true" }) => {
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getProducts();
      setProducts(res.data);
    });
  }, []);

  // Search function
  const searchProduct = (products) => {
    if (search) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return products;
  };

  // Filter function
  const filterProducts = (products) => {
    if (filter === "all") return products;
    return products.filter((product) => product.category === filter);
  };

  const filteredProducts = filterProducts(searchProduct(products));

  if (isPending) return <Loader />;

  return (
    <section className="product-section">
      {showSearchBar && (
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      )}
      <ul className="grid grid-four-cols">
        {filteredProducts.map((curProduct, id) => (
          <ProductCard product={curProduct} key={id} />
        ))}
      </ul>
    </section>
  );
};
