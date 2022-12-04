import { Sidebar, MainHeader } from "../../components";
import "./header.css";
const Header = () => {
    return (
        <div className="news__header">
            <MainHeader />
            <Sidebar />
        </div>
    )
}
export default Header;