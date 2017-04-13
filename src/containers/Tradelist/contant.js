export const getSyncState = (text) => {
    switch (text) {
        case 0:
            return '未推送';
        case 1:
            return '推送失败';
        case 2:
            return '已推送';
        default:
            return text;
    }
}

export const getLogisticsType = (type) => {
    switch (type) {
        case 3:
            return 'ems';
        case 5:
            return '中通快递';
        case 16:
            return '天天快递';
        case 10:
            return '百世汇通';
        default:
            return type;
    }
}
