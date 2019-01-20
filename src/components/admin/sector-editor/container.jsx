import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import SectorEditorComponent from './component';

class SectorEditorContainer extends React.Component{
 render(){
  return <Switch>
   <Route exact path={`${this.props.match.url}`}
    render = {()=>{
     return <SectorEditorComponent {...this.props}/>;
    }}
   />
  </Switch>;
 }
}

let SectorEditor = withRouter(SectorEditorContainer);
export default SectorEditor;
