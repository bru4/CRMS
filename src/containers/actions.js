import {createAction} from 'redux-actions';

export const sendReq = createAction('POSTS_REQUEST');
export const reqSucces = createAction('POSTS_SUCCESS');
export const reqFailure = createAction('POSTS_FAILURE');
