import React from 'react';
import './root.css';
import Home from './Home/container';
import Nav from './Nav/container';
import Footer from './footer/container';



export default class RootComponent extends React.Component{
    render (){
        return <div className="container-fluid root-container">
            <div className="row top-nav-row">
                <Nav/>
            </div>
            <div className="row body-row">
                <Home />
            </div>
            <div className="row footer-row">
                <Footer />
            </div>
        </div>
    }
}