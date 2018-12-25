import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import LoginComponent from './component';

class LoginContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <LoginComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let Login = withRouter(LoginContainer);

export default Login;
