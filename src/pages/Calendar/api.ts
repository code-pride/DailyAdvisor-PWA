import { trainings } from './trainings';
import { diet } from './diet';
import { meetings } from './meetings';

const fetchTrainings = () => Promise.resolve(trainings);
const fetchDiets = () => Promise.resolve(diet);
const fetchMeetings = () => Promise.resolve(meetings);

export const calendarApi = {
    fetchTrainings,
    fetchDiets,
    fetchMeetings,
};
