import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import CategoryEditorComponent from './component';

class CategoryEditorContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <CategoryEditorComponent {...this.props}/>;
    }}
   />
  </Switch>;
 }
}

let CategoryEditor = withRouter(CategoryEditorContainer);
export default CategoryEditor;
