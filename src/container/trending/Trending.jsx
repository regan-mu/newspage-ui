import trendingList from '../../trending';
import { TrendingArticle } from "../../components";
import "./trending.css";
const Trending = () => {
    return (
        <div className="news__trending">
            {trendingList.map((article, index) => <TrendingArticle 
                key={index}
                image={article.image} 
                number={article.number}
                title={article.title}
                text={article.text}
            />
            )}
        </div>
    )
}
export default Trending;