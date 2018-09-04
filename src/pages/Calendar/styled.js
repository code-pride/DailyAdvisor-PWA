import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';

const dayWidth = 40;

export const Calendar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${dayWidth * 7}px;
`;

export const Month = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
`;

export const Days = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
`;

const eventsWithColors = [
    { event: 'trainings', color: 'red' },
    { event: 'meals', color: 'blue' },
    { event: 'meetings', color: 'yellow' },
];

const getDayColor = events => {
    const color = events.reduce((acc, event, i) => {
        const color = eventsWithColors.find(e => e.event === event).color;
        const firstValue = `${color} ${(i * 100) / events.length}%`;
        const secondValue = `${color} ${((i + 1) * 100) / events.length}%`;
        if (i === events.length - 1) {
            return acc + `${firstValue}, ${secondValue})`;
        }
        return acc + `${firstValue}, ${secondValue}, `;
    }, 'linear-gradient(to right, ');
    return color;
};

export const Day = styled.div`
    border-radius: 10px;
    height: ${dayWidth}px;
    width: ${dayWidth}px;
    background: ${props => (!_isEmpty(props.events) ? getDayColor(props.events) : 'white')};
    border: 1px solid black;
    border-top: ${props => (props.topEdge ? '1px solid black' : 'none')};
    border-left: ${props => (props.leftEdge ? '1px solid black' : 'none')};
`;
