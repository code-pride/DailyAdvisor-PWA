import { http } from 'utils/http';

const registerUser = user => http.post('/users/registration', user);
const registerUserConfirm = token => http.post('/users/registrationConfirm', { token });
const loginUser = user => http.post('/users/login', user);
const logoutUser = () => http.post('/users/logout');
const getUserProfile = () => http.get('/users/getUserProfile');
const getCsrf = () => http.get('/users/csrf');

export const authApi = {
    getCsrf,
    getUserProfile,
    loginUser,
    logoutUser,
    registerUser,
    registerUserConfirm,
};
