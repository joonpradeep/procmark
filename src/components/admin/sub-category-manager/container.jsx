import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import SubCategoryManagerComponent from './component';
import SubCategoryEditor from '../sub-category-editor/container';
//import CompanyRegistrationForm from '../../Register/container';
//import CompanyEditor from '../Company-editor/container';

class CategoryManagerContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <SubCategoryManagerComponent {...this.props}/>;
    }}
   />
  <Route path={`${this.props.match.url}/add-sub-category`}
    render = {()=>{
     return <SubCategoryEditor {...this.props}/>;
    }}
   /> 
  <Route path={`${this.props.match.url}/edit-subcategory/:id`}
    render = {(props)=>{
     return <SubCategoryEditor 
      id={props.match.params.id}
      {...this.props}/>;
    }}
   />
  </Switch>;
 }
}

let SubCategoryManager = withRouter(CategoryManagerContainer);
export default SubCategoryManager;
