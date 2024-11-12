import { NavLink } from "react-router-dom";

export const Footers = () => {
    const footerSections = [
        {
            title: "Account",
            links: ["My Account", "Create Account", "Track Your Order"]
        },
        {
            title: "About Us",
            links: ["Our Story", "Disclaimer", "Blogs"]
        },
        {
            title: "Customer Service",
            links: ["Contact Us", "Shipping Information", "Terms of Service", "Payment Methods"]
        }
    ];

    return (
        <div className="container footer_section">
            <div className="grid grid-four-cols">
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.links.map((link, idx) => (
                                <li key={idx}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h3>Get In Touch</h3>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email" />
                        <button type="button" className="footer_btn">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2024, All Right Reserved
                                <NavLink to="/">
                                    Ayesha's World.
                                </NavLink>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    );
};
