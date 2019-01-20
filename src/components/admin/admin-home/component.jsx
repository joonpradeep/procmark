import React from 'react';
import {NavLink} from 'react-router-dom';
import DefaultAdminHome from './default-home';

export default class AdminHomeComponenet extends React.Component{
    state ={
        component:DefaultAdminHome
    }
    componentDidMount = ()=>{
        this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps = (props)=>{
            this.setState({component:props.component||DefaultAdminHome});
    }

    render(){
        return <div className="container admin-home-container">
        <div className="row">
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item bg-dark">
            <NavLink className="nav-link" to={`${this.props.match.url}/company`}>
            <span className="text-style">Company Manager</span>
            </NavLink>           
            </li>
            <li className="nav-item bg-dark">
            <NavLink className="nav-link" to={`${this.props.match.url}/category`}>
            <span className="text-style">Category Manager</span>
            </NavLink>           
            </li>
            <li className="nav-item bg-dark">
            <NavLink className="nav-link" to={`${this.props.match.url}/sub-category`}>
            <span className="text-style">Sub Category Manager</span>
            </NavLink>           
            </li>
            <li className="nav-item bg-dark">
            <NavLink className="nav-link" to={`${this.props.match.url}/sector`}>
            <span className="text-style">Sector Manager</span>
            </NavLink>           
            </li>
            
        </ul>
        </div>
        </nav>
        </div>
        <div className="row admin-home-body-container mt-4">
            <this.state.component />
        </div>
        </div>
    }
}