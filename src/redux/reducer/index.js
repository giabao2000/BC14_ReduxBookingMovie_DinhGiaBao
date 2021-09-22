import { combineReducers } from "redux";
import listChairReducer from "./ListChairReducer";

const rootReducer = combineReducers({
    // child reducer
    listChairReducer,
});

export default rootReducer;
