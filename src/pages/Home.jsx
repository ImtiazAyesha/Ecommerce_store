import { FaLongArrowAltRight } from "react-icons/fa";
import { ProductPage } from "../pages/ProductPage";
import { NavLink } from "react-router-dom";
import { Accordion } from "../components/Layout/Accordion";

export const Home = () => {
    return <>
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Welcome to Ayesha Store
                    </h1>
                    <p className="paragraph">
                        Here you can explore the variety of amazing outfits for men, women & kids.
                        With a seamless shopping experience, secure payment options, and fast delivery, we make it easy for you to find exactly what you need, all from the comfort of your home.
                        Shop now and enjoy great deals, exclusive discounts, and excellent customer service!
                    </p>
                    <NavLink to="/product">
                        <button className="btn btn-darken btn-inline bg-white-box">
                            Shop Now <FaLongArrowAltRight />
                        </button>
                    </NavLink>
                </div>
                <div className="hero-image">
                    <img src="/images/main.jpg" alt="shopping" className="banner-image" />
                </div>
            </div>
            <div className="home-product">
                <h2 className="heading-xl">Our Products</h2>
                <ProductPage showSearchBar={false} />
            </div>
            <Accordion />
        </main>
    </>;
}
