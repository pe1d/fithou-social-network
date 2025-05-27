import { combineReducers } from "redux";
import appReducer from "../features/app/appSlice";
import groupReducer from "../features/group/groupSlice";
import contactReducer from "../features/contact/contactSlice";
import chatboxReducer from "../features/chatbox/chatboxSlice";
const rootReducer = combineReducers({
    app: appReducer,
    group: groupReducer,
    contact: contactReducer,
    chatbox: chatboxReducer,
});

export default rootReducer;
