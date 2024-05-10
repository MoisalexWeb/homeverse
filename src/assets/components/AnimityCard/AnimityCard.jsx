import "./AnimityCard.scss"

const AnimityCard = ({ icon, text}) => {
    return (
        <div className="animity-card">
            <figure className="animity-card__figure">
                {icon}
            </figure>
            <h3 className="animity-card-title">{text}</h3>
            <a href="#" className="animity-card-cta" aria-label="See more">
                <i className="ri-arrow-right-line"></i>
            </a>
        </div>
    )
}

export default AnimityCard