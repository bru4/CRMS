import { createAction } from 'redux-actions';

export const loadList = createAction('LOAD_LIST', data => data);
export const toggleDetail = createAction('TOGGLE_DETAIL', data => data);
export const toggleCheckbox = createAction('TOGGLE_CKECKBOX', data => data);
export const exportTable = createAction('EXPORT_TABLE', data => data);
export const changeData = createAction('CHANGE_DATA', (title, type) => ({title, type}));
export const uploadResult = createAction('UPLOAD_REVIEW_RESULT', data => data);
export const passAll = createAction('REVIEW_PASS_ALL', data => data);
export const selectRows = createAction('SELECT_ROWS', (keys, records) => ({keys, records}));

