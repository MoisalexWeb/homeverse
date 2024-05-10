import "./Title.scss"

const Title = ({ title, span, left }) => {
    return (
        <>
            <span
                className={`main-title-span ${(left) ? "left" : ""}`}
            >
                {span}
            </span>
            <h2
                className={`main-title ${(left) ? "left" : ""}`}
            >
                {title}
            </h2>
        </>
    )
}

export default Title