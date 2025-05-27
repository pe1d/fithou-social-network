import { all } from "redux-saga/effects";
import appSaga from "../features/app/appSaga"; // Import your appSaga here
import groupSaga from "../features/group/groupSaga";
import contactSaga from "../features/contact/contactSaga";
export default function* rootSaga() {
    yield all([appSaga(), groupSaga(), contactSaga()]);
}
