import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import RegisterComponent from './component';

class RegisterContainer extends React.Component{


    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <RegisterComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let Register = withRouter(RegisterContainer);

export default Register;
