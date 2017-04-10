import { fork, take, put, call } from 'redux-saga/effects'
import * as actions from './actions'
import { fetchList, fetchTable, uploadresult, addCoupon, queryPoint, queryCoupon, addPoint, takeCoupon, queryUser, queryProduct, updateProduct, uploadSign, addProduct, removeImage, queryTradelist } from './api'
import { message } from 'antd';

const { list, tabel, review, resetErrorMessage, fetchUserPoint, fetchCoupon } = actions;

/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

/**
 * 请求后台列表数据接口的处理函数
 * 通过call api中的fetchList, 用来查询服务器上query接口的实现查不同模块的列表数据功能
 * @param {string} title   表示目前查询的模块 目前有member trial feedback
 * @param {string} type    表示查询类型 目前有 1 待审核 2 审核通过 3 审核不通过 10 全部
 * @param {string} page    当查询全部的时候 表示查询页数 没有的话就不传
 */
function* loadList(title, type, page){
    if(title && type){
        let entity = {title, type, page};
        const { json, error} = yield call(fetchList, entity);
        if (json) {
            switch(json.code){
                case '1000':
                    yield put(list.success(entity, json.data))
                    return;
                default:
                    message.error(json.msg)
                    yield put(list.failure(entity, json.msg))
                    return;
            }
        } else {
            message.error('网络错误')
            yield put(list.failure(entity, error))
        }
    }
}
/**
 * 获取下载表格链接
 * 通过call api中的 fetchTable, 获取用户需要的
 * @param {object} data   分别有属性 {str} title 表示导出哪个模块, {array} timeRange 表示导出数据的时间范围 第一个为startday 第二个为endday 都为moment类型数据, {str} listtype 标识下载类型 3 未认证, 2 已认证 ，10 全部
 */
function* fetchTableUrl(data){
    const { json, error} = yield call(fetchTable, data);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put(tabel.success(json));
        location.href = json.data;
    } else {
        message.error(json.msg)
        yield put(tabel.failure(json.msg));
    }
}
/**
 * 上传审核结果
 * 通过call api中的 uploadresult, 提交审核用户资料和结果
 * @param {objec} data 分别有 index 数据在列表中的index, record 用户数据, result 审核结果, type 上传结果的模块
 */
function* uploadReviewResult(data){
    const { json, error} = yield call(uploadresult, data);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put(review.success({
            type: data.type,
            index: data.index,
        }))
    } else {
        message.error(json.msg)
        yield put(review.failure(error||json))
    }
}
/**
 * 添加优惠券信息
 * 通过call api中的addCoupon 将商城设置的优惠券设置到本地服务器自动发券
 * @param {object} {type, name, id} type 为发券的类型 name 为发券的名称 id为优惠券编号
 */
function* addCouponHandle({type, name, id}) {
    const { json, error} = yield call(addCoupon, type, name, id);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        message.success('添加成功');
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
/**
 * 查询用户积分
 * 如果传过来的是string 就是根据openid查询用户积分 如果是object 就是为用户添加积分
 * @param {string/object} entity 两种格式：
 * string为openid
 * object为{ openid, point, reason, mobile, name}
 */
function* pointHandle(entity) {
    if(typeof entity ==='string'){
        const { json, error} = yield call(queryPoint, entity);
        if(error) {
            message.error(error);
            yield put(resetErrorMessage(error));
        } else if (json.code === '1000') {
            yield put(fetchUserPoint(json.data.points));
        } else {
            //message.error(json.msg)
            yield put(resetErrorMessage(error||json))
        }
    }
    if(typeof entity === 'object'){
        const { json, error} = yield call(addPoint, entity);
        if(error) {
            message.error(error);
            yield put(resetErrorMessage(error));
        } else if (json.code === '1000') {
            message.success('添加成功');
            yield put(fetchUserPoint(json.data.totalpoints));
        } else {
            message.error(json.msg)
            yield put(resetErrorMessage(error||json))
        }
    }
}
/**
 * 查询优惠券信息
 * 在载入时和第一次查询用户信息一起查询,获取目前所有还在有效期内的优惠券
 */
function* loadCoupon() {
    const { json, error} = yield call(queryCoupon);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put(fetchCoupon(json.data));
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
/**
 * 为用户发优惠券
 * 通过takeCoupon为用户添加某个还在有效期内的优惠券
 * @param {object} entity 包含两个属性 openid 为用户ID groupid 为优惠券ID
 */
function* takeCouponHandle(entity) {
    const { json, error} = yield call(takeCoupon, entity);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        message.success('添加成功');
        //yield put(fetchCoupon(json.data));
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
/**
 * 通过手机号查找用户
 * 通过queryUser查询到用户 然后将信息更新至content中的userlist显示
 * @param {string} mobile 11位电话号码
 */
function* queryUserHandle(mobile) {
    const { json, error} = yield call(queryUser, mobile);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put(list.success({title:'member', type:10}, json.data));
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
/**
 * 查询目前所有的试用产品
 * 通过loadProduct 查询试用产品的信息 然后显示
 */
function* loadProduct() {
    const { json, error} = yield call(queryProduct);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put({type:'GET_TRIAL_PRODUCT', payload: json.data});
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json));
    }
}
/**
 * 添加/修改试用商品
 * 当传入的type为update时 为根据传入的code进行修改 当为add的时候为添加
 * @param {any} data 包含type name产品名称 code产品编码 picture产品图片
 */
function* updatePorductHandle(data) {
    const { json, error} = data.type === 'update' ? yield call(updateProduct, data) : yield call(addProduct, data);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        //yield put({type:'GET_TRIAL_PRODUCT', payload: json.data});
        message.success(data.type === 'update'?'修改成功':'添加成功');
        yield put({type:'GET_PRODUCT_CHANGE', payload: data});
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json));
    }
}
/**
 * 获取万象优图上传sign
 * 只有上传是有效 可上传多次
 */
