import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="header-title">contactbook</div>
            </Link>
            <div className="header-logo"></div>
        </div>
    );
};

export default Header;
