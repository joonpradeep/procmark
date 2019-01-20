import React from 'react';
import ProductComponent from './products';
import ServiceComponent from './services';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';

export default class ProductAndServicesComponent extends React.Component{

    state={
        isError:false,
        message:'Please wait while we are loading data...',
        company:{},
        component:ProductComponent
    }

    onButtonClick = (component)=>{
        this.setState({component:component});
    }
    componentDidMount = ()=>{
         if( this.props.location.state ){
            let company =    this.props.location.state.company;                                     
            this.setState({isError:false,message:'',
            component:ProductComponent,
            company:company});
         }else{
             this.setState({isError:false,message:'',            
             component:ProductComponent||this.state.component});
         }
         this.onChange = this.props.onChange;
         this.onSave = this.props.onSave;
    }

    componentWillReceiveProps = (props)=>{
         let company = props.company;
        if(!company.products){
            company['products'] = [];
        }
        if(!company.services){
            company['services'] = [];
        }

        this.setState({isError:false,message:'',
        component:ProductComponent,
        company:props.company});
        this.onChange = props.onChange;
        this.onSave = props.onSave;
    }
       
    render(){
        let company = this.state.company;
       
        return <div className=" container product-and-services-container">
         <div className="row align-items-center">      
            <div className="flex-grow-1">
                <div className="text-center">
                <span className="text-style">Company Product and Services</span>  
                </div>
            </div>
            <div className="">
          <button type="button" className="btn btn-primary"
           onClick={this.onSave}
          >Save Company</button>
         </div>
         </div>
         <div className="row justify-content-center">
       <div className="text-center">      
        {this.state.message?
         <div className={"alert "+ (this.state.isError?' alert-danger':'alert-success') }>
          {this.state.message}       
         </div>:''}
       </div>
      </div>
      <hr className="divider"/>
      <div className="row">
            <div className="product-btn">
                <NavLink className="bnt btn-primary mr-2 p-2"
               to={
                  {pathname: `${this.props.match.url}/product-services/products`,
                  state:this.props.location.state
                }
                }
                >
                Products
                </NavLink>
            </div>
            <div className="services-btn">
            <NavLink className="bnt btn-primary mr-2 p-2"
               to={
            
               {pathname: `${this.props.match.url}/product-services/services`
               ,
                  state:this.props.location.state
                }
            }
                >
                Services
                </NavLink>
            </div>
      </div>
      <div className="row">
            <Switch>
                <Route exact path={`${this.props.match.url}/product-services`}
                render = {(props)=>{
                       return <Redirect to={
                           {pathname:`${this.props.match.url}/product-services/products`,
                           state:this.props.location.state}}/>
                }}
                />
                <Route path={`${this.props.match.url}/product-services/products`}
                render = {(props)=>{
                    return <ProductComponent company={company}  {...props} />
                }}
                />
                 <Route path={`${this.props.match.url}/product-services/services`}
                render = {(props)=>{
                    return <ServiceComponent company={company} {...props}/>
                }}
                />
                <Route
                render = {(props)=>{
                    return this.props.match.url
                }}
                />
            </Switch>
           
      </div>

      <div className="row justify-content-end">
      <div className="">
            <button type="button" className="btn btn-primary"
             onClick={this.onSave}
            >Save Company</button>
      </div>
      </div>
        </div>;
    }
}