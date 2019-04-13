import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.interceptors.request.use(config => {
    console.log('this is axios interceptors:', config)
    //! You can edit your request config before you return it, that is the whole idear
    return config
}, error => {
    console.log('Error Log | axios.interceptors', error)
    return Promise.reject(error)
})


axios.interceptors.response.use(response => {
    console.log(response)
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
