import "./Contact.scss"
import Cta from "../../Cta/Cta"

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__texts">
                    <h2 className="contact__texts-title">looking for a dream home?</h2>
                    <p className="contact__texts-text">we can help you realize your dream of a new home</p>
                </div>
                <Cta
                    link="#"
                    text="explore properties"
                    uppercase={false}
                    dark={true}
                />
            </div>
        </section>
    )
}

export default Contact