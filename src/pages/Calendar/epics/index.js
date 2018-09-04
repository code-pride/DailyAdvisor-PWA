import { combineEpics, ofType } from 'redux-observable';
import { delay, switchMap } from 'rxjs/operators';

import * as actions from '../actions';
import { calendarApi } from '../api';

export function calendarEpicFactory() {
    const fetchEventsEpic = action$ =>
        action$.pipe(
            ofType(actions.CALENDAR_FETCH_EVENTS),
            delay(500),
            switchMap(() =>
                Promise.all([
                    calendarApi.fetchTrainings(),
                    calendarApi.fetchDiets(),
                    calendarApi.fetchMeetings(),
                ])
                    .then(actions.calendarFetchEventsFulfilled)
                    .catch(actions.calendarFetchEventsRejected),
            ),
        );

    return combineEpics(fetchEventsEpic);
}
