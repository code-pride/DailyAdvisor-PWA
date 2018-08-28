import { combineEpics } from 'redux-observable';

import { authEpicFactory } from './auth/epics';
import { userDataEpicFactory } from './user/epics';
import { calendarEpicFactory } from './pages/Calendar/epics';
import { advertDataEpicFactory } from './advertisement/epics';

export const rootEpic = combineEpics(
    authEpicFactory(),
    userDataEpicFactory(),
    calendarEpicFactory(),
    advertDataEpicFactory(),
);
