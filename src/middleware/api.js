/**
 * 本项目上线只需修改API接口为正式环境的接口即可
 */

const API_ROOT = 'http://cs.udianhuo.com/crms/api';
//const API_ROOT = 'http://stest.udianhuo.com/crms/api';

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
        let resultlist = [];
        for (let i = 0, len = index.length; i < len; i++) {
            resultlist.push({
                'mobile': record[i].mobile,
                'openid': record[i].openid,
                'result': result,
            });
        }
        return {resultlist};
    }
};
const getJsonRes = response => response.json().then(json => ({json, response}));
const checkJson = ({json, response}) => {
    if (!response.ok) {
        return Promise.reject(json)
    } else {
        return {json};
    }
};
const fetchHandle = (url, type, data) => fetch(API_ROOT + url, {
    method: type,
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})
.then(getJsonRes)
.then(checkJson)
.then(
    data => data,
    error => ({
        error: error.message || 'Something bad happened'
    })
);
export const fetchList = ({title, type, page}) => fetchHandle(`/${title}/query`, 'post', {
    'currentpage': page ? page : 0,
    'pagesize': 20,
    'querytype': Number(type),
});

export const fetchTable = ({title, timeRange, listtype}) => fetchHandle(`/${title}/export`, 'post', {
    'startday': timeRange[0].format('YYYY-MM-DD'),
    'endday': timeRange[1].format('YYYY-MM-DD'),
    'type': listtype
});

export const uploadresult = ({index, record, type, result}) => fetchHandle(`/${type}/uploadresult`, 'post', getResultList(index, record, result));
/*    fetch(`${API_ROOT}/${type}/uploadresult`, {
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
*/

export const addCoupon = (type, name, id) => fetchHandle('/center/addcoupon', 'post', {
    'title': name,
    'groupid': id.toString(),
    'type': type,
});

export const queryPoint = (openid) => fetchHandle('/member/querypoints', 'post', {
    openid: openid,
});

export const addPoint = (data) => fetchHandle('/member/addpoints', 'post', {
    ...data,
});

export const queryCoupon = () => fetchHandle('/youzan/getcoupons', 'get');

export const takeCoupon = entity => fetchHandle('/member/takecoupon', 'post', {
    ...entity,
});

export const queryUser = mobile => fetchHandle('/member/querybymobile', 'post', {
    mobile: mobile,
})

export const queryProduct = () => fetchHandle('/trial/product/querybytype', 'post', {
    usedtype: 2,
});

export const updateProduct = (data) => fetchHandle('/trial/product/update', 'post', {
    productlist: [{
        ...data,
    }],
});
export const uploadSign = () => fetchHandle('/center/wxyt/getsign?type=upload', 'get')