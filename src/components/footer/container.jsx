import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import FooterComponent from './component';

class FooterContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <FooterComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let Footer = withRouter(FooterContainer);

export default Footer;
