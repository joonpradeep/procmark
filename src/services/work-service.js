import {getHttpInstance} from './http-utils';
import {COMMON_SERVICE_ENDPOINT} from '../system-constants';

let http = getHttpInstance(COMMON_SERVICE_ENDPOINT);

export const getAllServices = ()=>{
    let promise = new Promise((resolve,reject) =>{
        http.get('/service/get')
        .then(resp =>{
            resolve({services:resp.data});
        })
        .catch(error =>{
            console.error('Error while loading products ', error);
            reject({message:'Error while geting all products!'});
        })
    });

    return promise;
}