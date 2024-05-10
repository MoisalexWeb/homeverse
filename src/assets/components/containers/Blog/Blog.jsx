import "./Blog.scss"
import Title from "../../Title/Title"
import ArticleCard from "../../ArticleCard/ArticleCard"
import { article1, article2, article3 } from "./importImages"

const Blog = () => {
    return (
        <section id="blog">
            <div className="blog__container">

                <Title
                    title="leatest news feeds"
                    span="news & blogs"
                />

                <div className="blog__articles">
                    <ArticleCard
                        title="the most inspiring interior design of 2021"
                        articleBy="William Seklo"
                        homeType="interior"
                        date="March 27, 2022"
                        img={article1}
                        ctaLink="#"
                    />
                    
                    <ArticleCard
                        title="Recent Commercial Real Estate Transactions"
                        articleBy="William Seklo"
                        homeType="estate"
                        date="Apr 17, 2022"
                        img={article2}
                        ctaLink="#"
                    />
                    
                    <ArticleCard
                        title="Renovating a Living Room? Experts Share Their Secrets"
                        articleBy="Jhon Smith"
                        homeType="room"
                        date="May 8, 2022"
                        img={article3}
                        ctaLink="#"
                    />
                </div>

            </div>
        </section>
    )
}

export default Blog