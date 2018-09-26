export const CALENDAR_INCREMENT_MONTH = '[CALENDAR] INCREMENT_MONTH';
export const calendarIncrementMonth = () => ({
    type: CALENDAR_INCREMENT_MONTH,
});

export const CALENDAR_DECREMENT_MONTH = '[CALENDAR] DECREMENT_MONTH';
export const calendarDecrementMonth = () => ({
    type: CALENDAR_DECREMENT_MONTH,
});

export const CALENDAR_FETCH_EVENTS = '[CALENDAR] FETCH_EVENTS';
export const calendarFetchEvents = () => ({
    type: CALENDAR_FETCH_EVENTS,
});

export const CALENDAR_FETCH_EVENTS_FULFILLED = '[CALENDAR] FETCH_EVENTS_FULFILLED';
export const calendarFetchEventsFulfilled = payload => ({
    type: CALENDAR_FETCH_EVENTS_FULFILLED,
    payload,
});

export const CALENDAR_FETCH_EVENTS_REJECTED = '[CALENDAR] FETCH_EVENTS_REJECTED';
export const calendarFetchEventsRejected = errorMsg => ({
    type: CALENDAR_FETCH_EVENTS_REJECTED,
    error: errorMsg,
});
