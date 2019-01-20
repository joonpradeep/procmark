import React from 'react';
import { getCompany, registerCompany } from '../../services/company-service';

export default class RegistrationComponent extends React.Component{
    state={
     isError:false,
     message:'',
     company:'',
    }
 componentDidMount = ()=>{
  let id = this.props.id;
  if(id){
    getCompany(id)
    .then(data =>{
     this.setState({company:data.company});
    })
    .catch(error =>{
     console.error(error);
     this.setState({isError:true,message:'Error while loading company!'});
    });
  }
 }

    onSave = ()=>{
     window.scroll(0,0);
     registerCompany(this.state.company)
      .then(data =>{
       this.setState({isError:false,message:'Company registred!',company:data.company});
      })
      .catch(error =>{
       console.error(error);
       this.setState({isError:true,message:'Error while registreing Company!'});
      });
    }
    
    onChange=( field, value)=>{
     let company = this.state.company || {};
     company[field] = value;
     this.setState({company:company});
    }


    render(){
     let company = this.state.company || {};
     return <div className="container company-editor-container mt-4 ml-5 mr-5">
      <div className="row">
       <div >
        <button className="btn btn-primary"
         onClick={this.props.history.goBack}
        >Back</button>  
       </div>
       <div className="flex-grow-1">
        <div className="text-center">
         <span className="text-style">Company Registration Form</span>  
        </div>
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
      <div className="row justify-content-center">
       <form className="form flex-grow-1 pl-2">
        <div className="form-group w-50">
         <label htmlFor="instituteName">Company Name</label>
         <input className="form-control" 
          id="instituteName"
          name="instituteName"
          value={company.name?company.name:''}
          onChange = {(e) => this.onChange('name', e.target.value)}
         />
        </div>
        <div className="form-group">
         <label htmlFor="registredAddress">Address</label>
         <input className="form-control" id="registredAddress" name="registredAddress"
          value={company.registredAddress?company.registredAddress:''}
          onChange = {(e) => this.onChange('registredAddress', e.target.value)}
         />
        </div>
        <div className="form-group  w-50">
         <label htmlFor="registredCity">City</label>
         <input className="form-control" id="registredCity" name="registredCity"
          value={company.registredCity?company.registredCity:''}
          onChange = {(e) => this.onChange('registredCity', e.target.value)}
         />
        </div>
        <div className="form-group  w-50">
         <label htmlFor="registredState">State</label>
         <input className="form-control" id="registredState" name="registredState"
          value={company.registredState?company.registredState:''}
          onChange = {(e) => this.onChange('registredState', e.target.value)}
         />
         </div>
        <div className="form-group  w-50">
         <label htmlFor="registredContry">Country</label>
         <input className="form-control" id="registredContry" name="registredContry"
          value={company.registredContry?company.registredContry:''}
          onChange = {(e) => this.onChange('registredContry', e.target.value)}
         />
        </div>

        <div className="form-group  w-50">
         <label htmlFor="contactPersonName">Contact Person Name</label>
         <input className="form-control" id="contactPersonName" name="contactPersonName"
          value={company.contactPersonName?company.contactPersonName:''}
          onChange = {(e) => this.onChange('contactPersonName', e.target.value)}
         />
        </div>

        <div className="form-group  w-50">
         <label htmlFor="email">Email</label>
         <input className="form-control" id="email" name="email"
          value={company.email?company.email:''}
          onChange = {(e) => this.onChange('email', e.target.value)}
         />
        </div>
        <div className="form-group  w-50">
         <label htmlFor="phone">Phone(Ext.)</label>
         <input className="form-control" id="phone" name="phone"
          value={company.phone?company.phone:''}
          onChange = {(e) => this.onChange('phone', e.target.value)}
         />
        </div>

        <div className="form-group  w-50">
         <label htmlFor="mobile">Mobile</label>
         <input className="form-control" id="mobile" name="mobile"
          value={company.mobile?company.mobile:''}
          onChange = {(e) => this.onChange('mobile', e.target.value)}
         />
        </div>

        <div className="form-group  w-50">
         <label htmlFor="fax">Fax</label>
         <input className="form-control" id="fax" name="fax"
          value={company.fax?company.fax:''}
          onChange = {(e) => this.onChange('fax', e.target.value)}
         />
        </div>

        <div className="form-group  w-50">       
         <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" 
           id="instituteActive" 
           checked={company.active? company.active:false}
           onChange={(e)=>this.onChange('active', e.target.checked)}
          />
          <label className="form-check-label" htmlFor="instituteActive">Is company's documentation verified?</label>
         </div>
        </div>

        <div className="row">
         <div className="mx-auto">
          <button type="button" className="btn btn-primary"
           onClick={this.onSave}
          >Save</button>
         </div>
        </div>

       </form>
      </div>
     </div>;
    }
}