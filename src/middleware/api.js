/**
 * 本项目上线只需修改API接口为正式环境的接口即可
 */
import config from '../config';

const API_ROOT = config.api;
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
.catch(error => ({
    error: error.message || 'Something bad happened',
}));
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
export const addProduct = (data) => fetchHandle('/trial/product/add', 'post', {
    ...data,
});
export const uploadSign = (data) => fetchHandle(`/center/wxyt/getsign?type=${data?data.type:''}&fileid=${data?data.fileid:''}`, 'get');
export const removeImage = ({sign, fileid}) => fetch(`http://web.image.myqcloud.com/photos/v2/10019081/activity10/0/${fileid}/del`, {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        Authorization: sign,
    },
})
.then(getJsonRes)
.then(checkJson)
.catch(error => ({
    error: error.message || 'Something bad happened'
}));
export const queryTradelist = (data) => fetchHandle('/trial/trade/query', 'post', {
    ...data,
});
export const resendTrade = id => fetchHandle('/trial/trade/resend', 'post', {
    ...id,
});
export const resendTradeUpdate = id => fetchHandle('/trial/trade/updatesync', 'post', {
    ...id,
});
