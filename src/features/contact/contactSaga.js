import { call, put, takeEvery } from "redux-saga/effects";
import { fetchContactsApi } from "./contactService";
import { getListContact, getListContactFinal } from "./contactSlice";
import { MessageApi } from "../constants";

function* doGetListContact(action) {
    const { type, limit, handleAfterFetch } = action.payload;
    const { data, message } = yield call(fetchContactsApi, limit, type);
    yield put(getListContactFinal({ data: data, message: message }));

    if (handleAfterFetch) {
        message === MessageApi.Success && handleAfterFetch.fetchIsSuccess();
    }
}

export default function* contactSaga() {
    yield takeEvery(getListContact.type, doGetListContact);
}
