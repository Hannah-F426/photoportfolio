import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import styled from "styled-components";

const StyledText = styled.h1`
    font-family: "Monsterrat", sans-serif;
    font-size: 30px;
`;

/**
 *
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Navbar(){
    return <nav className="nav">
        <div className="nav__title">
            <h4 className="title">Hannah Farrell Photography</h4>
        </div>
        <ul className="nav__list">
            <li className="nav__item"><Link to="/photoportfolio">Home</Link></li>
            <li className="nav__item"><Link to="/photoportfolio/portfolio">Portfolio</Link></li>
            <li className="nav__item"><Link to="/photoportfolio/albums">Albums</Link></li>
            <li className="nav__item"><Link to="/photoportfolio/contact-me">Contact Me</Link></li>
        </ul>
    </nav>

}

export default Navbar