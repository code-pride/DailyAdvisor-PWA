import { combineEpics, ofType } from 'redux-observable';
import { delay, switchMap } from 'rxjs/operators';

import * as actions from '../actions';
import { calendarApi } from '../api';

export function calendarEpicFactory() {
    const fetchTrainingsEpic = action$ =>
        action$.pipe(
            ofType(actions.CALENDAR_FETCH_TRAININGS),
            delay(500),
            switchMap(() =>
                calendarApi
                    .fetchTrainings()
                    .then(actions.calendarFetchTrainingsFulfilled)
                    .catch(actions.calendarFetchTrainingsRejected),
            ),
        );

    const fetchDietsEpic = action$ =>
        action$.pipe(
            ofType(actions.CALENDAR_FETCH_DIETS),
            delay(500),
            switchMap(() =>
                calendarApi
                    .fetchDiets()
                    .then(actions.calendarFetchDietsFulfilled)
                    .catch(actions.calendarFetchDietsRejected),
            ),
        );

    return combineEpics(fetchTrainingsEpic, fetchDietsEpic);
}
