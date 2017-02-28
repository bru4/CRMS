/**
 * 本项目上线只需修改API接口为正式环境的接口即可
 */

const API_ROOT = 'http://cs.udianhuo.com/crms/api';
//const API_ROOT = 'http://stest.udianhuo.com/crms/api';

const getJsonRes = response => response.json().then(json => ({json, response}));
const checkJson = ({json, response}) => {
    if (!response.ok) {
        return Promise.reject(json)
    } else {
        return {json};
    }
};

export const fetchList = ({title, type, page}) =>
fetch(`${API_ROOT}/${title}/query`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'currentpage': page?page:0,
        'pagesize': 20,
        'querytype': Number(type),
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
        'startday': timeRange[0].format('YYYY-MM-DD'),
        'endday': timeRange[1].format('YYYY-MM-DD'),
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
        return {
            resultlist: [{
                'mobile': record.mobile,
                'openid': record.openid,
                'result': result,
            }]
        };
    } else {
        let reslist = [];
        for (let i = 0, len = index.length; i < len; i++) {
            reslist.push({
                'mobile': record[i].mobile,
                'openid': record[i].openid,
                'result': result,
            });
        }
        return {reslist};
    }
};

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

export const addCoupon = (type, name, id) =>
fetch(`${API_ROOT}/center/addcoupon`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'title': name,
        'groupid': id.toString(),
        'type': type,
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

export const queryPoint = (openid) =>
fetch(`${API_ROOT}/member/querypoints`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'openid': openid,
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

export const addPoint = (data) =>
fetch(`${API_ROOT}/member/addpoints`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ...data,
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

export const queryCoupon = () =>
fetch(`${API_ROOT}/youzan/getcoupons`, {
    method: 'get',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(getJsonRes)
.then(checkJson)
.then(
    data => data,
    error => ({
        error: error.message || 'Something bad happened'
    })
);

export const takeCoupon = entity =>
fetch(`${API_ROOT}/member/takecoupon`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ...entity,
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

export const queryUser = mobile =>
fetch(`${API_ROOT}/member/querybymobile`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        mobile: mobile,
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

export const queryProduct = () =>
fetch(`${API_ROOT}/trial/queryproduct`, {
    method: 'get',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(getJsonRes)
.then(checkJson)
.then(
    data => data,
    error => ({
        error: error.message || 'Something bad happened'
    })
);