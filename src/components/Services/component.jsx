import React from 'react';
import './services.css';
import Nav from "../Nav/component";

export default class ServicesComponent extends React.Component{
    render (){
        return <div><Nav/><div className="container-fluid services-container">
            We are providing following services
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </div></div>
    }
}