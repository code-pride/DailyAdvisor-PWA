import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import * as S from './styled';
import { daysSelector, monthNameSelector, yearSelector, eventsDaysSelector } from './selectors';
import { calendarIncrementMonth, calendarDecrementMonth, calendarFetchEvents } from './actions';

class Calendar extends React.Component {
    componentDidMount() {
        this.props.calendarFetchEvents();
    }

    isEvent = (unique, type) =>
        this.props.events[unique] && this.props.events[unique][type] && type;

    getEventsToDay = unique =>
        [
            this.isEvent(unique, 'trainings'),
            this.isEvent(unique, 'meals'),
            this.isEvent(unique, 'meetings'),
        ].filter(x => x);

    render() {
        return (
            <S.Calendar>
                {!this.props.isLoading ? (
                    <React.Fragment>
                        <S.Month>
                            <button onClick={this.props.calendarDecrementMonth}>{'<'}</button>
                            <div>
                                {this.props.year} - {this.props.monthName}
                            </div>
                            <button onClick={this.props.calendarIncrementMonth}>{'>'}</button>
                        </S.Month>
                        <S.Days>
                            {this.props.days.map((day, i) => (
                                <S.Day
                                    events={this.getEventsToDay(day.unique)}
                                    leftEdge={i % 7 === 0}
                                    topEdge={i <= 6}
                                    key={day.name}
                                >
                                    {day.name}
                                </S.Day>
                            ))}
                        </S.Days>
                    </React.Fragment>
                ) : (
                    <Spinner size="32px" speed="fast" />
                )}
            </S.Calendar>
        );
    }
}

function mapStateToProps(state) {
    return {
        year: yearSelector(state),
        days: daysSelector(state),
        monthName: monthNameSelector(state),
        events: eventsDaysSelector(state),
        isLoading: state.calendar.isLoading,
        month: state.calendar.month,
    };
}
export default connect(
    mapStateToProps,
    { calendarIncrementMonth, calendarDecrementMonth, calendarFetchEvents },
)(Calendar);
