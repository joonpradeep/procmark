import React from 'react';
import './services.css';
import { getAllProducts } from '../../services/product-service';
import { getAllServices } from '../../services/work-service';

export default class ServicesComponent extends React.Component{

    state={
        isError:false,
        message:'Please wait while we are loading data...',
        services:[],
        products:[]
    }

    componentDidMount = ()=>{
        getAllProducts()
        .then(data =>{
            this.setState({isError:false, message:'',products:data.products||[]});
        })
        .catch(error =>{
            this.setState({isError:true, message:error.message,products:[]});
        });

        getAllServices()
        .then(data =>{
            this.setState({isError:false, message:'',services:data.services||[]});
        })
        .catch(error =>{
            this.setState({isError:true, message:error.message,services:[]});
        });
    }

    render (){
        return <div className="container-fluid services-container">
        <div className="row">
        <div className="mx-auto">Products</div>
        </div>
           <div className="row">
            <div className="table-responsive">  
            <table className="table table-sm">
            <thead><ProductTableHeading /></thead>
            <tbody>
                {Array.isArray(this.state.products) && this.state.products.length > 0?
                    this.state.products.map((product, index)=>{
                        return  <ProductTableBody seq={index + 1}
                        product={product}
                        match={this.props.match}
                        />
                    })
                    :<tr><td>Empty List!</td></tr>}
               
                
                </tbody>
            </table>
            </div>
           </div>


           <div className="row">
        <div className="mx-auto">Services</div>
        </div>
           <div className="row">
            <div className="table-responsive">  
            <table className="table table-sm">
            <thead><ProductTableHeading /></thead>
            <tbody>
                {Array.isArray(this.state.products) && this.state.products.length > 0?
                    this.state.services.map((service, index)=>{
                        return  <ProductTableBody seq={index + 1}
                        product={service}
                        match={this.props.match}
                        />
                    })
                    :<tr><td>Empty List!</td></tr>}
                </tbody>
            </table>
            </div>
           </div>
        </div>
    }
}

const ProductTableHeading = ()=>{
    return <tr>
            <th>Seq</th>
            <th>Name</th>
            <th>Company Name</th>
    </tr>
}

const ProductTableBody = ({seq,product,match})=>{
    return <tr>
            <td>{seq}</td>
            <td>{product.name}</td>
            <td>{product.companyName}</td>
    </tr>
}