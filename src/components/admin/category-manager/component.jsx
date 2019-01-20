import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { getAllCategory, deleteCategory } from '../../../services/category-service';

export default class CategoryManagerComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         categories:[]
        }

        componentDidMount = ()=>{
          getAllCategory()
          .then(data =>{
           this.setState({isError:false, message:'',categories:data.categories||[]});
          })
          .catch(error =>{
           console.error('Error while loading all categories!');
           this.setState({isError:true, message:'Error while loading all categories!',companies:[]});
          });
        }

        onDelete = (id)=>{
          deleteCategory(id)
          .then(data =>{
            this.componentDidMount();
          })
          .catch(error =>{
            this.setState({isError:false, message:error.message});
          })
        }

        render(){
         return <div className="container category-manager-container">
          <div className="row"> 
           <div className="flex-grow-1 ">
            <div className="text-center">
             <span className="text-style">Registred Categories</span>
            </div>     
           </div>
           <div className="">
            <Link 
             to={`${this.props.match.url}/add-category`}
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
               {Array.isArray(this.state.categories) && this.state.categories.length > 0?
                this.state.categories.map((category,index)=>{
                 return <TableBodyRow key={index} onDelete={this.onDelete} category={category} index={index} {...this.props}/>;
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
 let {category,index} = props;

 if(!category){
  return <tr><td>Empty list!</td></tr>;
 }

 return <tr>
  <td>
   {index + 1}
  </td>
  <td>
   {category.name}
  </td> 
  <td>
    <Link className="btn btn-primary" 
    to={`${props.match.url}/edit-category/`+category.id}
    >Edit</Link>
   
  </td> 
  <td>
    <button className="btn btn-danger" onClick={()=>props.onDelete(category.id)}>Delete</button>
   
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
   