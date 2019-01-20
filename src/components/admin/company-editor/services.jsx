import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import ServicesListComponent from './service-list';
import ServicesEditorComponent from './service-editor';

export default class ServicesComponent extends React.Component{
    state={
        isError:false,
        message:'Please wait while we are loading data...',
        service:{},
        services:[],
        component:ServicesListComponent
    }
    componentDidMount = ()=>{
        this.componentWillReceiveProps(this.props);
    }
    componentWillReceiveProps = (props)=>{       
        let company = props.company;                   
        this.setState({services:company.services});
    }

    render(){
        return <div className="container-fluid">        
            <div className="row">
            <Switch>
            <Route exact path={`${this.props.match.url}`}
            render = {()=>{
                return  <ServicesListComponent services={this.state.services} {...this.props}/>;
            }}
            />
            <Route path={`${this.props.match.url}/add-new-service`}
            render = {()=>{
                return  <ServicesEditorComponent {...this.props}/>;
            }}
            />
            <Route path={`${this.props.match.url}/edit-service`}
            render = {()=>{
                return  <ServicesEditorComponent {...this.props}/>;
            }}
            />
            <Route render = {()=>this.props.mathc.url}/>
            </Switch>
            </div>
        </div>;
    }
   
}

