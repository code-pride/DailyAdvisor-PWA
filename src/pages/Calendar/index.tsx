import _defaults from 'lodash/defaults';
import * as React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import { calendarDecrementMonth, calendarFetchEvents, calendarIncrementMonth } from './actions';
import { daysSelector, eventsDaysSelector, monthNameSelector, yearSelector } from './selectors';
import * as S from './styled';

class Calendar extends React.Component<any, any> {
    public componentDidMount(): void {
        this.props.calendarFetchEvents();
    }

    public render(): JSX.Element {
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
                                    events={Object.keys(_defaults(this.props.events[day.unique]))}
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

function mapStateToProps(state: any): any {
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
