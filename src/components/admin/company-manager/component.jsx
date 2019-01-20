import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { getAllCompany, deleteCompany } from '../../../services/company-service';

export default class CompanyManagerComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         companies:[]
        }

        componentDidMount = ()=>{
          getAllCompany()
          .then(data =>{
           this.setState({isError:false, message:'',companies:data.companies});
          })
          .catch(error =>{
           console.error('Error while loading all companies!');
           this.setState({isError:true, message:'Error while loading all companies!',companies:[]});
          });
        }
        onDelete = (id)=>{
          deleteCompany(id)
          .then(data =>{
            this.componentDidMount();
          })
          .catch(error =>{
            this.setState({isError:false, message:error.message});
          })
        }

        render(){
         return <div className="container company-editor-container">
          <div className="row"> 
           <div className="flex-grow-1 ">
            <div className="text-center">
             <span className="text-style">Registred Companies</span>
            </div>     
           </div>
           <div className="">
            <Link 
             to={`${this.props.match.url}/register-company`}
             className="btn btn-primary">Register New</Link>
           </div>
          </div>
          <div className="row">          
            <div className="table table-responsive">
             <table className="table table-sm">
              <thead>
               <TableHeading />
              </thead>
              <tbody>
               {Array.isArray(this.state.companies) && this.state.companies.length > 0?
                this.state.companies.map((company,index)=>{
                 return <TableBodyRow key={index} onDelete={this.onDelete} company={company} index={index} {...this.props}/>;
                })                    
                :<tr><td>Empty List!</td></tr>}  
              </tbody>
             </table>
            </div>
          </div>
         </div>;
        }
}


let TableBodyRow = (props)=>{
 let {company,index} = props;

 if(!company){
  return <tr><td>Empty list!</td></tr>;
 }

 return <tr>
  <td>
   {index + 1}
  </td>
  <td>
   {company.name}
  </td>
  <td>
   {company.regAddress}
  </td>
  <td>
   {company.city}
  </td>
  <td>
   {company.contactPersonName}
  </td>
  <td>
   {company.email}
  </td>
  <td>
   {company.phone}
  </td>
  <td>
   {company.mobile}
  </td>
  <td>
   {company.active?'Active':'Not Active'}
  </td>
  <td >
    <Link className="btn btn-primary" 
    to={{
      pathname:`${props.match.url}/edit-company/`+company.id,
      state:{company:company}
    }}
    >Edit</Link>
   
  </td> 
  <td>
    <button className="btn btn-danger" onClick={()=>props.onDelete(company.id)}>Delete</button>
   
  </td> 
 </tr>;
};

let TableHeading = ()=>{
 return <tr>
  <th>
                   Seq Num
  </th>
  <th>
                   Name
  </th>
  <th>
                   Address
  </th>
  <th>
                   City
  </th>
  <th>
                   Contact Person
  </th>
  <th>
                   Email
  </th>
  <th>
                   Phone
  </th>
  <th>
                   Mobile
  </th>
  <th colSpan={3}>
                   Status
  </th>
 </tr>;
};
   