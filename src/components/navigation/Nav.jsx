import "./nav.css";
import logo from "../../assets/logo.svg";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import { useState } from "react";

const Menu = () => {
    return (
        <>
            <p><a href="#">Home</a></p>
            <p><a href="#">New</a></p>
            <p><a href="#">Popular</a></p>
            <p><a href="#">Trending</a></p>
            <p><a href="#">Categories</a></p>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="news__navbar">
            <div className="news__navbar-links">
                <div className="news__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="news__navbar-links_container">
                    <Menu />
                </div>
                <div className="news__navbar-links_mobile">
                    {
                        toggleMenu ? 
                        <RiCloseLine size={27} onClick={() => setToggleMenu(false)} /> : 
                        <RiMenu3Line size={27} onClick={() => setToggleMenu(true)}/> 
                    }
                    {
                        toggleMenu && (
                            <div className="news_menu-mobile">
                                <Menu />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;