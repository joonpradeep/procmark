import React from 'react';
import './aboutus.css';
import Nav from "../Nav/container";

export default class AboutUsComponent extends React.Component{
    render (){
        return <div><Nav/><div className="container-fluid aboutus-container">
            We established in cold of 2018 and board of directors include
            <ul>
                <li>Kaushalendra Singh</li>
                <li>Pradeep Joon</li>
                <li>Pradod Berwal</li>
            </ul>
        </div>
        </div>
    }
}