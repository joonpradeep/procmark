import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import SubCategoryEditorComponent from './component';

class SubCategoryEditorContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <SubCategoryEditorComponent {...this.props}/>;
    }}
   />
  </Switch>;
 }
}

let SubCategoryEditor = withRouter(SubCategoryEditorContainer);
export default SubCategoryEditor;
