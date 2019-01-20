import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import RegistrationComponent from './component';

class RegistrationContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <RegistrationComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let CompanyRegistrationForm = withRouter(RegistrationContainer);

export default CompanyRegistrationForm;
