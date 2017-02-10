export const initstate = {
    cur:{},              //  当前显示详情的用户信息里面分别有 index record type
    base: {
        checkbox: false,     //  确认审核窗口 是/否 显示
        detail: false,       //  是/否 显示详情页
    },
    list: {
        listtype:'10',       //  下载时区分类别
        total: 0,            //  列表的总长度
        list: [],            //  用户数据的列表
    }
}