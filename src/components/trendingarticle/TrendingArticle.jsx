import "./trendingarticle.css";
const TrendingArticle = ({image, title, number, text}) => {
    return (
        <div className="news__trends-article">
            <img className="news__trends-article_img" src={image} alt={title} />
            <div className="news__trends-article_container">
                <h2>{number}</h2>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default TrendingArticle;