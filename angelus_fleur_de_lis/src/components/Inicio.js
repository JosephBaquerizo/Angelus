import React from 'react';
import '../styles/Inicio.css';
import imagen1 from '../assets/1.jpg';
import imagen2 from '../assets/2.jpg';
import imagen3 from '../assets/3.jpg';
import imagen4 from '../assets/4.jpg';
import imagen5 from '../assets/5.jpg';

const Inicio = () => {
    return (
        <div className="inicioContainer">
            <img className="imagenL" src={imagen5} alt="img1"/>
            <div className='imgPar'>
                <img className="imagenS" src={imagen1} alt="img2"/>
                <img className="imagenS" src={imagen2} alt="img3"/>
            </div>
            <img className="imagenL" src={imagen3} alt="img3"/>
            <img className="imagenL" src={imagen4} alt="img3"/>
        </div>
    )
}

export default Inicio;