import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export let getHttpInstance = (url)=>{
 let instance = axios.create({
  baseURL: url,
  withCredentials: true,
  timeout: 51000
 });
 return instance;
};


