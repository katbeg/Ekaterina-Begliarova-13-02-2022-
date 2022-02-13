import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../../images/weather_logo.png'

export default function Header(){
    return(
        <div className="header">
            <Link to='/'><img src={Logo} alt='Weather App Logo' className="header__logo"/></Link>
            <nav className="header__menu">
                <Link to='/' className="header__menu__link">Home</Link>
                <Link to='/favorites' className="header__menu__link">Favorites</Link>
            </nav>
        </div>
    );
}