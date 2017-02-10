const API_ROOT = 'http://cs.udianhuo.com/crms/api';
const getJsonRes = response => response.json().then(json => ({json, response}));
const checkJson = ({json, response}) => {
    if (!response.ok) {
        return Promise.reject(json)
    } else {
        return {json};
    }
}
export const fetchList = ({title, type}) =>
    fetch(`${API_ROOT}/${title}/query`, {
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
    .then(getJsonRes)
    .then(checkJson)
    .then(
        data => data,
        error => ({
            error: error.message || 'Something bad happened'
        })
    );

export const fetchTable = ({title, timeRange, listtype}) =>
    fetch(`${API_ROOT}/${title}/export`, {
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
    .then(getJsonRes)
    .then(checkJson)
    .then(
        data => data,
        error => ({
            error: error.message || 'Something bad happened'
        })
    );
const getResultList = (index, record, result) => {
    if (typeof index === 'number') {
        return [{
            'mobile': record.mobile,
            'openid': record.openid,
            'result': result,
        }]
    } else {
        let reslist = [];
        for (let i = 0, len = index.length; i < len; i++) {
            reslist.push({
                'mobile': record[i].mobile,
                'openid': record[i].openid,
                'result': result,
            })
        }
        return reslist;
    }
}
export const uploadresult = ({index, record, type, result}) =>
    fetch(`${API_ROOT}/${type}/uploadresult`, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(getResultList(index, record, result)),
    })
    .then(getJsonRes)
    .then(checkJson)
    .then(
        data => data,
        error => ({
            error: error.message || 'Something bad happened'
        })
    );