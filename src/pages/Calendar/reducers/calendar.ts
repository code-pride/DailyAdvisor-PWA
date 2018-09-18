import * as moment from 'moment';
import * as actions from '../actions';

const month = moment().month();

const initialState = {
    month,
    trainings: {
        data: [],
    },
    meals: {
        data: [],
    },
    meetings: {
        data: [],
    },
    isLoading: false,
};

export function calendar(state: any = initialState, action: any): any {
    switch (action.type) {
        case actions.CALENDAR_INCREMENT_MONTH:
            return {
                ...state,
                month: state.month + 1,
            };
        case actions.CALENDAR_DECREMENT_MONTH:
            return {
                ...state,
                month: state.month - 1,
            };
        case actions.CALENDAR_FETCH_EVENTS_FULFILLED:
            return {
                ...state,
                trainings: {
                    ...state.trainings,
                    ...action.payload[0],
                },
                meals: {
                    ...state.meals,
                    ...action.payload[1],
                },
                meetings: {
                    ...state.meetings,
                    ...action.payload[2],
                },
            };
        default:
            return state;
    }
}
