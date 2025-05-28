import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchGroupMembersById, fetchGroupsApi } from "./groupService";
import {
    getListGroup,
    getListGroupFinal,
    getListGroupMembers,
    getListGroupMembersFinal,
} from "./groupSlice";
// import { MessageApi } from "../constants";

function* doGetListGroup(action) {
    const { limit } = action.payload;
    const { data, message } = yield call(fetchGroupsApi);

    yield put(getListGroupFinal({ data: data, message: message }));

    // if (handleAfterFetch) {
    //     message === MessageApi.Success && handleAfterFetch.fetchIsSuccess();
    // }
}
function* doGetListGroupMembers(action) {
    const { groupId } = action.payload;
    const { data, message } = yield call(fetchGroupMembersById, groupId);

    yield put(getListGroupMembersFinal({ data: data, message: message }));

    // if (handleAfterFetch) {
    //     message === MessageApi.Success && handleAfterFetch.fetchIsSuccess();
    // }
}
export default function* groupSaga() {
    yield takeLatest(getListGroup.type, doGetListGroup);
    yield takeLatest(getListGroupMembers.type, doGetListGroupMembers);
}
