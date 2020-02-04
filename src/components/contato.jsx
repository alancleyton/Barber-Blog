import './contato.css';
import React from 'react';

export default props => (
    <section className="contato" id="contato">

        <div className="contato-info">
            <h1>Fique por dentro!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad sint, nesciunt consequuntur, minima neque distinctio expedita vel tenetur error, nulla corrupti iusto nihil sapiente. Odit placeat nemo similique temporibus.</p>

        </div>

        <form className="contato-email">
            <input type="text" placeholder="E-mail"/>
            <button>Assinar</button>
        </form>

    </section>

);