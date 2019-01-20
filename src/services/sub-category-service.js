import {getHttpInstance} from './http-utils';
import {COMMON_SERVICE_ENDPOINT} from '../system-constants';

let http = getHttpInstance(COMMON_SERVICE_ENDPOINT);

export let saveSubCategory = (subCategory)=>{
    let promise = new Promise((resolve, reject)=>{
        http.post('/subCategory/save', JSON.stringify(subCategory))
        .then(resp =>{
            resolve({subCategory:resp.data});
        })
        .catch(error =>{
            console.error('Error while registring the SubCategory!');
            reject({message:'Error while registring the SubCategory!'});
        });
    });

    return promise;
}


export let getSubCategory = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/subCategory/get/'+id)
        .then(resp =>{
            resolve({subCategory:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving the SubCategory!');
            reject({message:'Error while reterving the SubCategory!'});
        });
    });

    return promise;
}


export let deleteSubCategory = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.delete('/subCategory/delete/'+id)
        .then(resp =>{
            resolve({message:resp.data});
        })
        .catch(error =>{
            console.error('Error while deleting the SubCategory!');
            reject({message:'Error while deleting the SubCategory!'});
        });
    });

    return promise;
}


export let getAllSubCategory = ()=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/subCategory/get')
        .then(resp =>{
            resolve({subcategories:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving all companies!');
            reject({message:'Error while reterving all companies!'});
        });
    });

    return promise;
}