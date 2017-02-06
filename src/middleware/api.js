import 'isomorphic-fetch'

const API_ROOT = 'http://cs.udianhuo.com/crms/api';

export const fetchList = ({ title, type }) => fetch(`${API_ROOT}/youzan/${title}/query`, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'currentpage': 0,
            'pagesize': 20,
            'querytype': type,
        }),
    })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
        if (!response.ok) {
            return Promise.reject(json)
        } else {
            return { json };
        }
    })
    .then(
        data => data,
        error => ({error: error.message || 'Something bad happened'})
    );

/*export const fetchList = type => new Promise((resolve, reject)=>{
    request.post(`${API_ROOT}/youzan/${type}/query`)
    .set('Content-Type', 'application/json')
    .send({
        'currentpage': 0,
        'pagesize': 20,
        'querytype': 10
    })
    .end((error,response)=>{
        if(error){
            reject({error});
        }else{
            resolve({response})
        }
    })
})*/
