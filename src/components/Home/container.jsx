import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import HomeComponent from './component';


class HomeContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={'/Home'}
                   render = {(props) =>{
                       return <HomeComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let Home = withRouter(HomeContainer);

export default Home;
