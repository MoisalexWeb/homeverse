import "./Footer.scss"
import logo from "/images/logo-light.png"

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__container">

                <div className="footer__item footer__item--home">
                    <div className="footer__item__logo">
                        <img src={logo} alt="Homeverse logo" className="footer__item__logo-img" />
                        <p className="footer__item__logo-text">Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                    </div>

                    <ul className="footer__item__contact">
                        <li>
                            <a href="#" className="footer__item__contact-link" aria-label="See location">
                                <i className="ri-map-pin-line"></i>
                                Brooklyng, New York, United States
                            </a>
                        </li>
                        <li>
                            <a href="tel:+0123-456789" className="footer__item__contact-link" aria-label="Call to Homeverse's phone">
                                <i className="ri-phone-line"></i>
                                +0123-456789
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contact@homeverse.com" className="footer__item__contact-link" aria-label="Send an email to Homeverse">
                                <i className="ri-mail-line"></i>
                                contact@homeverse.com
                            </a>
                        </li>
                    </ul>

                    <ul className="footer__item__social">
                        <li>
                            <a href="#" className="footer__item__social-link" aria-label="Visit Homeverse's facebook">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__social-link" aria-label="Visit Homeverse's twitter">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__social-link" aria-label="Visit Homeverse's linkedin">
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__social-link" aria-label="Visit Homeverse's youtube">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__item footer__item--company">
                    <h3 className="footer__item-title">company</h3>
                    <ul className="footer__item__ul">
                        <li>
                            <a href="#about" className="footer__item__ul-link">about</a>
                        </li>
                        <li>
                            <a href="#blog" className="footer__item__ul-link">blog</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">all products</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">location map</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link footer__item__ul-link--upper">faq</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">contact us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__item footer__item--services">
                    <h3 className="footer__item-title">services</h3>
                    <ul className="footer__item__ul">
                        <li>
                            <a href="#about" className="footer__item__ul-link">order tracking</a>
                        </li>
                        <li>
                            <a href="#blog" className="footer__item__ul-link">wish list</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">login</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">my account</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">terms & conditions</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">promotional offers</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__item footer__item--customers">
                    <h3 className="footer__item-title">customer care</h3>
                    <ul className="footer__item__ul">
                        <li>
                            <a href="#about" className="footer__item__ul-link">login</a>
                        </li>
                        <li>
                            <a href="#blog" className="footer__item__ul-link">my account</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">wish list</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">order tracking</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link footer__item__ul-link--upper">faq</a>
                        </li>
                        <li>
                            <a href="#" className="footer__item__ul-link">contact us</a>
                        </li>
                    </ul>
                </div>

            </div>

            <p className="footer-copy">
                @2024 <a href="https://moisalexweb.github.io/moisalexweb" rel="noopener" target="_blank">MoisalexWeb.</a> All rights reserved
            </p>

        </footer>
    )
}

export default Footer