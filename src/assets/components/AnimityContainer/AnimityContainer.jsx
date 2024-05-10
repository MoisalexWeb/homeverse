import "./AnimityContainer.scss"
import AnimityCard from "../AnimityCard/AnimityCard"

const AnimityContainer = () => {
    return (
        <div className="animities-grid">
            <AnimityCard
                icon={<i className="ri-roadster-line"></i>}
                text="parking space"
            />

            <AnimityCard
                icon={<i className="ri-drop-line"></i>}
                text="swimming pool"
            />
            
            <AnimityCard
                icon={<i className="ri-roadster-line"></i>}
                text="private security"
            />
            
            <AnimityCard
                icon={<i className="ri-heart-pulse-line"></i>}
                text="medical center"
            />
            
            <AnimityCard
                icon={<i className="ri-book-3-line"></i>}
                text="library area"
            />
            
            <AnimityCard
                icon={<i className="ri-hotel-bed-line"></i>}
                text="king size bed"
            />
            
            <AnimityCard
                icon={<i className="ri-home-4-line"></i>}
                text="smart home"
            />
            
            <AnimityCard
                icon={<i className="ri-football-line"></i>}
                text="kid's playland"
            />
        </div>
    )
}

export default AnimityContainer