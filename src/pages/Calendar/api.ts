import { diet } from './diet';
import { meetings } from './meetings';
import { trainings } from './trainings';

const fetchTrainings = () => Promise.resolve(trainings);
const fetchDiets = () => Promise.resolve(diet);
const fetchMeetings = () => Promise.resolve(meetings);

export const calendarApi = {
    fetchTrainings,
    fetchDiets,
    fetchMeetings,
};
