import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import ServicesComponent from './component';

class ServicesContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <ServicesComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let Services = withRouter(ServicesContainer);

export default Services;
