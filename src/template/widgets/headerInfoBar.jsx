import './headerInfoBar.css';
import React from 'react';

export default props => (
    <div className="header-infobar-bg">
        <div className="header-infobar">
            <p><i class="fa fa-calendar">&nbsp;</i>Seg / Sex - 08:00 ás 18:00</p>
            <p><i class="fa fa-map-marker">&nbsp;</i>Av. Logo ali, 777, Não Sei - SP</p>
            <a href="tel:+552199999999"><i class="fa fa-whatsapp">&nbsp;</i>+55 99 9999-9999</a>
        </div>
    </div>
);