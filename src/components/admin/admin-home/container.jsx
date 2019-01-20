import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import AdminHomeComponenet from './component';
import CompanyManager from '../company-manager/container';
import CategoryManager from '../category-manager/container';
import SubCategoryManager from '../sub-category-manager/container';
import SectorManager from '../sector-manager/container';

class AdminHomeContainer extends React.Component{

    render(){
        return <Switch>
            <Route exact path={`${this.props.match.url}`}
            render={()=>{
                return <AdminHomeComponenet {...this.props}/>
            }}/>
            <Route path={`${this.props.match.url}/company`}
            render={()=>{
                return <AdminHomeComponenet component={CompanyManager} {...this.props}/>
            }}/>
            <Route path={`${this.props.match.url}/category`}
                        render={()=>{
                            return <AdminHomeComponenet component={CategoryManager} {...this.props}/>
                        }}/>

            <Route path={`${this.props.match.url}/sub-category`}
                        render={()=>{
                            return <AdminHomeComponenet component={SubCategoryManager} {...this.props}/>
                        }}/>

            <Route path={`${this.props.match.url}/sector`}
                        render={()=>{
                            return <AdminHomeComponenet component={SectorManager} {...this.props}/>
                        }}/>             
             <Route
            render={()=>{
                return <AdminHomeComponenet  {...this.props}/>
            }}/>
        </Switch>
    }
}

const AdminHome = withRouter(AdminHomeContainer);
export default AdminHome;
