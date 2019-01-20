import React from 'react';

export default class ServiceEditorComponent extends React.Component{

    state={
        isError:false,
        message:'Please wait while we are loading data..',
        service:{name:'new service',service:'service desc'}
    }
componentDidMount = ()=>{
    this.setState({isError:false, message:''});
}

onAddService = ()=>{
        let company = this.props.company||{};
        if(Array.isArray(company.services)){
            company.services.push(this.state.service);
        }
        this.setState({isError:false, message:'Service added!',service:{}});
    }

    render(){
        return <div className="container-fluid service-editor mt-2">
        <div className="row">
         <div className="mx-auto">
             Service Entry Form
         </div>
         </div> 
         <hr className="divider"/>
         <div className="row">
         <div className="flex-grow-1">
         <form>
             <div className="form-row form-group  ">
                 <div className="col col-md-3 text-right">
                 <label>Service Name:</label>
                 </div>
                 <div className=" col col-md-6">
                 <input className="form-control"/>
                 </div>
             </div>
             <div className="form-row form-group  ">
                 <div className="col col-md-3 text-right">
                 <label>Service Name:</label>
                 </div>
                 <div className="col col-md-6">
                 <input className="form-control"/>
                 </div>
             </div>
             <div className="form-row form-group  ">
                 <div className="col col-md-3 text-right">
                 <label>Service Name:</label>
                 </div>
                 <div className="col col-md-6">
                 <input className="form-control"/>
                 </div>
             </div>
             <div className="form-row form-group  ">
                 <div className="col col-md-3 text-right">
                 <label>Service Name:</label>
                 </div>
                 <div className="col col-md-6">
                 <input className="form-control"/>
                 </div>
             </div>
             <div className="form-row form-group  ">
                 <div className="col col-md-3 text-right">
                 <label>Service Name:</label>
                 </div>
                 <div className="col col-md-6">
                 <input className="form-control"/>
                 </div>
             </div>

             <div className="form-row">
                <div className="mx-auto">
                    <button type="button" className="btn btn-primary"
                    onClick={this.onAddService}
                    >Add Service</button>
                </div>

                </div>

         </form> 
         </div>
        </div>
     </div>
    }
}