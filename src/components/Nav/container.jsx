import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import NavComponent from './component';

class NavContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <NavComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let Nav = withRouter(NavContainer);

export default Nav;
