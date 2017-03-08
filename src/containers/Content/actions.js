import { createAction } from 'redux-actions';

export const loadList = createAction('LOAD_LIST');
export const toggleDetail = createAction('TOGGLE_DETAIL');
//export const toggleCheckbox = createAction('TOGGLE_CKECKBOX', data => data);
export const exportTable = createAction('EXPORT_TABLE');
export const changeData = createAction('CHANGE_DATA', (title, type) => ({title, type}));
export const uploadResult = createAction('UPLOAD_REVIEW_RESULT');
export const passAll = createAction('REVIEW_PASS_ALL');
export const selectRows = createAction('SELECT_ROWS', (keys, records) => ({keys, records}));
export const changePage = createAction('CHANGE_PAGE', (title, page) => ({title, page}));

