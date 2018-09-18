import { createSelector } from 'reselect';

export const authenticatedSelector = createSelector(
    (state: any) => state.auth.authenticated,
    authenticated => authenticated,
);
