import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import AboutUsComponent from './component';

class AboutUsContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <AboutUsComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let aboutUs = withRouter(AboutUsContainer);

export default aboutUs;
