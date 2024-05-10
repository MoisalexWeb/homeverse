import "./ArticleCard.scss"

const ArticleCard = ({ img, articleBy, homeType, title, date, ctaLink }) => {
    return (
        <article className="article-home">
            <figure className="article-home__figure">
                <img src={img} alt={title} className="article-home__figure-img" />
            </figure>

            <div className="article-home__texts">
                <header className="article-home__texts__header">
                    <p className="article-home__texts__header-text">
                        <i className="ri-user-3-fill"></i>
                        by: <span>{articleBy}</span>
                    </p>
                    <p className="article-home__texts__header-text">
                        <i className="ri-price-tag-3-fill"></i>
                        <span className="type-home">{homeType}</span>
                    </p>
                </header>

                <h3 className="article-home__texts-title">{title}</h3>
            </div>

            <footer className="article-home__footer">
                <p className="article-home__footer-date">
                    <i className="ri-calendar-todo-fill"></i>
                    {date}
                </p>
                <a href={ctaLink} className="article-home__footer-cta">
                    read more
                </a>
            </footer>
        </article>
    )
}

export default ArticleCard