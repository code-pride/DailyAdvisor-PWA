import { createSelector } from "reselect";
import moment from "moment";
import _range from "lodash/range";

import { data } from "../data";

export const yearSelector = createSelector(
  state => state.calendar.month,
  month =>
    moment()
      .month(month)
      .year()
);

export const startOfMonthSelector = createSelector(
  state => state.calendar.month,
  month =>
    moment()
      .month(month)
      .startOf("month")
      .dayOfYear()
);

export const endOfMonthSelector = createSelector(
  state => state.calendar.month,
  month =>
    moment()
      .month(month)
      .endOf("month")
      .dayOfYear()
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
        .format("D dddd"),
      unique: `${month}${day}`,
      day
    }));
  }
);

export const monthNameSelector = createSelector(
  state => state.calendar.month,
  month =>
    moment()
      .month(month)
      .format("MMMM")
);

export const trainingDaysSelector = createSelector(
  state => state.calendar.month,
  startOfMonthSelector,
  endOfMonthSelector,
  (month, startOfMonth, endOfMonth) => {
    return _range(startOfMonth, endOfMonth + 1).reduce((acc, day) => {
      const pastDayWithoutTraining = data.trainings.every(
        training =>
          moment(training.event.startDate).unix() >
          moment()
            .month(month)
            .dayOfYear(day)
            .unix()
      );

      if (pastDayWithoutTraining) {
        return acc;
      }

      const dayOfWeek = moment()
        .month(month)
        .dayOfYear(day)
        .weekday();

      const trainings = data.trainings.map(training => ({
        dayOfWeek: training.event.recurringPattern.day_of_week,
        trainText: training.trainText,
        endDate: training.event.endDate
      }));

      const training = trainings.find(e => e.dayOfWeek === dayOfWeek);

      if (
        training &&
        moment()
          .month(month)
          .dayOfYear(day)
          .unix() < moment(training.endDate).unix()
      ) {
        return [...acc, `${month}${day}`];
      }
      return acc;
    }, []);
  }
);
