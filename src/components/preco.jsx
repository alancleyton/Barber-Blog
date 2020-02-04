import './preco.css';
import React from 'react';

export default props => (
    <section className="preco" id="preco">

        <div className="preco-item">
            <h1><i class="fa fa-scissors"/></h1>
            <span><sup>R$</sup>10</span>
            <ul>
                <li>Máquina</li>
                <li>Tesoura</li>
                <li>Acabamento</li>
            </ul>
        </div>

        <div className="preco-item">
            <h1><i class="fa fa-scissors"/></h1>
            <span><sup>R$</sup>15</span>
            <ul>
                <li>Máquina</li>
                <li>Tesoura</li>
                <li>Acabamento</li>
                <li>+ Barba</li>
                <li>+ Sobrancelha</li>
            </ul>
        </div>

        <div className="preco-item">
            <h1><i class="fa fa-scissors"/></h1>
            <span><sup>R$</sup>20</span>
            <ul>
                <li>Máquina</li>
                <li>Tesoura</li>
                <li>Acabamento</li>
                <li>+ Barba</li>
                <li>+ Sobrancelha</li>
                <li>+ Desenhos</li>
                <li>+ Alisamento</li>
            </ul>
        </div>

    </section>
);