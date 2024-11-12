import { FaLongArrowAltRight } from "react-icons/fa";
import {NavLink} from "react-router-dom";

export const ProductCard = ({ product }) => {
    const { id, title, price, image } = product;
    return <li className="product-card card">
        <div className="container-card">
            <div className="image-container">
                <img src={image} alt={image} />
            </div>
            <div className="product-Info">
                <p className="card-title">{title.length > 10 ? title.slice(0, 12) + "...." : title}</p>
                <p>
                    <span className="card-description">Price: </span>
                    {price}
                </p>
                {/* <p>
                    <span className="card-description">Rating: </span>
                    {product.rating.rate}
                </p> */}
                {/* <p>
                    <span className="card-description">Capital: </span>
                    {capital[0]}
                </p> */}
            </div>
            <NavLink to={`/products/${id}`}>
            <button>
                Buy Now<FaLongArrowAltRight />
            </button>
            </NavLink>
        </div>
    </li>
}