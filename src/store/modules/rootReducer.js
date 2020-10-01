import { combineReducers } from "redux";

import auth from "./auth/reducer";
import cliente from "./cliente/reducer";

const reducers = combineReducers({
  auth,
  cliente,
});

export default reducers;
