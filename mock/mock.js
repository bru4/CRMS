const Mock = require('mockjs');
const fetchMock = require('fetch-mock/es5/client');

//model
const mockMemberList = () => Mock.mock({
    'total': '@natural(50,72)',
    'datalist|20':[
        {
            'truename':'@cname',
            'mobile': '@natural(10000000000,19999999999)',
            'position': '@natural(0,4)',
            'createtime': '@natural(1400000000000,1582916702000)',
            'restauranttame': '小小饭吧',
            'mode': '@natural(0,20)',
            'price': '@natural(0,3)',
            'state': '@natural(0,3)',
            'reason': null,
            'gender': null,
            'birthday': null,
            'scale': null,
            'status': null,
            'recordid': null,
            'openid': 'o-@string(11)-@string(14)',
            'remark': null,
            'picture': 'http://cs.udianhuo.com/pic/o-YCKv4sM6Vd3-1ZY8abVgaUG4Q4shopnamephotos0.jpeg;http://cs.udianhuo.com/pic/o-YCKv4sM6Vd3-1ZY8abVgaUG4Q4kitchenphotos0.jpeg;http://cs.udianhuo.com/pic/o-YCKv4sM6Vd3-1ZY8abVgaUG4Q4cookbookphotos0.jpeg;',
            'restaurantname': '@cword(3, 7)',
            'feedBacklist': null,
            'restaurantaddress': '@county(true),@cword(3, 7)',
            'productname': null,
            'receivername': null,
            'receivermobile': null,
            'receiverdistrict': null,
            'receiveraddress': null,
        }
    ]
});

const mockTrialList = () => Mock.mock({
    'total': '@natural(50,72)',
    'datalist|20':[
        {
            'state': '@natural(0,2)',
            'reason': '@cword(5, 20)',
            'position': null,
            'mode': null,
            'status': '@natural(1,4)',
            'restaurantname': '@cword(3, 7)',
            'feedBacklist': null,
            'restaurantaddress': null,
            'productname': '香辣烤鱼酱',
            'receivername': '@cname',
            'receivermobile': '@natural(10000000000,19999999999)',
            'receiverdistrict': '@county(true)',
            'receiveraddress': '@cword(5, 10)',
            'recordid': '@natural(10000,19999)',
            'createtime': '@natural(1400000000000,1582916702000)',
            'gender': null,
            'birthday': null,
            'scale': null,
            'openid': 'o-@string(11)-@string(14)',
            'mobile': '@natural(10000000000,19999999999)',
            'price': null,
            'remark': null,
            'picture': null,
            'truename':'@cname',
        }
    ]
});

