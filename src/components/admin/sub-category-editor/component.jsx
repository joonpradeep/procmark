import React from 'react';
import { saveSubCategory, getSubCategory } from '../../../services/sub-category-service';

import './style.css';

export default class CategoryEditorComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         subcategory:{}
        }
        componentDidMount = ()=>{
          if(this.props.id){
            getSubCategory(this.props.id)
            .then(data =>{
              this.setState({isError:false, message:'',subcategory:data.subCategory});
            })
            .catch(error =>{
              this.setState({isError:true, message:error.message});
            })
          }else{
            this.setState({isError:false, message:''});
          }
        }

        onChange = (fieldName,fieldValue)=>{
          let subcategory=this.state.subcategory;
          subcategory[fieldName]=fieldValue;
          this.setState({subcategory:subcategory});
        }
        onSave = ()=>{
          saveSubCategory(this.state.subcategory)
          .then(data =>{
            this.setState({isError:false, message:'Category saved successfully!', subcategory:data.subCategory||{}});
          })
          .catch(error =>{
            this.setState({isError:true, message:error.message});
          })
        }

        render(){
          let {subcategory} = this.state;
         return <div className="container subcategory-editor-container">
          <div className="row justify-content-center">
          <div className="back-btn">
          <button className="btn btn-primary" onClick={this.props.history.goBack}>Back</button>
          </div>
            <div className="mx-auto">
                <span className="text-style">New Sub-Category Form</span>
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
                        value={subcategory.name||''}
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