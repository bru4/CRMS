export const profession = [{
    label: '厨师长',
    value: 0
}, {
    label: '普通厨师',
    value: 1
}, {
    label: '餐厅老板',
    value: 2
}, {
    label: '餐厅采购',
    value: 3
}, {
    label: '调味品经销商/批发商',
    value: 4
}, {
    label: '其他(餐饮从业者、美食爱好者)',
    value: 9
}];
export const shoptype = [{
    label: '中餐店',
    value: 0
}, {
    label: '面馆',
    value: 1
}, {
    label: '炒饭/盖浇饭',
    value: 2
}, {
    label: '粉店（米粉/酸辣粉）',
    value: 3
}, {
    label: '土豆粉店',
    value: 4
}, {
    label: '麻辣烫店',
    value: 5
}, {
    label: '熟食（凉菜卤菜店）',
    value: 6
}, {
    label: '烤鱼店',
    value: 7
}, {
    label: '冒菜店',
    value: 8
}, {
    label: '汤锅店',
    value: 9
}, {
    label: '热锅串串店',
    value: 10
}, {
    label: '冷锅串串店',
    value: 11
}, {
    label: '川渝火锅店',
    value: 12
}, {
    label: '北方火锅店',
    value: 13
}, {
    label: '小涮锅店',
    value: 14
}, {
    label: '特色风味火锅店（鱼、鸡、虾火锅）',
    value: 15
}, {
    label: '烧烤/烤肉店',
    value: 16
}, {
    label: '麻辣香锅店',
    value: 17
}, {
    label: '干锅店',
    value: 18
}, {
    label: '包子/早点店',
    value: 19
}, {
    label: '炒龙虾店',
    value: 20
}];
export const averagespend = [{
    label: '0-20',
    value: 0
}, {
    label: '20-50',
    value: 1
}, {
    label: '50-80',
    value: 2
}, {
    label: '80以上',
    value: 3
}];
export const getState = text => {
    switch (text) {
        case 0:
            return '未提交';
        case 1:
            return '待审核';
        case 2:
            return '已认证';
        case 3:
            return '认证失败';
        default:
            return text;
    }
}
export const getStatus = text => {
    switch (text) {
        case 0:
            return '试用待审核';
        case 1:
            return '申请不通过';
        case 2:
            return '反馈未提交';
        case 3:
            return '反馈审批中';
        case 4:
            return '反馈不通过';
        case 5:
            return '反馈通过';
    }
}
export const getTrueAnswer = text => {
    switch (text) {
        case '0':
            return '满意';
        case '1':
            return '一般';
        case '2':
            return '不满意';
    }
}