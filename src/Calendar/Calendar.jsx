import React from 'react';
import { connect } from 'react-redux';

import * as S from './styled';
import { daysSelector, monthNameSelector, yearSelector, trainingDaysSelector } from './selectors';
import { incrementMonth, decrementMonth } from './actions';
import { data } from './data';

class Calendar extends React.Component {
    render() {
        return (
            <S.Calendar>
                <S.Month>
                    <button onClick={this.props.decrementMonth}>{'<'}</button>
                    <div>
                        {this.props.year} - {this.props.monthName}
                    </div>
                    <button onClick={this.props.incrementMonth}>{'>'}</button>
                </S.Month>
                <S.Days>
                    {this.props.days.map((day, i) => (
                        <S.Day
                            isTraining={this.props.trainingDays[day.unique]}
                            leftEdge={i % 7 === 0}
                            topEdge={i <= 6}
                            key={day.name}
                        >
                            {day.numberInMonth}
                        </S.Day>
                    ))}
                </S.Days>
            </S.Calendar>
        );
    }
}

function mapStateToProps(state) {
    return {
        year: yearSelector(state),
        days: daysSelector(state),
        monthName: monthNameSelector(state),
        trainingDays: trainingDaysSelector(state, data),
        month: state.calendar.month,
    };
}

export default connect(
    mapStateToProps,
    { incrementMonth, decrementMonth },
)(Calendar);
