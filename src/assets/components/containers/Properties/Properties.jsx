import Title from "../../Title/Title"
import CardHome from "../../CardHome/CardHome"
import { property1, property2, property3, property4, agent } from "./importImages"
import "./Properties.scss"

const Properties = () => {
    return (
        <section className="property" id="property">
            <Title
                title="featured listing"
                span="properties"
            />

            <div className="property__container">
                <CardHome
                    imgHome={property1}
                    forSales={false}
                    location="Belmont Gardens, Chicago"
                    photosNum="4"
                    videosNum="2"
                    price="$34,000/Month"
                    homeName="new apartment nice view"
                    homeDescription="Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
                    bedrooms="3"
                    bathrooms="2"
                    squareFeet="3450"
                    agentName="william seklo"
                    agentProfesion="estate agent"
                    agentAvatar={agent}
                />
                <CardHome
                    imgHome={property2}
                    forSales={true}
                    location="Illinoils, Chicago"
                    photosNum="4"
                    videosNum="2"
                    price="$34,900/Month"
                    homeName="modern apartment"
                    homeDescription="Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
                    bedrooms="4"
                    bathrooms="2"
                    squareFeet="3550"
                    agentName="william seklo"
                    agentProfesion="estate agent"
                    agentAvatar={agent}
                />
                <CardHome
                    imgHome={property3}
                    forSales={false}
                    location="Belmont Gardens, Chicago"
                    photosNum="4"
                    videosNum="2"
                    price="$34,900/Month"
                    homeName="confortable apartment"
                    homeDescription="Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
                    bedrooms="4"
                    bathrooms="2"
                    squareFeet="3450"
                    agentName="william seklo"
                    agentProfesion="estate agent"
                    agentAvatar={agent}
                />
                <CardHome
                    imgHome={property4}
                    forSales={false}
                    location="Belmont Gardens, Chicago"
                    photosNum="4"
                    videosNum="2"
                    price="$34,900/Month"
                    homeName="luxury villa in rego park"
                    homeDescription="Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood"
                    bedrooms="4"
                    bathrooms="2"
                    squareFeet="3550"
                    agentName="william seklo"
                    agentProfesion="estate agent"
                    agentAvatar={agent}
                />
            </div>

            
        </section>
    )
}

export default Properties