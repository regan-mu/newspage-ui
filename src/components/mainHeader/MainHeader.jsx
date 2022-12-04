import mainImg from "../../assets/image-web-3-desktop.jpg";
import mobileImg from "../../assets/image-web-3-mobile.jpg";
import "./mainheader.css";
const MainHeader = () => {
    return (
        <div className="news__header-main">
            <div className="news__header-main_image">
                <img className="news__header--desktop" src={mainImg} alt="bg" />
                <img className="news__header--mobile" src={mobileImg} alt="bg" />
            </div>
            <div className="news__header-main_container">
                <h2 className="news__header-main_container-tag">
                    The Bright Future of Web 3.0?
                </h2>
                <div className="news__header-main_container-text">
                    <p>
                        We dive into the next evolution of the web that claims 
                        to put the power of platforms back into the hands of people. 
                        But is really fulfilling the promise? 
                    </p>
                    <button type="button">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;