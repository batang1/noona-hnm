import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faX, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ];

    const navigate = useNavigate();

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(openMenu => !openMenu);
    }
    const hideMenu = () => {
        toggleMenu();
    }

    return (
        <div>
            <div className="login-button">
                <a className="menu-icon" onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faBars} /></a>
                {console.log("authenticate true 냐!!!", authenticate)}
                {authenticate ? (
                    <div onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <span style={{ cursor: "pointer" }}>로그아웃</span>
                    </div>
                ) : (
                    <div onClick={() => navigate("/login")}>
                        <FontAwesomeIcon icon={faUser} />
                        <span style={{ cursor: "pointer" }}>로그인</span>
                    </div>
                )}
                
            </div>
            <div className="nav-section">
                <Link to='/'>
                <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDHpLuBrbtbovYGutI9lvJ-62UT0ZFVr36Q&usqp=CAU"
                />
                </Link>
            </div>
            <div className="menu-area">
                <ul className={openMenu? "mb-menu" : "menu-list"} >
                    <a className="menu-x" onClick={()=>hideMenu()}><FontAwesomeIcon icon={faX} /></a>
                    {menuList.map((menu, index) => (
                        <li><a href="#" key={index}>{menu}</a></li>
                    ))}
                </ul>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
