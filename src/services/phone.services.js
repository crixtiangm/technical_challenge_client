import _api from './api';


export const listPhonesEp = () => _api.get('/phones');

export const detailPhoneEp = (dataId) => _api.get(`/phone/${dataId}`);