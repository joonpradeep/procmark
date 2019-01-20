import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import * as boot from 'bootstrap';
import './index.css';
import Root from './components/root-container';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <BrowserRouter basename="/">
        <Root />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
