import "./Animities.scss"
import Title from "../../Title/Title"
import AnimityContainer from "../../AnimityContainer/AnimityContainer"

const Animities = () => {
    return (
        <section className="animities">
            <div className="animities__container">
                <Title title="building animities" span="our animities" />
                <AnimityContainer />
            </div>
        </section>
    )
}

export default Animities