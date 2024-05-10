import "./Navbar.scss"
import logo from "/images/logo.png"
import useShowMenu from "./useShowMenu"

const Navbar = () => {

    const { activeMenu, showMenu, hideMenu } = useShowMenu()

    return (
        <nav className={`navbar ${activeMenu ? "show-menu" : ""}`}>

            <div className="navbar__container">
                <a href="#home" className="navbar__logo" aria-label="Go to home section">
                    <img src={logo} alt="Homeverse logo" className="navbar__logo-img" />
                </a>

                <div className="navbar__links">
                    <div className="navbar__links__logo">
                        <img src={logo} alt="Homeverse logo" className="navbar__links__logo-img" />

                        <button onClick={hideMenu} className="navbar__links__logo-close" aria-label="Close menu">
                            <i className="ri-close-line"></i>
                        </button>
                    </div>

                    <ul className="navbar__links__ul">
                        <li>
                            <a href="#home" onClick={hideMenu} className="navbar__links__ul-link">home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={hideMenu} className="navbar__links__ul-link">about</a>
                        </li>
                        <li>
                            <a href="#services" onClick={hideMenu} className="navbar__links__ul-link">service</a>
                        </li>
                        <li>
                            <a href="#property" onClick={hideMenu} className="navbar__links__ul-link">property</a>
                        </li>
                        <li>
                            <a href="#blog" onClick={hideMenu} className="navbar__links__ul-link">blog</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={hideMenu} className="navbar__links__ul-link">contact</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar__buttons">
                    <button className="navbar__buttons-btn" aria-label="Search" data-text="search">
                        <i className="ri-search-line"></i>
                    </button>

                    <button className="navbar__buttons-btn" aria-label="Your account" data-text="profile">
                        <i className="ri-user-3-line"></i>
                    </button>

                    <button className="navbar__buttons-btn" aria-label="Shopping cart" data-text="cart">
                        <i className="ri-shopping-cart-2-line"></i>
                    </button>

                    <button onClick={showMenu} className="navbar__buttons-btn navbar__buttons-btn--hamburger" aria-label="Open menu" data-text="menu">
                        <i className="ri-menu-line"></i>
                    </button>
                </div>
            </div>

            <div onClick={hideMenu} className="dark-background"></div>
        </nav>
    )
}

export default Navbar