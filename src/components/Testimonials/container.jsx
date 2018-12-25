import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import TestimonialSComponent from './component';

class TestimonialSContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <TestimonialSComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let TestimonialS = withRouter(TestimonialSContainer);

export default TestimonialS;
