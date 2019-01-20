import React from 'react';
import './nav.css';
import {NavLink} from "react-router-dom";


export default class NavComponent extends React.Component{

    render (){
        return <div className="container-fluid nav-container">
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/aboutus">AboutUs</NavLink>
                <NavLink to="/Testimonials">Testimonials</NavLink>
                <NavLink to="/Services">Product&Services</NavLink>
                <NavLink to="/ContactUs">ContactUs</NavLink>
                <NavLink to="/admin">Admin</NavLink>
                    <div className="topnav-right">
                            <NavLink to="/Register">Register</NavLink>
                            <NavLink to="/Login">Login</NavLink>
                    </div>
            </div>
    }
}