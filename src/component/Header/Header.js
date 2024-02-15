import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            navigate(`/search/${search}`);
            setSearch("");
        }
    };
    const location = useLocation();
    useEffect(() => {
        setOpenMenu(false);
    }, [location.pathname]);
    return (
        <div className="header">
            <Container className="d-flex align-items-center">
                <NavLink className="logo" to="/">
                    <img src="/img/logo.svg" alt="" />
                </NavLink>
                <div className={`menu ${openMenu && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="list-movie" id="movie">
                                MOVIES
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="icon" onClick={() => setOpenMenu(!openMenu)}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>
            </Container>
        </div>
    );
};

export default Header;
