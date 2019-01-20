import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import CategoryManagerComponent from './component';
import CategoryEditor from '../category-editor/container';
//import CompanyRegistrationForm from '../../Register/container';
//import CompanyEditor from '../Company-editor/container';

class CategoryManagerContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <CategoryManagerComponent {...this.props}/>;
    }}
   />
  <Route path={`${this.props.match.url}/add-category`}
    render = {()=>{
     return <CategoryEditor {...this.props}/>;
    }}
   /> 
    <Route path={`${this.props.match.url}/edit-category/:id`}
    render = {(props)=>{
     return <CategoryEditor 
      id={props.match.params.id}
      {...this.props}/>;
    }}
   />
  </Switch>;
 }
}

let CategoryManager = withRouter(CategoryManagerContainer);
export default CategoryManager;
