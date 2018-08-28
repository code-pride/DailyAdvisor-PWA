import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import * as actions from '../actions';

// this is mocked one api, replace with real later
import { advertApi } from '../mockedApi';

// real api
// import { userApi } from '../api';

export function advertDataEpicFactory() {
    const getAllAdvertEpic = action$ =>
        action$.pipe(
            ofType(actions.ADVERT_GET_ALL_ADVERTS),
            switchMap(action =>
                advertApi
                    .getAllAdverts()
                    .then(actions.getAllAdvertsFulfilled)
                    .catch(actions.getAllAdvertsRejected),
            ),
        );

    const getAdvertByIdEpic = action$ =>
        action$.pipe(
            ofType(actions.ADVERT_GET_ADVERT_BY_USER),
            switchMap(action =>
                advertApi
                    .getAdvertByUserId(action.userId)
                    .then(res => console.log(res))
                    .catch(error => console.log(error)),
            ),
        );

    const getAdvert = action$ =>
        action$.pipe(
            ofType(actions.ADVERT_GET_ADVERT),
            switchMap(action =>
                advertApi
                    .getAdvert()
                    .then(actions.getAdvertFulfilled)
                    .catch(actions.getAdvertRejected),
            ),
        );

    const addAdvert = action$ =>
        action$.pipe(
            ofType(actions.ADVERT_ADD_ADVERT),
            switchMap(action =>
                advertApi
                    .addAdvert(action.payload)
                    .then(res => console.log(res))
                    .catch(error => console.log(error)),
            ),
        );

    return combineEpics(getAllAdvertEpic, getAdvert, getAdvertByIdEpic, addAdvert);
}
