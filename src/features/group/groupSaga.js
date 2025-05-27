import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchGroupsApi } from "./groupService";
import { getListGroup, getListGroupFinal } from "./groupSlice";
// import { MessageApi } from "../constants";

function* doGetListGroup(action) {
    const { limit } = action.payload;
    const { data, message } = yield call(fetchGroupsApi);
    console.log("Check: data:", data);

    yield put(getListGroupFinal({ data: data, message: message }));

    // if (handleAfterFetch) {
    //     message === MessageApi.Success && handleAfterFetch.fetchIsSuccess();
    // }
}

export default function* groupSaga() {
    yield takeLatest(getListGroup.type, doGetListGroup);
}
