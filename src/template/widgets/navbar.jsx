import './navbar.css';
import React from 'react';
import { Link } from 'react-scroll';

export default props => (
    <div className="navbar-bg">
        <div className="navbar">
            <div className="navbar-logo">
                <h1><a href="#/"><i class="fa fa-scissors"></i>Barber</a></h1>
            </div>

            <div className="navbar-items">
                <ul>
                    <li><Link
                    activeClass="active"
                    to="sobre"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    ><a href="#/">Home</a></Link></li>

                    <li><Link
                    activeClass="active"
                    to="preco"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    ><a href="#/produtos">Preços</a></Link></li>

                    <li><Link
                    activeClass="active"
                    to="testemunhas"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    ><a href="#/estilos">Testemunhos</a></Link></li>

                    <li><Link
                    activeClass="active"
                    to="contato"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    ><a href="#/precos">Contato</a></Link></li>
                </ul>
        </div>
        </div>

    </div>
);