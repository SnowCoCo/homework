import axios from 'axios';
axios.defaults.baseURL="http://localhost:3000";

function axiosGet(url){
    axios.get(url).then(res=>{
        console.log('success:\n',res);
    }).catch(error=>{
        console.log('error:\n',error);
    })
}


function axiosPut(url,body){
    axios.put({
        url,
        headers: {'Content-Type': 'application/json'},

    })
}