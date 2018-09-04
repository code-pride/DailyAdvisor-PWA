import { createSelector } from 'reselect';
import moment from 'moment';
import _range from 'lodash/range';
import _defaultTo from 'lodash/defaultTo';
import _isEmpty from 'lodash/isEmpty';
import _last from 'lodash/last';
import _merge from 'lodash/merge';

export const yearSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .year(),
);

export const startOfMonthSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .startOf('month')
            .dayOfYear(),
);

export const endOfMonthSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .endOf('month')
            .dayOfYear(),
);

export const daysSelector = createSelector(
    state => state.calendar.month,
    startOfMonthSelector,
    endOfMonthSelector,
    (month, startOfMonth, endOfMonth) => {
        return _range(startOfMonth, endOfMonth + 1).map(day => ({
            name: moment()
                .month(month)
                .dayOfYear(day)
                .format('D dddd'),
            numberInMonth: moment()
                .month(month)
                .dayOfYear(day)
                .format('D'),
            unique: `${month}${day}`,
            day,
        }));
    },
);

export const monthNameSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .format('MMMM'),
);

const dayWeekSelectors = createSelector(
    state => state.calendar.month,
    startOfMonthSelector,
    endOfMonthSelector,
    (month, startOfMonth, endOfMonth) =>
        _range(startOfMonth, endOfMonth + 1).map(day => ({
            ofYear: day,
            ofWeek: moment()
                .month(month)
                .dayOfYear(day)
                .weekday(),
        })),
);

const mergeTrainings = (...allEvents) =>
    allEvents.slice(0, allEvents.length - 1).reduce((events, eventsByRecurringType) => {
        return {
            ...events,
            ...Object.entries(eventsByRecurringType).reduce((eventsInDay, [key, value]) => {
                const defaultEventsInDay = _defaultTo(eventsInDay[key], {});
                const defaultEvents = _defaultTo(events[key], {});
                const eventType = _last(allEvents);
                return {
                    ...eventsInDay,
                    [key]: {
                        ...defaultEventsInDay,
                        ...defaultEvents,
                        [eventType]: [
                            ..._defaultTo(defaultEventsInDay[eventType], []),
                            ..._defaultTo(defaultEvents[eventType], []),
                            ...value,
                        ],
                    },
                };
            }, {}),
        };
    }, {});

const filterByRecurringName = (recurringName, date) => t =>
    t.event.recurringPattern.recurringType.recurringName === recurringName &&
    date.isBetween(t.event.startDate, t.event.endDate, 'day', '[]');

const calculateDailyEvents = (events, month, day) => {
    return events.reduce((acc, t) => {
        const key = `${month}${day}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        return {
            ...acc,
            [key]: [...acc[key], t],
        };
    }, {});
};

const calculateWeeklyEvents = (events, month, day) => {
    const matchedEvents = events.filter(t => t.event.recurringPattern.day_of_week === day.ofWeek);

    return !_isEmpty(matchedEvents)
        ? {
              [`${month}${day.ofYear}`]: matchedEvents,
          }
        : {};
};

const calculateMonthlyEvents = (events, month, day, days) => {
    const matchedEvents = events.filter(t => {
        const start = moment(t.event.startDate).dayOfYear();
        const matchedDay = days
            .filter(day => day.ofYear >= start)
            .find(d => t.event.recurringPattern.day_of_week === d.ofWeek);

        return matchedDay.ofYear === day.ofYear;
    });

    return !_isEmpty(matchedEvents)
        ? {
              [`${month}${day.ofYear}`]: matchedEvents,
          }
        : {};
};

const calculateEventsByDay = (data, month, days) => {
    return days.reduce((acc, day) => {
        const date = moment()
            .month(month)
            .dayOfYear(day.ofYear);

        const isNotInRange = data.every(
            t => !date.isBetween(t.event.startDate, t.event.endDate, 'day', '[]'),
        );

        if (isNotInRange) {
            return acc;
        }

        const daily = data.filter(filterByRecurringName('daily', date));
        const dailyEvents = calculateDailyEvents(daily, month, day.ofYear);

        const weekly = data.filter(filterByRecurringName('weekly', date));
        const weeklyEvents = calculateWeeklyEvents(weekly, month, day);

        const monthly = data.filter(filterByRecurringName('monthly', date));
        const monthlyEvents = calculateMonthlyEvents(monthly, month, day, days);

        return {
            ...acc,
            daily: { ..._defaultTo(acc.daily, {}), ...dailyEvents },
            weekly: { ..._defaultTo(acc.weekly, {}), ...weeklyEvents },
            monthly: { ..._defaultTo(acc.monthly, {}), ...monthlyEvents },
        };
    }, {});
};

export const trainingDaysSelector = createSelector(
    state => state.calendar.trainingsData,
    state => state.calendar.month,
    dayWeekSelectors,
    (data, month, days) => {
        const event = 'trainings';
        const trainingDays = calculateEventsByDay(data[event], month, days);

        return mergeTrainings(...Object.values(trainingDays), event);
    },
);

export const dietsDaysSelector = createSelector(
    state => state.calendar.dietsData,
    state => state.calendar.month,
    dayWeekSelectors,
    (data, month, days) => {
        const event = 'meals';
        const dietsDays = calculateEventsByDay(data[event], month, days);

        return mergeTrainings(...Object.values(dietsDays), event);
    },
);

export const eventsDaysSelector = createSelector(
    trainingDaysSelector,
    dietsDaysSelector,
    (trainings, diets) => _merge({}, trainings, diets),
);
