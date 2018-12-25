import React from 'react';
import './contactus.css';
import Nav from "../Nav/component";

export default class ContactUsComponent extends React.Component{
    render (){
        return <div><Nav/><div className="container-fluid contactus-container">
            Please contact any of the following persons
            <ul>
                <li>Kaushalendra Singh</li>
                <li>Pradeep Joon</li>
                <li>Pradod Berwal</li>
            </ul>
        </div></div>
    }
}