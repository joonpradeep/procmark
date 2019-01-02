import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import RootComponent from './root-component';
import AboutUs from './aboutus/container';
import Testimonials from './Testimonials/container';
import Services from './Services/container';
import ContactUs from './ContactUs/container';
import Register from './Register/container';
import SecureComponent from "../components/common/secure/component";


class RootContainer extends React.Component{

    render(){
        return <Switch>
            <Route exact path={'/'} render = {(props) =>{
                return <RootComponent {...this.props}/>
            }}/>
            <Route exact path={'/Home'} render = {(props) =>{
                       return <RootComponent {...this.props}/>
                   }}/>
            <Route path={'/aboutus'} render = {(props) =>{
                return <AboutUs {...this.props}/>
            }}/>
            <Route path={'/Testimonials'} render = {(props) =>{
                return <Testimonials {...this.props}/>
            }}/>
           <Route path={'/Services'} render = {(props) =>{
                return <Services {...this.props}/>
            }}/>
            <Route path={'/ContactUs'} render = {(props) =>{
                return <ContactUs {...this.props}/>
            }}/>
            <Route path={'/Register'} render = {(props) =>{
                return <Register {...this.props}/>
            }}/>

        </Switch>
    }
}

let Root = withRouter(RootContainer);

export default Root;
