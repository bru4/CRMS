
const API_ROOT = 'http://cs.udianhuo.com/crms/api';

export const fetchList = ({ title, type }) => fetch(`${API_ROOT}/${title}/query`, {
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

export const fetchTable = ({title, timeRange, listtype}) => fetch(`${API_ROOT}/${title}/export`,{
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'startday': timeRange[0].format('X'),
        'endday': timeRange[1].format('X'),
        'type': listtype
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

export const uploadresult = ({index, record, type}, result) => fetch(`${API_ROOT}/${type}/uploadresult`,{
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'resultlist': [{
            'mobile': record.mobile,
            'openid': record.openid,
            'result': result,
        }]
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
