import React from 'react';
import { saveCategory, getCategory } from '../../../services/category-service';

import './style.css';

export default class CategoryEditorComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         category:{}
        }
        componentDidMount = ()=>{
          if(this.props.id){
            getCategory(this.props.id)
            .then(data =>{
              this.setState({isError:false, message:'',category:data.category});
            })
            .catch(error =>{
              this.setState({isError:true, message:error.message});
            })
          }else{
            this.setState({isError:false, message:''});
          }
          
        }

        onChange = (fieldName,fieldValue)=>{
          let category=this.state.category;
          category[fieldName]=fieldValue;
          this.setState({category:category});
        }
        onSave = ()=>{
          saveCategory(this.state.category)
          .then(data =>{
            this.setState({isError:false, message:'Category saved successfully!', category:data.category});
          })
          .catch(error =>{
            this.setState({isError:true, message:error.message});
          })
        }

        render(){
          let {category} = this.state;
         return <div className="container category-editor-container">
          <div className="row justify-content-center">
          <div className="back-btn">
          <button className="btn btn-primary" onClick={this.props.history.goBack}>Back</button>
          </div>
            <div className="mx-auto">
                <span className="text-style">New Category Form</span>
            </div>
            </div>
            <hr className="divider" />
            <div className={"row "+(this.state.message?'':' d-none ')}>
            <div className="mx-auto">
              <div className={this.state.isError?'alert alert-danger ':'alert alert-success '}>
              {this.state.message}
              </div>
            </div>
            </div>
            <div className="row">
              <div className="editor-form mx-auto">
                <form>
                    <div className="form-row">
                        <label>Category Name</label>
                        <input name="name" className="form-control"
                        value={category.name||''}
                        onChange={(e)=>this.onChange('name',e.target.value)}
                          />
                    </div>
                    <div className="form-row mt-2 justify-content-center">
                       <button type="button" className="btn btn-primary" onClick={this.onSave}>Save</button>
                    </div>
                </form>
              </div>
            </div>
         </div>;
        }
}