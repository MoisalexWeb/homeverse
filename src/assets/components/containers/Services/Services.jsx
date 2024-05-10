import Title from "../../Title/Title"
import ServiceCard from "../../ServiceCard/ServiceCard"
import { service1, service2, service3 } from "./importImages"
import "./Services.scss"

const Services = () => {
    return (
        <section className="services" id="services">

            <Title title="our main focus" span="our services" />

            <div className="services__container">
                
                <ServiceCard
                    title="buy a home"
                    img={service1}
                    text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
                    cta="find a home"
                    ctaRef="#"
                />
                
                <ServiceCard
                    title="rent a home"
                    img={service2}
                    text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
                    cta="find a home"
                    ctaRef="#"
                />
                
                <ServiceCard
                    title="sell a home"
                    img={service3}
                    text="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
                    cta="find a home"
                    ctaRef="#"
                />
            </div>

        </section>
    )
}

export default Services