import React from 'react';
import {NavLink} from 'react-router-dom';
import { registerCompany } from '../../../services/company-service';

export default class CompanyInfoComponent extends React.Component{
    state ={
        isError:false,
        message:'Please wait while we are loading data...',
        company:{},
        errors:[],
        component:()=><div></div>,       
    }
    componentDidMount = ()=>{  
        if( this.props.location.state ){
            let company =    this.props.location.state.company||{};  
            this.setState({isError:false,message:'',
            component:this.props.component||this.state.component,
            company:company});
         }else{
             this.setState({isError:false,message:'',            
             component:this.props.component||this.state.component});
         }
    }
    componentWillReceiveProps = (props)=>{
       this.setState({isError:false,message:'',            
        component:props.component||this.state.component});
  }

    onChange=( field, value)=>{
        let company = this.state.company || {};
        company[field] = value;
        this.setState({company:company});
       }
       
    valid = (company)=>{        
         let errors =[]
         if(!company.name){
            errors.push({fieldName:'generagInfo.name', isError:errors.length>0,message:'Company name is mandatory!'});            
         }
        return errors;
       }

       onSave = ()=>{
        window.scroll(0,0);
        let errors = this.valid(this.state.company) || [];
         if(errors.length > 0){  
            this.setState({isError:true,message:'Please correct errors!',errors:errors});          
            return;
        }


        registerCompany(this.state.company)
         .then(data =>{
          this.setState({isError:false,message:this.state.company.id?'Company record updated':'Company registred!', errors:[],company:data.company});
         })
         .catch(error =>{
          console.error(error);
          this.setState({isError:true,message:'Error while registreing Company!'});
         });
       }       
  
    render(){
            return <div className="container company-info-container">
                <div className="row">
                <div className="mx-auto">
                    Company's Profile
                </div>
                </div>
                <div className="row">
                <nav className="navbar navbar-expand-md navbar-dark bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item bg-dark">
                        <NavLink className="nav-link" to={
                        {pathname:`${this.props.match.url}/general-info`,
                        state:{company:this.state.company}                         
                        }} >General Info</NavLink>
                    </li>
                    <li className="nav-item bg-dark">
                    <NavLink className="nav-link" to={
                        {pathname: `${this.props.match.url}/product-services`,
                        state:{company:this.state.company}                        
                        }
                        } >Product&Services</NavLink>
                    </li>
                    <li className="nav-item bg-dark">
                    <NavLink className="nav-link" to=
                    {
                        
                        {pathname: `${this.props.match.url}/technical-info`,
                        state:{company:this.state.company}                         
                        }
                        } >Technical Info</NavLink>
                    </li>
                    <li className="nav-item bg-dark">
                    <NavLink className="nav-link" to={
                       
                        {pathname:  `${this.props.match.url}/certificates`,
                        state:{company:this.state.company}                         
                        }

                        } >Certificates</NavLink>
                    </li>

                    <li className="nav-item bg-dark">
                    <NavLink className="nav-link" to={
                       
                        {pathname:  `${this.props.match.url}/additional-docs`,
                        state:{company:this.state.company}                         
                        }

                        } >Additional Documents</NavLink>
                    </li>
                    </ul>
                </div>
                </nav>
                </div>
                <div className="row justify-content-center">
                    <div className="text-center">      
                        {this.state.message?
                        <div className={"alert "+ (this.state.isError?' alert-danger':'alert-success') }>
                          <div>{this.state.message}</div>
                          {Array.isArray(this.state.errors)?
                            this.state.errors.map((error,index)=>{
                                return <div key={index}>{error.fieldName} - {error.message}</div>
                            })
                            :''}    
                        </div>:''}
                    </div>
                </div>
                <div className="row">
                    <this.state.component 
                    company={this.state.company} 
                    onChange={this.onChange}
                    onSave={this.onSave}
                    {...this.props}/>
                </div>
            </div>
    }
}