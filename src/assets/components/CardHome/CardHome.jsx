import "./CardHome.scss"

const CardHome = ({ imgHome, location, photosNum, videosNum, forSales, price, homeName, homeDescription, bedrooms, bathrooms, squareFeet, agentAvatar, agentName, agentProfesion }) => {
    return (
        <div className="card-home">
            <figure className="card-home__figure">
                <span className={`card-home__figure-purpose ${(forSales) ? "sales" : ""}`}>
                    {(forSales) ? "for sales" : "for rent"}
                </span>

                <img src={imgHome} alt={homeName} className="card-home__figure-img" />

                <div className="card-home__figure__details">
                    <address className="card-home__figure__details-location">
                        <i className="ri-map-pin-line"></i>
                        {location}
                    </address>

                    <div className="card-home__figure__details__icons">
                        <button>
                            <i className="ri-camera-line"></i>
                            <span>{photosNum}</span>
                        </button>
                        <button>
                            <i className="ri-film-line"></i>
                            <span>{videosNum}</span>
                        </button>
                    </div>
                </div>

            </figure>

            <div className="card-home__texts">

                <div className="card-home__details">
                    <span className="card-home__details-price">{price}</span>
                    <h3 className="card-home__details-title">{homeName}</h3>
                    <p className="card-home__details-description">{homeDescription}</p>

                    <div className="card-home__details__home">
                        <div className="card-home__details__home__icon card-home__details__home__icon--first">
                            <div>
                                <strong>{bedrooms}</strong>
                                <i className="ri-hotel-bed-line"></i>
                            </div>
                            <span>bedrooms</span>
                        </div>

                        <div className="card-home__details__home__icon">
                            <div>
                                <strong>{bathrooms}</strong>
                                <i className="ri-user-6-line"></i>
                            </div>
                            <span>bathrooms</span>
                        </div>

                        <div className="card-home__details__home__icon card-home__details__home__icon--last">
                            <div>
                                <strong>{squareFeet}</strong>
                                <i className="ri-square-line"></i>
                            </div>
                            <span>square ft</span>
                        </div>
                    </div>
                </div>

                <div className="card-home__agent">
                    <div className="card-home__agent__perfil">
                        <img src={agentAvatar} alt="" className="card-home__agent__perfil-img" />

                        <div className="card-home__agent__perfil__info">
                            <a href="#" className="card-home__agent__perfil__info-name">{agentName}</a>
                            <span className="card-home__agent__perfil__info-profesion">{agentProfesion}</span>
                        </div>
                    </div>

                    <div className="card-home__agent__buttons">
                        <button className="card-home__agent__buttons-btn">
                            <i className="ri-share-line"></i>
                        </button>
                        <button className="card-home__agent__buttons-btn">
                            <i className="ri-heart-3-line"></i>
                        </button>
                        <button className="card-home__agent__buttons-btn">
                            <i className="ri-add-circle-line"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardHome