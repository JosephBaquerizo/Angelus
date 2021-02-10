import React from "react";
import NavigationBar from "./NavigationBar";
import "../styles/TopBar.css" 
import "../styles/TopBarElements.css";
import "../styles/Slogan.css";

const TopBar = () => {
    return (
        <div className="topBarContainer">
            <div className="topBarElements">
                <p className="logo">ANGELUS</p>
                <p className="slogan">Joyas para el cuerpo y para el alma</p>
                <NavigationBar/>
            </div>
        </div>
    )
}

export default TopBar;