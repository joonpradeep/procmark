import React from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import CompanyInfoComponent from './component';
import GeneralInfoComponent from './general-info';
import ProductAndServicesComponent from './product-services';
import TechnicalInfoComponent from './technical-info';
import CertificateComponent from './certificates';
import AdditionalDocsComponent from './additional-docs';

class CompanyInfoContainer extends React.Component{
    render(){
        return <Switch>
            <Route exact path={`${this.props.match.url}`} 
            render={(props)=>{
                return <Redirect to={{
                    pathname:`${this.props.match.url}/general-info`,
                    state:this.props.location.state                
                }}
                />;
            }}
             />
            <Route path={`${this.props.match.url}/general-info`} 
            render={(props)=>{
                return <CompanyInfoComponent 
                component={GeneralInfoComponent} 
                {...this.props}/>;
            }}
             />
             <Route path={`${this.props.match.url}/product-services`} 
            render={(props)=>{
                return <CompanyInfoComponent 
                component={ProductAndServicesComponent}                 
                {...this.props}/>;
            }}
             />
             <Route path={`${this.props.match.url}/technical-info`} 
            render={(props)=>{
                return <CompanyInfoComponent component={TechnicalInfoComponent} 
                {...this.props}/>;
            }}
             />
             <Route path={`${this.props.match.url}/certificates`} 
            render={(props)=>{
                return <CompanyInfoComponent component={CertificateComponent} 
                {...this.props}/>;
            }}
             />
             <Route path={`${this.props.match.url}/additional-docs`} 
            render={(props)=>{
                return <CompanyInfoComponent component={AdditionalDocsComponent} 
                {...this.props}/>;
            }}
             />

        </Switch>
    }
}

let CompanyInfo = withRouter(CompanyInfoContainer);
export default CompanyInfo;
