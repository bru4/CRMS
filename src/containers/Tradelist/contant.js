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