function* wxytSignHandle() {
    const { json, error} = yield call(uploadSign);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put({type:'GET_UPLOAD_SIGN', payload: json.data});
    } else {
        message.error(json.msg);
        yield put(resetErrorMessage(error||json));
    }
}
/**
 * 删除万象优图上所存图片
 * 当产品修改图片时 先获取删除图片的sign 再访问万象优图通过sign删除图片
 * @param {object} entity 包含type 区分上传 查询 删除 下载 fileid 为指定的文件
 */
function* imageHandle(entity) {
    const { json, error} = yield call(uploadSign, entity);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if(json.code ===  '1000') {
        const sign = json.data.sign;
        console.log(sign, entity)
        const data = yield call(removeImage, {
            sign,
            fileid: entity.fileid
        });
        console.log(data);
        if(data.error){
            message.error(data.error)
            yield put(resetErrorMessage(data.error));
        } else if (data.json.code === 0) {
            //yield put({type:'GET_TRIAL_PRODUCT', payload: json.data});
            yield put({type:'REMOVE_IMAGE_SUCCESS', payload: data.json.data});
        } else {
            message.error(data.json.msg)
            yield put(resetErrorMessage(data.json.msg));
        }
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json));
    }
}
/**
 * 获取推送记录表
 * 根据传入的参数获取订单推送数据 可根据订单状态或者用户手机查询 查询总数及成功列表时 需要分页
 * @param {any} data type: 推送失败 1 推送成功 2 全部推送 10; mobile: str;[currentpage: int; pagesize: int;]
 */
function* loadTradelist(data) {
    const { json, error} = yield call(queryTradelist, data);
    if(error) {
        message.error(error);
        yield put(resetErrorMessage(error));
    } else if (json.code === '1000') {
        yield put({type:'GET_TRADE_LIST', payload: json.data});
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json));
    }
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
function* watchRouterFetch() {
    while (true) {
        yield take('@@router/LOCATION_CHANGE');
        yield put({type: 'REMOVE_USERLIST'})
    }
}
function* watchListFetch() {
    let i = 0;
    while (true) {
        const action = yield take('LOAD_LIST');
        const { title, subtitle, ...other } = action.payload;
        yield put(list.request());
        switch (subtitle) {
            case 'product':
                yield fork(loadProduct);
                break;
            case 'trade':
                const { type, mobile, ...pagination } = other;
                yield fork(loadTradelist, {
                    type: type ? type : null,
                    mobile: mobile ? mobile : null,
                    ...pagination,
                });
                break;
            default:
                let datatype = subtitle.includes('all') ? 10 : 1;
                yield fork(loadList, title, datatype);
                break;
        }
        if(i === 0) {
            yield fork(loadCoupon);
            i++;
        }
    }
}
function* watchListChange() {
    while (true) {
        const action = yield take('CHANGE_DATA');
        yield fork(loadList, action.payload.title, action.payload.type);
    }
}
function* watchPageChange(){
    while (true) {
        const action = yield take('CHANGE_PAGE');
        yield fork(loadList, action.payload.title, 10, action.payload.page);
    }
}
function* watchExportTalbel(){
    while(true) {
        const action = yield take('EXPORT_TABLE');
        yield fork(fetchTableUrl, action.payload);
    }
}
function* watchReviewReq(){
    while(true) {
        const req = yield take('UPLOAD_REVIEW_RESULT');
        yield fork(uploadReviewResult, req.payload);
    }
}
function* watchAddCoupon(){
    while(true) {
        const action = yield take('ADD_COUPON');
        yield fork(addCouponHandle, action.payload);
    }
}
function* watchUserPoint(){
    while(true){
        const action = yield take('TOGGLE_DETAIL');
        if(action.payload){
            yield fork(pointHandle, action.payload.record.openid)
        }
    }
}
function* watchPointAdd(){
    while(true){
        const action = yield take('ADD_POINT');
        if(action.payload){
            yield fork(pointHandle, action.payload)
        }
    }
}
function* watchTakeCoupon(){
    while(true) {
        const action = yield take('TAKE_COUPON');
        yield fork(takeCouponHandle, action.payload);
    }
}
function* watchQueryUser(){
    while(true) {
        const action = yield take('QUERY_USER_MOBILE');
        yield fork(queryUserHandle, action.payload);
    }
}
function* watchPorductUpdate(){
    while(true) {
        const action = yield take('SUBMIT_PRODUCT_UPDATE');
        yield fork(updatePorductHandle, action.payload);
    }
}
function* watchWxytSign(){
    while(true) {
        yield take('QUERY_UPLOAD_SIGN');
        yield fork(wxytSignHandle);
    }
}
function* watchImageDel(){
    let lastimg = '';
    while(true) {
        const action = yield take('REMOVE_IMAGE_URL');
        let arr = action.payload.url.split('/');
        let fileid = arr[arr.length-1];
        if(fileid !== lastimg) {
            const entity = {
                type: 'del',
                fileid: fileid,
            }
            yield fork(imageHandle, entity);
            lastimg = fileid;
        }
    }
}
/******************************************************************************/
export default function* root() {
    yield [
        fork(watchRouterFetch),
        fork(watchListChange),
        fork(watchPageChange),
        fork(watchExportTalbel),
        fork(watchListFetch),
        fork(watchReviewReq),
        fork(watchAddCoupon),
        fork(watchUserPoint),
        fork(watchPointAdd),
        fork(watchTakeCoupon),
        fork(watchQueryUser),
        fork(watchPorductUpdate),
        fork(watchWxytSign),
        fork(watchImageDel),
    ]
}