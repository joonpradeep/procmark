import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import RootComponent from './root-component';
import AboutUs from './aboutus/container';
import Testimonials from './Testimonials/container';
import Services from './product-services/container';
import ContactUs from './ContactUs/container';
import Register from './Register/container';
import AdminHome from './admin/admin-home/container';
import Home from './Home/container';
class RootContainer extends React.Component{
    render(){
        return <Switch>
            <Route exact path={`${this.props.match.url}`} render = {(props) =>{
                       return <RootComponent component={Home} {...this.props}/>
                   }}/>
            <Route path={'/Home'} render = {(props) =>{
                       return <RootComponent component={Home} {...this.props}/>
                   }}/>
            <Route path={'/aboutus'} render = {(props) =>{
                return <RootComponent component={AboutUs} {...this.props}/>
            }}/>
            <Route path={'/Testimonials'} render = {(props) =>{
                return <RootComponent component={Testimonials} {...this.props}/>
            }}/>
           <Route path={'/Services'} render = {(props) =>{
                return <RootComponent component={Services} {...this.props}/>
            }}/>
             <Route path={'/admin'} render = {(props) =>{
                return <RootComponent  component={AdminHome} {...this.props}/>
            }}/>
            <Route path={'/ContactUs'} render = {(props) =>{
                return <RootComponent  component={ContactUs} {...this.props}/>
            }}/>
            <Route path={'/Register'}  render = {(props) =>{
                return <RootComponent component={Register} {...this.props}/>
            }}/>

        </Switch>
    }
}

let Root = withRouter(RootContainer);

export default Root;
