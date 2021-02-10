import React from "react";
import "../styles/NavBar.css";
import imgBurger from "../assets/burger.png";
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const navSlide = () => {
        let nav = document.querySelector(".nav-links");
        nav.classList.toggle("nav-active");
    }

    return (
        <div className="navBarContainer">
            <nav>
                <ul className="nav-links">
                    <Link to='/'>
                        <li>
                            <a className="nav-op">Inicio</a>
                        </li>
                    </Link>
                    <Link to='/quienessomos'>
                        <li>
                            <a className="nav-op">¿Quiénes somos?</a>
                        </li>
                    </Link>
                    <Link to='visitanos'>
                        <li>
                            <a className="nav-op">Visítanos</a>
                        </li>
                    </Link>
                    <Link to='contacto'>
                        <li>
                            <a className="nav-op">Contacto</a>
                        </li>
                    </Link>
                </ul>
                <div className="menu">
                    <img onClick={navSlide} alt="1" className="burgerPic" src={imgBurger}/>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;