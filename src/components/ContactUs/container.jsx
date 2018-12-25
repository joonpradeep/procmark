import React from 'react';
import {withRouter, Switch,Route} from 'react-router-dom';
import ContactUsComponent from './component';

class ContactUsContainer extends React.Component{
    render(){
        return <Switch>
            <Route path={`${this.props.match.url}`}
                   render = {(props) =>{
                       return <ContactUsComponent {...this.props}/>
                   }}/>
        </Switch>
    }
}

let ContactUs = withRouter(ContactUsContainer);

export default ContactUs;
