import "./Hero.scss"
import Cta from "../../Cta/Cta"
import img from "/images/hero-banner.png"

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__container">

                <div className="hero__texts">
                    <span className="hero__texts-legend">
                        <i className="ri-home-3-line"></i>
                        real estate agency
                    </span>

                    <h1 className="hero__texts-title">find your dream house by us</h1>

                    <p className="hero__texts-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>

                    <Cta text="make an enquiry" />
                </div>

                <figure className="hero__figure">
                    <img src={img} alt="Modern design house" className="hero__figure-img" />
                </figure>

            </div>
        </section>
    )
}

export default Hero