const mockFeedbackList = () => Mock.mock({
    'total': '@natural(50,72)',
    'datalist|20':[
        {
            'state': null,
            'reason': null,
            'mode': null,
            'position': null,
            'status': '@natural(1,4)',
            'restaurantaddress': null,
            'restaurantname': '@cword(3, 7)',
            'feedBacklist': [{
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '您用有点火试用调料制作的菜品是什么',
                'answer': '@cword(3, 7)',
                'questionId': 0,
            }, {
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '您用有点火调料的用法及用量',
                'answer': '@cword(3, 7)',
                'questionId': 1,
            }, {
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '您觉得有点火产品味道如何',
                'answer': '@string("number", 1)',
                'questionId': 2,
            }, {
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '味道的原因',
                'answer': '@cword(3, 7)',
                'questionId': 3,
            }, {
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '是否愿意购买',
                'answer': '@string("number", 1)',
                'questionId': 4,
            }, {
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '购买原因',
                'answer': '@cword(3, 7)',
                'questionId': 5,
            },{
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '规格大小包装形式评价',
                'answer': '@string("number", 1)',
                'questionId': 6,
            }, {
                'createtime': null,
                'fid': null,
                'recordId': null,
                'question': '包装原因',
                'answer': '@cword(3, 7)',
                'questionId': 7,
            }],
            'productname': '香辣烤鱼酱',
            'receivername': null,
            'receivermobile': null,
            'receiverdistrict': null,
            'receiveraddress': null,
            'createtime': '@natural(1400000000000,1582916702000)',
            'scale': null,
            'gender': null,
            'birthday': null,
            'recordid': '@natural(10000,19999)',
            'openid': 'o-@string(11)-@string(14)',
            'mobile': '@natural(10000000000,19999999999)',
            'price': null,
            'remark': null,
            'picture': null,
            'truename':'@cname',
        }
    ]
});
const getPoint = () => Mock.mock('@integer(50, 1000)');
const mockTrialProduct = () => Mock.mock({
    'product|20': [{
        'name': '@cword(3),@cword(5)',
        'code': '@string("number", 6)',
        'img': Mock.Random.image('224x224'),
        'isused': '@natural(0, 1)',
    }]
})
//response
const startFetchMock = () =>{
    fetchMock.mock(/\/trial\/queryproduct/, {
        body: {
            'code': '1000',
            'msg': 'success',
            'data': mockTrialProduct(),
        }
    });
    fetchMock.mock(/\/member\/querypoints/, {
        body: {
            code: '1000',
            msg: '成功',
            data: {
                points: getPoint()
            }
        }
    });
    fetchMock.mock(/\/member\/query/, {
        body: {
            code: '1000',
            data: mockMemberList(),
            msg: '成功',
        }
    });
    fetchMock.mock(/\/trial\/query/, {
        body: {
            code: '1000',
            data: mockTrialList(),
            msg: '成功',
        }
    });
    fetchMock.mock(/\/feedback\/query/, {
        body: {
            code: '1000',
            data: mockFeedbackList(),
            msg: '成功',
        }
    });
    fetchMock.mock(/\/(\w+)\/uploadresult/, {
        body: {
            code: '1000',
            msg: '成功',
        }
    });
    fetchMock.mock(/\/center\/addcoupon/, {
        body: {
            code: '1000',
            msg: '成功',
        }
    });
    fetchMock.mock(/\/youzan\/getcoupons/, {
        body: {
            code: '1000',
            msg: '成功',
            data: [{
                'total': 1000,
                'stat_fetch_num': 1,
                'at_least': '200.00',
                'is_at_least': 1,
                'coupon_type': 'PROMOCARD',
                'start_at': '2017-01-09 09:43:49',
                'stat_fetch_user_num': 1,
                'quota': 0,
                'title': '提交反馈成功',
                'stat_use_num': 0,
                'stock': 999,
                'created': '2017-01-09 09:43:53',
                'description': '',
                'value': '50.00',
                'is_sync_weixin': 0,
                'fetch_url': 'https://h5.koudaitong.com/v2/ump/promocard/fetch?alias=an84iagf',
                'is_share': 1,
                'need_user_level': 0,
                'status': 0,
                'user_level_name': '',
                'group_id': '1655008',
                'value_random_to': '0.00',
                'is_forbid_preference': 0,
                'expire_notice': 0,
                'weixin_card_id': '',
                'end_at': '2018-01-09 09:42:14',
                'range_type': 'ALL',
                'is_random': 0
            }, {
                'total': 1000,
                'stat_fetch_num': 8,
                'at_least': '50.00',
                'is_at_least': 1,
                'coupon_type': 'PROMOCARD',
                'start_at': '2017-01-09 09:41:41',
                'stat_fetch_user_num': 1,
                'quota': 0,
                'title': '注册送券',
                'stat_use_num': 0,
                'stock': 992,
                'created': '2017-01-09 09:42:08',
                'description': '',
                'value': '30.00',
                'is_sync_weixin': 0,
                'fetch_url': 'https://h5.koudaitong.com/v2/ump/promocard/fetch?alias=15ffsprxp',
                'is_share': 0,
                'need_user_level': 0,
                'status': 0,
                'user_level_name': '',
                'group_id': '1655004',
                'value_random_to': '0.00',
                'is_forbid_preference': 0,
                'expire_notice': 0,
                'weixin_card_id': '',
                'end_at': '2018-01-09 09:41:27',
                'range_type': 'ALL',
                'is_random': 0
            }]
        }
    });
    fetchMock.mock(/\/member\/addpoints/, {
        body: {
            'code': '1000',
            'msg': 'success',
            'data': {
                'totalpoints': 9999
            }
        }
    });
    fetchMock.mock(/\/member\/takecoupon/, {
        body: {
            'code': '1000',
            'msg': 'success',
        }
    });
}

module.exports = startFetchMock;