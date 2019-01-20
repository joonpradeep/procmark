import React from 'react';
import * as _ from 'lodash';
import {Link} from 'react-router-dom';
export default class ServiceListComponent extends React.Component{
    state={
        services:[]
    }

    componentDidMount=()=>{
        this.componentWillReceiveProps(this.props);
    }
componentWillReceiveProps = (props)=>{
    this.setState({services : props.services});
}

onServiceRemove = (id)=>{
    let company = this.props.company;
    _.remove(company.services, s => Number(s.id) === Number(id));
    this.setState({services:company.services});
}

    render(){
        let services = this.state.services;
        return <div className=" container-fluid service-component">
        <div className="row justify-content-end">
        <div>
            <Link className="btn btn-primary"
            to={`${this.props.match.url}/add-new-service`}
            >Add New Service</Link>
        </div>
        </div>
        <div className="row">
        {Array.isArray(services) && services.length?
        <div className="table table-responsive">
        <table className="table table-border table-sm">
            <thead><TableHeaderRow /></thead>
            <tbody>
                {services.map((service, index)=>{
                    return <TableBodyRow onServiceRemove={this.onServiceRemove} match={this.props.match} key={index} index={index} service={service}/>;
                })}
                </tbody>
        </table>
        </div>
        :'No service is provided'}        
            </div>
            </div>;
    }
}

const TableBodyRow = ({service,match,onServiceRemove})=>{  
    return <tr>
        <td>{service.name}</td>
        <td>
        <Link className="btn btn-primary"
            to={`${match.url}/edit-service`}
            >Edit</Link>
        </td>
        <td>
        <button className="btn btn-danger"
            onClick={()=>onServiceRemove(service.id)}
            >Delete</button>
        </td>
    </tr>
}
const TableHeaderRow = (service)=>{
    return <tr>
        <th colSpan={2}>Service Name Name</th>
    </tr>
}