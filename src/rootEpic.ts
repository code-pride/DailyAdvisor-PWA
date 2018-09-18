import { combineEpics } from 'redux-observable';

import { authEpicFactory } from './auth/epics';
import { calendarEpicFactory } from './pages/Calendar/epics';
import { userDataEpicFactory } from './user/epics';

export const rootEpic = combineEpics(
    authEpicFactory(),
    userDataEpicFactory(),
    calendarEpicFactory(),
);
