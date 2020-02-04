import './header.css';
import React from 'react';

import HeaderInfoBar from './widgets/headerInfoBar';
import Navbar from './widgets/navbar';
import Banner from './widgets/banner';

export default props => (
    <header className="header">
        <HeaderInfoBar/>
        <Navbar/>
        <Banner/>
    </header>
);
