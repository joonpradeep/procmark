import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { getAllSubCategory , deleteSubCategory} from '../../../services/sub-category-service';

export default class SubCategoryManagerComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         subcategories:[]
        }

        componentDidMount = ()=>{
          getAllSubCategory()
          .then(data =>{
           this.setState({isError:false, message:'',subcategories:data.subcategories||[]});
          })
          .catch(error =>{
           console.error('Error while loading all subcategories!');
           this.setState({isError:true, message:'Error while loading all subcategories!',companies:[]});
          });
        }

        onDelete = (id)=>{
          deleteSubCategory(id)
          .then(data =>{
            this.componentDidMount();
          })
          .catch(error =>{
            this.setState({isError:false, message:error.message});
          })
        }

        render(){
         return <div className="container sub-subcategory-manager-container">
          <div className="row"> 
           <div className="flex-grow-1 ">
            <div className="text-center">
             <span className="text-style">Registred Sub-Categories</span>
            </div>     
           </div>
           <div className="">
            <Link 
             to={`${this.props.match.url}/add-sub-category`}
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
               {Array.isArray(this.state.subcategories) && this.state.subcategories.length > 0?
                this.state.subcategories.map((subcategory,index)=>{
                 return <TableBodyRow key={index} onDelete={this.onDelete} subcategory={subcategory} index={index} {...this.props}/>;
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
 let {subcategory,index} = props;

 if(!subcategory){
  return <tr><td>Empty list!</td></tr>;
 }

 return <tr>
  <td>
   {index + 1}
  </td>
  <td>
   {subcategory.name}
  </td> 
  <td >
    <Link className="btn btn-primary" 
    to={`${props.match.url}/edit-subcategory/`+subcategory.id}
    >Edit</Link>
   
  </td> 
  <td>
    <button className="btn btn-danger" onClick={()=>props.onDelete(subcategory.id)}>Delete</button>
   
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
   