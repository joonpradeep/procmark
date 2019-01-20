import React from 'react';

export default class ProductEditorComponent extends React.Component{
    state={
        isError:false,
        message:'Please wait while we are loading data..',
        product:{name:'new product',productDesc:'Product Desc'}
    }
componentDidMount = ()=>{
    this.setState({isError:false, message:''});
}

    onAddProduct = ()=>{
        let company = this.props.company||{};
        if(Array.isArray(company.products)){
            company.products.push(this.state.product);
        }
        this.setState({isError:false, message:'Product added!',product:{}});
    }

    render(){
       
        return <div className="container-fluid product-editor mt-2">
           <div className="row">
            <div className="mx-auto">
                Product Entry Form
            </div>
            </div>             
            <hr className="divider"/>
            <div className="row">
            <div className="mx-auto">
                {this.state.message?
                <span className={ this.state.isError?" alert alert-danger":' alert alert-success'}>{this.state.message}</span>
                :''}
            </div>
            </div>
            <div className="row">
            <div className="flex-grow-1">
            <form>
                <div className="form-row form-group  ">
                    <div className="col col-md-3 text-right">
                    <label>Product Name:</label>
                    </div>
                    <div className=" col col-md-6">
                    <input className="form-control"/>
                    </div>
                </div>
                <div className="form-row form-group  ">
                    <div className="col col-md-3 text-right">
                    <label>Product Name:</label>
                    </div>
                    <div className="col col-md-6">
                    <input className="form-control"/>
                    </div>
                </div>
                <div className="form-row form-group  ">
                    <div className="col col-md-3 text-right">
                    <label>Product Name:</label>
                    </div>
                    <div className="col col-md-6">
                    <input className="form-control"/>
                    </div>
                </div>
                <div className="form-row form-group  ">
                    <div className="col col-md-3 text-right">
                    <label>Product Name:</label>
                    </div>
                    <div className="col col-md-6">
                    <input className="form-control"/>
                    </div>
                </div>
                <div className="form-row form-group  ">
                    <div className="col col-md-3 text-right">
                    <label>Product Name:</label>
                    </div>
                    <div className="col col-md-6">
                    <input className="form-control"/>
                    </div>
                </div>
                <div className="row">
                <div className="mx-auto">
                    <button type="button" className="btn btn-primary"
                    onClick={this.onAddProduct}
                    >Add Product</button>
                </div>

                </div>
            </form> 
            </div>
           </div>
        </div>
    }
}