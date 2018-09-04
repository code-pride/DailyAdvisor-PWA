import { trainings } from './trainings';
import { diet } from './diet';

const fetchTrainings = () => Promise.resolve(trainings);
const fetchDiets = () => Promise.resolve(diet);

export const calendarApi = {
    fetchTrainings,
    fetchDiets,
};
