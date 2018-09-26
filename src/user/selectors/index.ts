import { createSelector } from 'reselect';

import settings from '../../config/userModeSettings';

export const user = createSelector((state: any) => state.user, user => user.data);

export const userMode = createSelector((state: any) => state.user.mode, mode => mode);

export const userModeSettings = createSelector(
    (state: any) => state.user.mode,
    mode => settings[mode],
);
