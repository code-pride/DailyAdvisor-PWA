import { combineReducers } from "redux";

import { userReducer } from "./user/reducers/";
import { authReducer } from "./auth/reducers";
import { calendar } from "./calendar/reducers/calendar";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  calendar
});
