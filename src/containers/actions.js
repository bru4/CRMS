import { createAction } from 'redux-actions';

export const sendReq = createAction('POSTS_REQUEST');
export const reqSucces = createAction('POSTS_SUCCESS', data => data);
export const reqFailure = createAction('POSTS_FAILURE');

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
//const TRIAL = createRequestTypes('TRIAL')

export const list = {
    request: createAction(LIST.REQUEST, type => type),
    success: createAction(LIST.SUCCESS, (title, res) => ({ title, res })),
    failure: createAction(LIST.FAILURE, (title, error) => ({ title, error })),
}

export const resetErrorMessage = createAction('RESET_ERROR_MESSAGE')