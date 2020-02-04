import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';

import Header from '../template/header';
import Sobre from '../components/sobre';
import Preco from '../components/preco';
import Testemunhas from '../components/testemunhas';
import Contato from '../components/contato';
import Footer from '../template/footer';

class App extends Component {
    render(){
        return(
            <div className="app">
                <Header/>
                <Sobre/>
                <Preco/>
                <Testemunhas/>
                <Contato/>
                <Footer/>
            </div>
        );
    }
}

export default App


