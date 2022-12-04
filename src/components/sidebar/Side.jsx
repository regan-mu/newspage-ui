import "./side.css";
import articles from "../../article";
import SidebarArticle from "../sidearticle/SideArticle";

const Sidebar = () => {
    return (
        <div className="news__sidebar">
            <h2>New</h2>
            <div className="news__sidebar-container">
                {articles.map((article, index) => {return <SidebarArticle key={index} title={article.title} text={article.text}/>})}
            </div>
        </div>
    )
}

export default Sidebar;