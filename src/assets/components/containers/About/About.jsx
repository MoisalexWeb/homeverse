import Title from "../../Title/Title"
import imgBig from "/images/about-banner-1.png"
import imgLittle from "/images/about-banner-2.jpg"
import Cta from "../../Cta/Cta"
import CardIcon from "../../CardIcon/CardIcon"
import "./About.scss"

const About = () => {
    return (
        <section className="about" id="about">

            <div className="about__container">
                <figure className="about__figure">
                    <img src={imgBig} alt="House interior" className="about__figure-img about__figure-img--main" />
                    <img src={imgLittle} alt="House interior" className="about__figure-img about__figure-img--little" />
                </figure>

                <div className="about__texts">
                    <Title
                        title="the leading real estate rental marketplace."
                        span="about us"
                        left={true}
                    />

                    <p className="about__texts-paragraph">Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>

                    <div className="about__texts__card">
                        <CardIcon
                            text="smart home design"
                            icon={<i className="ri-home-3-line"></i>}
                        />
                        <CardIcon
                            text="beautiful scene around"
                            icon={<i className="ri-leaf-line"></i>}
                        />
                        <CardIcon
                            text="exceptional lifestyle"
                            icon={<i className="ri-goblet-line"></i>}
                        />
                        <CardIcon
                            text="complete 24/7 security"
                            icon={<i className="ri-shield-check-line"></i>}
                        />
                    </div>

                    <p className="about__texts-message">"Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"</p>

                    <Cta text="our services" link="#services" uppercase={true} />
                </div>
            </div>
        </section>
    )
}

export default About