import React, {Fragment} from 'react';
import '../../../node_modules/react-selectize/themes/index.css'
import './register.css';
import {
Grid,
Typography,
TextField,
FormControlLabel,
Checkbox,
} from '@material-ui/core';
import {MultiSelect} from "react-selectize";
import Button from "@material-ui/core/es/Button/Button";
import Sectors from './sector.json'


export default class HomeComponent extends React.Component {

    render() {
        let valuesOfBusiness = Sectors.map(function(sector){
            return {label: sector.name, value: sector.id}
        });

        return <div className='registerForm'>
            <Fragment>
                <Typography variant="title" gutterBottom style={{textAlign: 'center'}}>
                    Company Registration Form
                </Typography>
                <Grid container spacing={28}>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <TextField required id="CompanyName" label="Company Name" fullWidth/>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <TextField id="CIN" label="CIN No." fullWidth/>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <TextField id="Address" label="Business Registered Address" fullWidth/>
                    </Grid>
                    <Grid item xs={4}/>
                     <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <TextField required id="CorrespondingAddress" label="Corresponding Address" fullWidth/>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <TextField required id="EmailAddress" label="Authorized Email Address" fullWidth/>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                    <Grid>
                        <legend className='legendClass'>
                            <Grid item xs={4}/>
                            <Grid item xs={4}/>
                            <br></br>Select Business Category</legend>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                            <MultiSelect required options = {valuesOfBusiness} placeholder = "Business Category" className='multiSelectClassName'/>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <TextField required id="userPassword" label="Password" fullWidth/>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <TextField required id="confirmPassword" label="Confirm password" fullWidth/>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={<Checkbox color="secondary" name="policyAgreement" value="yes"/>}
                            label="Agree all the policies"/>
                        <Button variant="contained" className='buttonStyle'>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Fragment>
         
        </div>
    }
}