import React from 'react';
import './root.css';
import Home from './Home/container';
import Nav from './Nav/container';
import Footer from './footer/container';

export default class RootComponent extends React.Component{
    state ={
        component:Home
    }
    componentWillMount =()=>{
        this.setState({component:this.props.component||Home})
    }
    componentWillReceiveProps =(props)=>{
        
        this.setState({component:props.component||Home})
    }
    render (){  
        return <div className="container-fluid root-container">
            <div className="row top-nav-row">
                <Nav/>
            </div>
            <div className="row body-row">
                <this.state.component />
            </div>
            <div className="row footer-row">
                <Footer />
            </div>
        </div>
    }
}