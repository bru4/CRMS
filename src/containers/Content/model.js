export const initstate = {
    cur:{
        points: '',        //  用户的积分
        index: -1,         //  用户在列表中的 index 或 only key 值
        record: {},        //  用户信息对象
        type: '',          //  用户数据所在的模块 member / trial / feedback
    },
    base: {
        //checkbox: false,     //  确认审核窗口 是/否 显示
        detail: false,     //  是/否 显示详情页
        coupon: [],        //  目前在有效期的优惠券
    },
    list: {
        fetching: false,   //  是否请求中
        listtype:'10',     //  下载时区分类别
        total: 0,          //  列表的总长度
        list: [],          //  用户数据的列表
    },
    selected: {
        keys:[],           //  选择时的key的属性
        records:[],        //  被选数据的列表
    },
}