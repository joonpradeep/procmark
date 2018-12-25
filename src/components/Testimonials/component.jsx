import React from 'react';
import './testimontials.scss';
import Nav from "../Nav/component";

export default class TestimonialSComponent extends React.Component{
    render (){
        return <div><Nav/><div className="container-fluid testimonials-container">
            <ul>
                <li>Dhanvin Joon</li>
                <img src="chrome-extension://eoapioiniiehconlfbloeanalofalgbh/IMG_20180930_082049.jpg" alt = "Dhanvin Joon in Orchha"/>
                <li>Anil Gupta</li>
                <li>Aditya Jain</li>
            </ul>
        </div></div>
    }
}