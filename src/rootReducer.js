import { combineReducers } from 'redux';

import { user } from './user/reducers/';
import { auth } from './auth/reducers';
import { advertisement } from './advertisement/reducers';

import { calendar } from 'pages/Calendar/reducers/calendar';

export const rootReducer = combineReducers({
    auth,
    user,
    calendar,
    advertisement,
});
