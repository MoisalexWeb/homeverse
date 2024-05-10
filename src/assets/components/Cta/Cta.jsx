import "./Cta.scss"

const Cta = ({ link, text, uppercase, dark }) => {
    return (
        <a
            href={(link) ? link : "#"}
            type="button"
            className={`main-button ${(uppercase) ? "uppercase" : ""} ${(dark) ? "dark" : ""}`}
        >
            {text}
        </a>
    )
}

export default Cta