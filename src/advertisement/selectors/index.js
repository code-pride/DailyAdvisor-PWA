import { createSelector } from 'reselect';

export const adverts = createSelector(state => state.adverts, adverts => adverts);

export const advert = createSelector(state => state.advert, advert => advert);
