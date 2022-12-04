import "./sidearticle.css";
const SidebarArticle = ({title, text}) => {
    return (
        <div className="news__sidebar-article">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default SidebarArticle;