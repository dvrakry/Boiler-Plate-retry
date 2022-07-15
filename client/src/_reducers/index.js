const { combineReducers } = require("redux");
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
