import {createAction} from 'redux-actions';

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`
        return acc
    }, {})
}
const LIST = createRequestTypes('LIST')
const TABLE = createRequestTypes('TABLE')
const REVIEW = createRequestTypes('REVIEW')
//const TRIAL = createRequestTypes('TRIAL')

export const list = {
    request: createAction(LIST.REQUEST, type => type),
    success: createAction(LIST.SUCCESS, (title, res) => ({title, res})),
    failure: createAction(LIST.FAILURE, (title, error) => ({title, error}))
}
export const tabel = {
    request: createAction(TABLE.REQUEST, type => type),
    success: createAction(TABLE.SUCCESS, res => (res.data)),
    failure: createAction(TABLE.FAILURE, error => ({error}))
}
export const review = {
    request: createAction(REVIEW.REQUEST, type => type),
    success: createAction(REVIEW.SUCCESS, result => result),
    failure: createAction(REVIEW.FAILURE, error => ({error}))
}
export const resetErrorMessage = createAction('RESET_ERROR_MESSAGE');
export const fetchErrorMessage = createAction('FETCH_ERROR_MESSAGE');
export const fetchUserPoint = createAction('FETCH_USER_POINT');
export const fetchCoupon = createAction('FETCH_COUPON');