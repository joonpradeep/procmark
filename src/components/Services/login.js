import * as $ from 'jquery';
import {getHttpInstance} from '../Services/httputil';

let csrfToken = '';
let userSession='';
let http = getHttpInstance('https://wouldSeeLater.com');

export let getUserSession =()=>{
 if(!userSession){
  userSession = $.cookie('userSession');
  if(userSession){
   userSession = JSON.parse(userSession);      
  } 
 }
 return userSession;
};



export let getCsrfToken = ()=>{
 http.get('/user/login')
  .then(tokenResp =>{
   csrfToken=tokenResp.data;
  })
  .catch(error =>{
   console.log('Error while getting csrf token!');
  });
};

export let doUserSignup = (user)=>{
 let promise = new Promise((resolve, reject) =>{
  http.post('/user/signup'
   ,JSON.stringify({user:user})
   ,{headers:{[csrfToken.headerName]:csrfToken.token}}
  )
   .then(resp =>{   
    resolve({message:'User registred successfully!'});  
   })
   .catch(error =>{
    console.log('Error while registring user... ',error);
    let message = error.message;
    if(error.response && error.response.data &&Array.isArray(error.response.data.errors)){
     message = error.response.data.errors[0].errorMessage;
    }
    reject({message:message});
   });
 });
 return promise;
};

export let doLogin = (username, password)=>{
 let promise = new Promise((resolve, reject) =>{
  http.post('/user/login'
   ,{username:username,password:password}
   ,{headers:{[csrfToken.headerName]:csrfToken.token}}
  )
   .then(resp =>{   
    userSession = resp.data;
    $.cookie('userSession',JSON.stringify(userSession),
     {
      path:'/',
      //  domain:'localhost',
      secure:false
     }
    );
    if($.cookie('userSession')){
     userSession =JSON.parse($.cookie('userSession'));
    }
    resolve({userSession:userSession});
   })
   .catch(error =>{
    console.log('Error while loging... ',error);
    let message = error.message;
    if(error.response && error.response.data){
     message = error.response.data;
    }
    reject({message:message});
   });
 });
 return promise;
};


