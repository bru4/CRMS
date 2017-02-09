const Mock = require('mockjs');
const fetchMock = require('fetch-mock/es5/client');

//model
let mockMemberList = () => Mock.mock({
    'total': '@natural(50,72)',
    'datalist|20':[
        {
            'truename':'@cname',
            'mobile': '@natural(10000000000,19999999999)',
            'position': '@natural(0,6)',
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
            'openid': 'o-YCKv4sM6Vd3-1ZY8abVgaUG4Q4',
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

let mockTrialList = () => Mock.mock({
    'total': 10,
    'datalist|10':[
        {
            'truename':'@cname',
            'mobile': '@natural(10000000000,19999999999)',
            'position': null,
            'createtime': '@natural(1400000000000,1582916702000)',
            'restauranttame': '小小饭吧',
            'mode': null,
            'price': null,
            'state': '@natural(0,3)',
            'reason': '@cword(5, 20)',
            'gender': null,
            'birthday': null,
            'scale': null,
            'status': '1',
            'recordid': null,
            'openid': 'o-@string(11)-@string(14)',
            'remark': null,
            'picture': null,
            'restaurantname': '@cword(3, 7)',
            'feedBacklist': null,
            'restaurantaddress': null,
            'productname': '香辣烤鱼酱',
            'receivername': '@cname',
            'receivermobile': '@natural(10000000000,19999999999)',
            'receiverdistrict': '@county(true)',
            'receiveraddress': '@cword(5, 10)',
        }
    ]
});

//response
const startFetchMock = () =>{
    fetchMock.mock(/\/crms\/api\/member\/query/, {
        body:{
            code: '1000',
            data: mockMemberList(),
            msg: '成功',
        }
    });
    fetchMock.mock(/\/crms\/api\/trial\/query/, {
        body:{
            code: '1000',
            data: mockTrialList(),
            msg: '成功',
        }
    });
}

module.exports = startFetchMock;