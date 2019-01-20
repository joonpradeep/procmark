import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { getAllSector, deleteSector } from '../../../services/sector-service';

export default class SectorManagerComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         sectors:[]
        }

        componentDidMount = ()=>{
          getAllSector()
          .then(data =>{
           this.setState({isError:false, message:'',sectors:data.sectors||[]});
          })
          .catch(error =>{
           console.error('Error while loading all sectors!');
           this.setState({isError:true, message:'Error while loading all sectors!',companies:[]});
          });
        }

        onDelete = (id)=>{
          deleteSector(id)
          .then(data =>{
            this.componentDidMount();
          })
          .catch(error =>{
            this.setState({isError:false, message:error.message});
          })
        }

        render(){
         return <div className="container sector-manager-container">
          <div className="row"> 
           <div className="flex-grow-1 ">
            <div className="text-center">
             <span className="text-style">Registred Sectors</span>
            </div>     
           </div>
           <div className="">
            <Link 
             to={`${this.props.match.url}/add-sector`}
             className="btn btn-primary">Add New</Link>
           </div>
          </div>
          <div className="row">
           <div className="flex-grow-1">
            <div className="table table-responsive">
             <table className="table table-sm">
              <thead>
               <TableHeading />
              </thead>
              <tbody>
               {Array.isArray(this.state.sectors) && this.state.sectors.length > 0?
                this.state.sectors.map((sector,index)=>{
                 return <TableBodyRow key={index} onDelete={this.onDelete} sector={sector} index={index} {...this.props}/>;
                })                    
                :<tr><td>Empty List!</td></tr>}  
              </tbody>
             </table>
            </div>
           </div>
   
          </div>
         </div>;
        }
}


let TableBodyRow = (props)=>{
 let {sector,index} = props;

 if(!sector){
  return <tr><td>Empty list!</td></tr>;
 }

 return <tr>
  <td>
   {index + 1}
  </td>
  <td>
   {sector.name}
  </td>
  <td>
    <Link className="btn btn-primary" 
    to={`${props.match.url}/edit-sector/`+sector.id}
    >Edit</Link>
   
  </td> 
  <td>
    <button className="btn btn-danger" onClick={()=>props.onDelete(sector.id)}>Delete</button>
   
  </td> 
 </tr>;
};

let TableHeading = ()=>{
 return <tr>
  <th>
                   Seq Num
  </th>
  <th colSpan={3}>
                   Name
  </th>
  
 </tr>;
};
   