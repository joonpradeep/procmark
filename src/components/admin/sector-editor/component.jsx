import React from 'react';
import { saveSector, getSector } from '../../../services/sector-service';

import './style.css';

export default class SectorEditorComponent extends React.Component{
        state={
         isError:false,
         message:'Please wait while we are loading data...',
         sector:{}
        }
        componentDidMount = ()=>{
          if(this.props.id){
            getSector(this.props.id)
            .then(data =>{
              this.setState({isError:false, message:'',sector:data.sector});
            })
            .catch(error =>{
              this.setState({isError:true, message:error.message});
            })
          }else{
            this.setState({isError:false, message:''});
          }
        }

        onChange = (fieldName,fieldValue)=>{
          let sector=this.state.sector;
          sector[fieldName]=fieldValue;
          this.setState({sector:sector});
        }
        onSave = ()=>{
          saveSector(this.state.sector)
          .then(data =>{
            this.setState({isError:false, message:'Sector saved successfully!', sector:{}});
          })
          .catch(error =>{
            this.setState({isError:true, message:error.message});
          })
        }

        render(){
          let {sector} = this.state;
         return <div className="container sector-editor-container">
          <div className="row justify-content-center">
          <div className="back-btn">
          <button className="btn btn-primary" onClick={this.props.history.goBack}>Back</button>
          </div>
            <div className="mx-auto">
                <span className="text-style">New Sector Form</span>
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
                        <label>Sector Name</label>
                        <input name="name" className="form-control"
                        value={sector.name||''}
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