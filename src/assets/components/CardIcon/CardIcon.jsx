import "./CardIcon.scss"

const CardIcon = ({ text, icon }) => {
    return (
        <div className="card-icon">
            {icon}
            <span className="card-icon-text">{text}</span>
        </div>
    )
}

export default CardIcon