import {getHttpInstance} from './http-utils';
import {COMMON_SERVICE_ENDPOINT} from '../system-constants';

let http = getHttpInstance(COMMON_SERVICE_ENDPOINT);

export let saveSector = (sector)=>{
    let promise = new Promise((resolve, reject)=>{
        http.post('/sector/save', JSON.stringify(sector))
        .then(resp =>{
            resolve({sector:resp.data});
        })
        .catch(error =>{
            console.error('Error while saving the Sector!');
            reject({message:'Error while saving the Sector!'});
        });
    });

    return promise;
}


export let getSector = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/sector/get/'+id)
        .then(resp =>{
            resolve({sector:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving the Sector!');
            reject({message:'Error while reterving the Sector!'});
        });
    });

    return promise;
}


export let deleteSector = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.delete('/sector/delete/'+id)
        .then(resp =>{
            resolve({message:resp.data});
        })
        .catch(error =>{
            console.error('Error while deleting the Sector!');
            reject({message:'Error while deleting the Sector!'});
        });
    });

    return promise;
}


export let getAllSector = ()=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/sector/get')
        .then(resp =>{
            resolve({sectors:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving all companies!');
            reject({message:'Error while reterving all companies!'});
        });
    });

    return promise;
}