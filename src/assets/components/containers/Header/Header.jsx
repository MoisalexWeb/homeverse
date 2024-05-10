import "./Header.scss"
import Navbar from "../../Navbar/Navbar"

const Header = () => {
    return (
        <header id="header">
            <div className="header">
                <div className="header__container">

                    <div className="header__content">
                        <a href="mailto:info@homeverse.com" className="header__content-link" aria-label="Send email to Homeverse">
                            <i className="ri-mail-line"></i>
                            info@homeverse.com
                        </a>

                        <address className="header__content-link">
                            <i className="ri-map-pin-line"></i>
                            15/A, Nest Tower, NYC
                        </address>
                    </div>

                    <div className="header__content">
                        <div className="header__content__social">
                            <a href="#" aria-label="Go to Homverse's facebook" className="header__content__social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="#" aria-label="Go to Homverse's twitter" className="header__content__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="#" aria-label="Go to Homverse's instagram" className="header__content__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" aria-label="Go to Homverse's" className="header__content__social-link">
                                <i className="ri-pinterest-fill"></i>
                            </a>
                        </div>

                        <a href="#" className="header__content-cta">add listing</a>
                    </div>
                </div>
            </div>

            <Navbar />
        </header>
    )
}

export default Header