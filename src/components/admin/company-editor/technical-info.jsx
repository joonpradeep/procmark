import React from 'react';

export default class TechnicalInfoComponent extends React.Component{
    state={
        isError:false,
        message:'Please wait while we are loading data...',
        company:{},
    }
    componentDidMount = ()=>{          
        if( this.props.location.state ){
            let company =    this.props.location.state.company;  
             this.setState({isError:false,message:'',
            component:this.props.component||this.state.component,
            company:company});
         }else{
             this.setState({isError:false,message:'',            
             component:this.props.component||this.state.component});
         }
         this.onChange = this.props.onChange;
         this.onSave = this.props.onSave;
    }
        componentWillReceiveProps = (props)=>{ 
            this.setState({isError:false,message:'',company:props.company});
            this.onChange = props.onChange;
            this.onSave = props.onSave;
           }
    render(){
       
        let company = this.state.company || {};
        return <div className=" container technical-info-container">
         <div className="row align-items-center">      
            <div className="flex-grow-1">
                <div className="text-center">
                <span className="text-style">Company Technical Information</span>  
                </div>
            </div>
            <div className="">
          <button type="button" className="btn btn-primary"
           onClick={this.onSave}
          >Save Company</button>
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
       

        <div className="row  justify-content-end">
         <div className="">
          <button type="button" className="btn btn-primary"
           onClick={this.onSave}
          >Save Company</button>
         </div>
        </div>

       </form>
      </div>
        </div>;
    }
}