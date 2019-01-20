import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import CompanyManagerComponent from './component';
import CompanyRegistrationForm from '../../Register/container';
import CompanyInfo from '../company-editor/container';
//import CompanyEditor from '../Company-editor/container';

class CompanyManagerContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <CompanyManagerComponent {...this.props}/>;
    }}
   />
    <Route path={`${this.props.match.url}/register-Company`}
    render = {()=>{
     return <CompanyInfo {...this.props}/>;
    }}
   /> 
   <Route path={`${this.props.match.url}/edit-Company/:id`}
    render = {(props)=>{
     return <CompanyInfo 
      id={props.match.params.id}
      {...this.props}/>;
    }}
   /> 
  </Switch>;
 }
}

let CompanyManager = withRouter(CompanyManagerContainer);
export default CompanyManager;
