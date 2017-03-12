import {createAction} from 'redux-actions';

export const getTrialProduct = createAction('QUERY_TRIAL_PRODUCT');
export const submitProductUpdate = createAction('SUBMIT_PRODUCT_UPDATE');
export const editProductUpdate = createAction('EDIT_PRODUCT_UPDATE');
export const productChange = createAction('PRODUCT_CHANGE');
export const getImageUrl = createAction('GET_IMAGE_URL');
export const getUploadSign = createAction('QUERY_UPLOAD_SIGN');
export const removeImageUrl = createAction('REMOVE_IMAGE_URL');

export default {
    getTrialProduct,
    submitProductUpdate,
    editProductUpdate,
    productChange,
    getImageUrl,
    getUploadSign,
    removeImageUrl,
}