import moment from 'moment';
import * as actions from '../actions';

const month = moment().month();

const initialState = {
    month,
    trainingsData: {
        trainings: [],
    },
    dietsData: {
        meals: [],
    },
    isLoading: false,
};

export function calendar(state = initialState, action) {
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
        case actions.CALENDAR_FETCH_TRAININGS_FULFILLED:
            return {
                ...state,
                trainingsData: action.payload,
            };
        case actions.CALENDAR_FETCH_DIETS_FULFILLED:
            return {
                ...state,
                dietsData: action.payload,
            };
        default:
            return state;
    }
}
