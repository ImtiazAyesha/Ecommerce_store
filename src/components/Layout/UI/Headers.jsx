// Headers.js
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useCart } from "../CartContext"; // Ensure the path is correct

export const Headers = () => {
    const [show, setShow] = useState(false);
    const { itemCount } = useCart(); // This should return an object with itemCount

    const handleButtonToggle = () => {
        setShow(!show);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <h1>Ayesha Store</h1>
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product">ProductPage</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li className="cart-icon">
                                <NavLink to="/cart">
                                    <AiOutlineShoppingCart />
                                    <span className="cart-count">{itemCount}</span> {/* Display itemCount */}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
