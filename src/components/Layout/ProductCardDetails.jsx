import { useEffect, useState, useTransition } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetails } from "../../api/postApi";
import { Loader } from "./UI/Loader";
import { useCart } from "./CartContext";

export const ProductCardDetails = () => {
  const param = useParams();
  const { addToCart } = useCart(); 
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getProductDetails(param.id);
      if (res.status === 200) {
        setProducts(res.data);
      }
    });
  }, [param.id]);

  if (isPending) return <Loader />;

  return (
    <section className="card product-details-card container">
      <div className="container-card">
        {products && (
          <div className="product-image grid grid-two-cols">
            <img src={products.image} alt={products.image} />
            <div className="product-content">
              <p className="card-title"> {products.title} </p>
              <div className="infoContainer">
                <p>
                  <span className="card-description"> Description: </span>
                  {products.description}
                </p>
                <p>
                  <span className="card-description"> Rating: </span>
                  {products.rating.rate}
                </p>
                <p>
                  <span className="card-description"> Price: </span>
                  ${products.price}
                </p>
              </div>
              <button onClick={() => addToCart(products)}>
                Add to Cart
              </button>
            </div>
          </div>
        )}
        <div className="product-card-backBtn">
          {/* <NavLink to="/cart" className="backBtn">
            <button>See Cart <FaShoppingCart /></button>
          </NavLink> */}
          <NavLink to="/product" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
