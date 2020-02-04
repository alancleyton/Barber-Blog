import './testemunhas.css';
import React from 'react';
import Testemunha1 from '../assets/img/testemunha1.jpg';
import Testemunha2 from '../assets/img/testemunha2.jpg';
import Testemunha3 from '../assets/img/Testemunha3.jpg';
import Testemunha4 from '../assets/img/Testemunha4.jpg';

export default props => (
    <section className="testemunhas" id="testemunhas">

        <div className="testemunhas-items">

            <div className="testemunha">
                <img src={Testemunha1} alt="John Wick"/>

                <span>Keanu Reeves</span>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur similique molestias cum nihil repudiandae. Ab fugit facilis, dolorum id, labore blanditiis, accusantium debitis deleniti suscipit soluta aliquam quaerat. Iure!"</p>
            </div>

            <div className="testemunha">
                <img src={Testemunha2} alt="Norman Reedus"/>

                <span>Norman Reedus</span>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis modi dolor fugiat incidunt temporibus excepturi! Dolores, odit. Tempora incidunt tenetur voluptate deleniti obcaecati voluptatum sed praesentium fuga nam accusamus."</p>
            </div>

            <div className="testemunha">
                <img src={Testemunha3} alt="Jason Mamoa"/>
                
                <span>Jason Mamoa</span>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, harum voluptatem ad dolor, ducimus soluta praesentium adipisci repellat ab rem aut nobis sit nulla repudiandae possimus eos distinctio repellendus minus."</p>
            </div>

            <div className="testemunha">
                <img src={Testemunha4} alt="John Krasinski"/>

                <span>John Krasinnski</span>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor in quidem perferendis nihil suscipit et facilis possimus id doloremque, molestiae soluta cum, nam atque cupiditate ipsam hic consequuntur numquam corporis."</p>
            </div>
        </div>

    </section>
);