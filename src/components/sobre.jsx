import './sobre.css';
import React from 'react';
import Barber1 from '../assets/img/barber1.jpg';
import Barber2 from '../assets/img/barber2.jpg';
import Barber3 from '../assets/img/barber3.jpg';

export default props => (
    <section className="sobre" id="sobre">

        <div className="sobre-info">
            <h1>Sobre</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, commodi consequuntur saepe accusantium earum voluptate hic beatae et enim aliquam alias reprehenderit culpa, eveniet nostrum tempora vel, debitis adipisci maiores?</p>
        </div>

        <div className="sobre-img">
            <img src={Barber2} alt="barber2"/>
        </div>

        <div className="sobre-img1">
            <div className="sobre-img1">
                <img src={Barber1} alt="barber2"/>
            </div>

            <div className="sobre-img1">
                <img src={Barber3} alt="barber3"/>
            </div>
        </div>
        

    </section>
);