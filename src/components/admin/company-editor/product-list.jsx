import React from 'react';
import {Link} from 'react-router-dom';
export default class ProductListComponent extends React.Component{
    state={
        products:[]
    }
    componentDidMount=()=>{
        this.componentWillReceiveProps(this.props);
    }
    componentWillReceiveProps =(props)=>{      
        this.setState({products : props.products});
    }

    render(){
        let products = this.state.products;
       
        return <div className=" container-fluid product-component">
        <div className="row justify-content-end">
        <div>
            <Link className="btn btn-primary"
            to={`${this.props.match.url}/add-new-product`}
            >Add New Product</Link>
        </div>
        </div>
        <div className="row">
        {Array.isArray(products) && products.length?
        <div className="table table-responsive">
        <table className="table table-border table-sm">
            <thead><TableHeaderRow /></thead>
            <tbody>
                {products.map((product, index)=>{
                    return <TableBodyRow match={this.props.match} key={index} index={index} product={product}/>;
                })}
                </tbody>
        </table>
        </div>
        :'No product is provided'}        
            </div>
            </div>;
    }
}

const TableBodyRow = ({product,match})=>{  
    return <tr>
        <td>{product.name}</td>
        <td>
        <Link className="btn btn-primary"
            to={`${match.url}/edit-product`}
            >Edit</Link>
        </td>
    </tr>
}
const TableHeaderRow = (product)=>{
    return <tr>
        <th colSpan={2}>Name</th>
    </tr>
}