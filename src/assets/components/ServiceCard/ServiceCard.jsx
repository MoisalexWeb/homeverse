import "./ServiceCard.scss"

const ServiceCard = ({ img, title, text, cta, ctaRef }) => {
    return (
        <div className="service-card">
            <img src={img} alt="Icon" className="service-card-img" />

            <h3 className="service-card-title">{title}</h3>

            <p className="service-card-text">{text}</p>

            <a href={ctaRef} className="service-card-cta">
                {cta}
                <i className="ri-arrow-right-line"></i>
            </a>
        </div>
    )
}

export default ServiceCard