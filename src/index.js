import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'chl beta ho ja tyaar!';



axios.interceptors.request.use(req=>{
  console.log(req)
  return req
},
error=>{
  return Promise.reject(error)
})

axios.interceptors.response.use(res=>{
  console.log(res)
  return res.data.splice(0,6)
},
error=>{
  return Promise.reject(error)
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
