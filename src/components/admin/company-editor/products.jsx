import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import ProductListComponent from './product-list';
import ProductEditorComponent from './product-editor';

export default class ProductComponent extends React.Component{
    state={
        isError:false,
        message:'Please wait while we are loading data...',
        product:{},
        products:[],
    }

    componentDidMount = ()=>{
        this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps = (props)=>{       
        let company = props.company; 
        this.setState({products:company.products});
    }

    render(){
        return <div className="container-fluid">        
            <div className="row">
            <Switch>
            <Route exact path={`${this.props.match.url}`}
            render = {()=>{
                return  <ProductListComponent products={this.state.products} {...this.props}/>;
            }}
            />
            <Route path={`${this.props.match.url}/add-new-product`}
            render = {()=>{
                return  <ProductEditorComponent {...this.props}/>;
            }}
            />
            <Route path={`${this.props.match.url}/edit-product`}
            render = {()=>{
                return  <ProductEditorComponent {...this.props}/>;
            }}
            />
            <Route render = {()=>this.props.mathc.url}/>
            </Switch>
            </div>
        </div>;
    }
   
}

