import { createAction } from 'redux-actions';

export const showDetail = createAction('SHOW_DETAIL', data => data);
export const exportTable = createAction('EXPORT_TABLE', data => data);
export const changeData = createAction('CHANGE_DATA', (title, val) => ({title, val}));
export const pass = createAction('REVIEW_PASS', data => data);
export const reject = createAction('REVIEW_REJECT', data => data);
export const passAll = createAction('REVIEW_PASS_ALL', data => data);
