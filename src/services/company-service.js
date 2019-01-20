import {getHttpInstance} from './http-utils';
import {COMMON_SERVICE_ENDPOINT} from '../system-constants';

let http = getHttpInstance(COMMON_SERVICE_ENDPOINT);

export let registerCompany = (company)=>{
    let promise = new Promise((resolve, reject)=>{
        http.post('/company/save', JSON.stringify(company))
        .then(resp =>{
            resolve({company:resp.data});
        })
        .catch(error =>{
            console.error('Error while registring the company!');
            reject({message:'Error while registring the company!'});
        });
    });

    return promise;
}


export let getCompany = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/company/get/'+id)
        .then(resp =>{
            resolve({company:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving the company!');
            reject({message:'Error while reterving the company!'});
        });
    });

    return promise;
}


export let deleteCompany = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.delete('/company/delete/'+id)
        .then(resp =>{
            resolve({message:resp.data});
        })
        .catch(error =>{
            console.error('Error while deleting the company!');
            reject({message:'Error while deleting the company!'});
        });
    });

    return promise;
}


export let getAllCompany = ()=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/company/get')
        .then(resp =>{
            resolve({companies:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving all companies!');
            reject({message:'Error while reterving all companies!'});
        });
    });

    return promise;
}