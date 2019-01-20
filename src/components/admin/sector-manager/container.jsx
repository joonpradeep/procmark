import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import SectorManagerComponent from './component';
import SectorEditor from '../sector-editor/container';
//import CompanyRegistrationForm from '../../Register/container';
//import CompanyEditor from '../Company-editor/container';

class SectorManagerContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <SectorManagerComponent {...this.props}/>;
    }}
   />
  <Route path={`${this.props.match.url}/add-sector`}
    render = {()=>{
     return <SectorEditor {...this.props}/>;
    }}
   /> 
   <Route path={`${this.props.match.url}/edit-sector/:id`}
    render = {(props)=>{
     return <SectorEditor 
      id={props.match.params.id}
      {...this.props}/>;
    }}
   />
  </Switch>;
 }
}

let SectorManager = withRouter(SectorManagerContainer);
export default SectorManager;
