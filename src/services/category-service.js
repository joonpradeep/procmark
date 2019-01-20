import {getHttpInstance} from './http-utils';
import {COMMON_SERVICE_ENDPOINT} from '../system-constants';

let http = getHttpInstance(COMMON_SERVICE_ENDPOINT);

export let saveCategory = (category)=>{
    let promise = new Promise((resolve, reject)=>{
        http.post('/category/save', JSON.stringify(category))
        .then(resp =>{
            resolve({category:resp.data});
        })
        .catch(error =>{
            console.error('Error while saving the Category!');
            reject({message:'Error while saving the Category!'});
        });
    });

    return promise;
}


export let getCategory = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/category/get/'+id)
        .then(resp =>{
            resolve({category:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving the Category!');
            reject({message:'Error while reterving the Category!'});
        });
    });

    return promise;
}


export let deleteCategory = (id)=>{
    let promise = new Promise((resolve, reject)=>{
        http.delete('/category/delete/'+id)
        .then(resp =>{
            resolve({message:resp.data});
        })
        .catch(error =>{
            console.error('Error while deleting the Category!');
            reject({message:'Error while deleting the Category!'});
        });
    });

    return promise;
}


export let getAllCategory = ()=>{
    let promise = new Promise((resolve, reject)=>{
        http.get('/category/get')
        .then(resp =>{
            resolve({categories:resp.data});
        })
        .catch(error =>{
            console.error('Error while reterving all companies!');
            reject({message:'Error while reterving all companies!'});
        });
    });

    return promise;
}