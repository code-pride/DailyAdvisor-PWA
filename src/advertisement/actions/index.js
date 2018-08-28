export const ADVERT_GET_ADVERT = '[ADVERT] GET_ADVERT';
export const getAdvert = payload => ({
    payload,
    type: ADVERT_GET_ADVERT,
});

export const ADVERT_GET_ADVERT_BY_USER = '[ADVERT] GET_ADVERT_BY_USER';
export const getAdvertByUserId = userId => ({
    userId,
    type: ADVERT_GET_ADVERT_BY_USER,
});

export const ADVERT_ADD_ADVERT = '[ADVERT] ADD_ADVERT';
export const addAdvert = payload => ({
    payload,
    type: ADVERT_ADD_ADVERT,
});
